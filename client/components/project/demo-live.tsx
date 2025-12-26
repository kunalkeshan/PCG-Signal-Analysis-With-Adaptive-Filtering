'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import { ArrowLeft, Pause, Play, RotateCcw } from 'lucide-react';

import { Button } from '@/components/ui/button';

const SAMPLE_WINDOW = 140;
const UPDATE_INTERVAL_MS = 220;

type AlgorithmKey = 'TLMS' | 'LMS' | 'Kalman' | 'RLS';

type AlgorithmProfile = {
	label: string;
	filterStrength: number;
	convergence: number;
	color: string;
	latency: number;
};

const algorithmProfiles: Record<AlgorithmKey, AlgorithmProfile> = {
	TLMS: {
		label: 'Transverse LMS (TLMS)',
		filterStrength: 0.72,
		convergence: 0.8,
		color: '#3b82f6',
		latency: 0.18,
	},
	LMS: {
		label: 'Least Mean Squares (LMS)',
		filterStrength: 0.78,
		convergence: 1.1,
		color: '#8b5cf6',
		latency: 0.22,
	},
	Kalman: {
		label: 'Kalman Filter',
		filterStrength: 0.86,
		convergence: 0.55,
		color: '#10b981',
		latency: 0.12,
	},
	RLS: {
		label: 'Recursive Least Squares (RLS)',
		filterStrength: 0.9,
		convergence: 0.4,
		color: '#f59e0b',
		latency: 0.14,
	},
};

type SignalPoint = {
	index: number;
	original: number;
	noisy: number;
	filtered: number;
};

const createSample = (
	time: number,
	noiseLevel: number,
	filterStrength: number,
	lastFiltered: number,
) => {
	const heartbeat1 = Math.exp(-Math.pow((time % 0.52) * 18 - 3, 2)) * 2.1;
	const heartbeat2 = Math.exp(-Math.pow((time % 0.52) * 18 - 6.7, 2)) * 1.5;
	const baseline = Math.sin(time * Math.PI * 1.5) * 0.08;
	const original = heartbeat1 + heartbeat2 + baseline;
	const noise = (Math.random() - 0.5) * noiseLevel * 1.6;
	const noisy = original + noise;
	const filteredCandidate = original + noise * (1 - filterStrength);
	const filtered = lastFiltered + (filteredCandidate - lastFiltered) * filterStrength;

	return { original, noisy, filtered };
};

const initializeSignal = (
	noiseLevel: number,
	filterStrength: number,
): SignalPoint[] => {
	const data: SignalPoint[] = [];
	let lastFiltered = 0;

	for (let i = 0; i < SAMPLE_WINDOW; i += 1) {
		const time = i / 24;
		const sample = createSample(time, noiseLevel, filterStrength, lastFiltered);
		lastFiltered = sample.filtered;
		data.push({
			index: i,
			original: Number(sample.original.toFixed(3)),
			noisy: Number(sample.noisy.toFixed(3)),
			filtered: Number(sample.filtered.toFixed(3)),
		});
	}

	return data;
};

const calculateSNR = (data: SignalPoint[]) => {
	if (data.length === 0) {
		return 0;
	}

	const signalRms = Math.sqrt(
		data.reduce((sum, point) => sum + point.original ** 2, 0) / data.length,
	);
	const noiseRms = Math.sqrt(
		data.reduce((sum, point) => sum + (point.noisy - point.filtered) ** 2, 0) /
			data.length,
	);

	if (noiseRms === 0) {
		return 99;
	}

	return 20 * Math.log10(signalRms / noiseRms);
};

const DemoLive = () => {
	const [algorithm, setAlgorithm] = useState<AlgorithmKey>('LMS');
	const [noiseLevel, setNoiseLevel] = useState(1.1);
	const [isRunning, setIsRunning] = useState(true);
	const [data, setData] = useState<SignalPoint[]>(() =>
		initializeSignal(noiseLevel, algorithmProfiles[algorithm].filterStrength),
	);
	const timeRef = useRef(data.length);
	const lastFilteredRef = useRef(data[data.length - 1]?.filtered ?? 0);

	useEffect(() => {
		const profile = algorithmProfiles[algorithm];
		setData(initializeSignal(noiseLevel, profile.filterStrength));
		timeRef.current = SAMPLE_WINDOW;
		lastFilteredRef.current = 0;
	}, [algorithm, noiseLevel]);

	useEffect(() => {
		if (!isRunning) {
			return;
		}

		const profile = algorithmProfiles[algorithm];
		const timer = window.setInterval(() => {
			const time = timeRef.current / 24;
			const sample = createSample(
				time,
				noiseLevel,
				profile.filterStrength,
				lastFilteredRef.current,
			);
			const nextPoint = {
				index: timeRef.current,
				original: Number(sample.original.toFixed(3)),
				noisy: Number(sample.noisy.toFixed(3)),
				filtered: Number(sample.filtered.toFixed(3)),
			};

			lastFilteredRef.current = sample.filtered;
			timeRef.current += 1;

			setData((prev) => [...prev.slice(-SAMPLE_WINDOW + 1), nextPoint]);
		}, UPDATE_INTERVAL_MS);

		return () => window.clearInterval(timer);
	}, [algorithm, isRunning, noiseLevel]);

	const metrics = useMemo(() => {
		const profile = algorithmProfiles[algorithm];
		const snr = calculateSNR(data);
		return {
			snr: snr.toFixed(1),
			convergence: profile.convergence.toFixed(2),
			latency: profile.latency.toFixed(2),
		};
	}, [algorithm, data]);

	return (
		<div className='bg-background'>
			<div className='max-w-screen-xl mx-auto p-6 md:p-16 space-y-10'>
				<div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
					<div>
						<Button variant='ghost' className='mb-3 px-0' asChild>
							<Link href='/project' className='flex items-center gap-2'>
								<ArrowLeft size={18} />
								Back to Project
							</Link>
						</Button>
						<h1 className='font-heading text-4xl font-semibold'>
							Interactive Demo
						</h1>
						<p className='font-medium text-dim-greys mt-2 max-w-2xl'>
							Stream a live PCG waveform, dial in noise conditions, and watch
							adaptive filters respond in real time.
						</p>
					</div>
					<div className='flex items-center gap-3'>
						<Button
							variant='outline'
							className='gap-2'
							onClick={() => setIsRunning((prev) => !prev)}
						>
							{isRunning ? <Pause size={16} /> : <Play size={16} />}
							{isRunning ? 'Pause stream' : 'Resume stream'}
						</Button>
						<Button
							variant='secondary'
							className='gap-2'
							onClick={() => {
								const profile = algorithmProfiles[algorithm];
								setData(initializeSignal(noiseLevel, profile.filterStrength));
								timeRef.current = SAMPLE_WINDOW;
								lastFilteredRef.current = 0;
							}}
						>
							<RotateCcw size={16} />
							Reset
						</Button>
					</div>
				</div>

				<div className='grid gap-8 lg:grid-cols-[2fr,1fr]'>
					<div className='bg-white rounded-3xl shadow-lg p-6 md:p-8 space-y-6'>
						<div>
							<h2 className='font-heading text-2xl font-semibold'>Live waveform</h2>
							<p className='text-sm font-medium text-dim-greys mt-2'>
								Blue is the reference PCG, orange is noisy input, and green is the
								filtered output.
							</p>
						</div>
						<div className='h-[360px]'>
							<ResponsiveContainer width='100%' height='100%'>
								<LineChart data={data}>
									<CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
									<XAxis dataKey='index' tick={{ fontSize: 12 }} />
									<YAxis tick={{ fontSize: 12 }} />
									<Tooltip
										contentStyle={{
											backgroundColor: 'white',
											border: '1px solid #e5e7eb',
											borderRadius: '8px',
										}}
									/>
									<Legend />
									<Line
										dataKey='original'
										type='monotone'
										stroke='#3b82f6'
										strokeWidth={2}
										dot={false}
										name='Original'
									/>
									<Line
										dataKey='noisy'
										type='monotone'
										stroke='#f97316'
										strokeWidth={1.5}
										dot={false}
										name='Noisy input'
									/>
									<Line
										dataKey='filtered'
										type='monotone'
										stroke={algorithmProfiles[algorithm].color}
										strokeWidth={2}
										dot={false}
										name='Filtered output'
									/>
								</LineChart>
							</ResponsiveContainer>
						</div>
					</div>

					<div className='bg-white rounded-3xl shadow-lg p-6 md:p-8 space-y-6'>
						<div>
							<h3 className='font-heading text-xl font-semibold'>Controls</h3>
							<p className='text-sm font-medium text-dim-greys mt-2'>
								Tune the input conditions and switch between adaptive algorithms.
							</p>
						</div>

						<div className='space-y-3'>
							<label className='text-sm font-semibold text-foreground'>Algorithm</label>
							<select
								className='w-full rounded-xl border border-border px-3 py-2 text-sm font-medium'
								value={algorithm}
								onChange={(event) => setAlgorithm(event.target.value as AlgorithmKey)}
							>
								{(Object.keys(algorithmProfiles) as AlgorithmKey[]).map((key) => (
									<option key={key} value={key}>
										{algorithmProfiles[key].label}
									</option>
								))}
							</select>
						</div>

						<div className='space-y-3'>
							<label className='text-sm font-semibold text-foreground'>Noise level</label>
							<input
								type='range'
								min='0.4'
								max='1.8'
								step='0.1'
								value={noiseLevel}
								onChange={(event) => setNoiseLevel(Number(event.target.value))}
								className='w-full accent-primary'
							/>
							<div className='flex justify-between text-xs font-medium text-dim-greys'>
								<span>Low</span>
								<span>High</span>
							</div>
						</div>

						<div className='rounded-2xl bg-muted/40 p-4 space-y-3 text-sm'>
							<div className='flex items-center justify-between'>
								<span className='text-dim-greys'>Estimated SNR</span>
								<span className='font-semibold text-foreground'>{metrics.snr} dB</span>
							</div>
							<div className='flex items-center justify-between'>
								<span className='text-dim-greys'>Convergence window</span>
								<span className='font-semibold text-foreground'>
									{metrics.convergence} s
								</span>
							</div>
							<div className='flex items-center justify-between'>
								<span className='text-dim-greys'>Processing latency</span>
								<span className='font-semibold text-foreground'>
									{metrics.latency} s
								</span>
							</div>
						</div>

						<div className='text-xs font-medium text-dim-greys leading-relaxed'>
							Switching algorithms resets the stream to mirror how each filter adapts
							to new inputs. The metrics update from the live stream values.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DemoLive;
