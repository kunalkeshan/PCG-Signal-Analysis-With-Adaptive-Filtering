import React from 'react';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';

const DemoPreview = () => {
	return (
		<section className='w-full bg-background'>
			<div className='max-w-screen-xl mx-auto p-6 md:px-16 md:pb-16'>
				<div className='rounded-3xl bg-white shadow-lg p-6 md:p-10 grid gap-6 lg:grid-cols-[2fr,1fr] items-center'>
					<div>
						<p className='uppercase tracking-[0.2em] text-xs text-primary font-semibold mb-3'>
							Interactive Demo
						</p>
						<h2 className='font-heading text-3xl font-semibold mb-4'>
							Explore PCG filtering in real time
						</h2>
						<p className='font-medium text-dim-greys mb-6'>
							Jump into a live browser demo that replays noisy heart sounds, applies
							adaptive filters, and highlights the improvement as it happens. The
							interactive view is designed to mirror the MATLAB and Python workflows
							included in this repository.
						</p>
						<Button className='gap-2 font-semibold' asChild>
							<Link href='/project/demo'>
								<PlayCircle size={18} />
								Launch live demo
							</Link>
						</Button>
					</div>
					<div className='bg-muted/40 rounded-2xl p-6 text-sm text-dim-greys space-y-4'>
						<div>
							<p className='font-semibold text-foreground'>Demo highlights</p>
							<ul className='mt-2 space-y-2 list-disc list-inside'>
								<li>Real-time waveform updates with adjustable noise.</li>
								<li>Algorithm presets inspired by TLMS, LMS, Kalman, and RLS.</li>
								<li>Instant feedback on SNR and convergence behavior.</li>
							</ul>
						</div>
						<div>
							<p className='font-semibold text-foreground'>Source alignment</p>
							<p className='mt-2'>
								Use the demo as a companion to the MATLAB scripts and Python pipeline
								in this project.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DemoPreview;
