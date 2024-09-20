import React from 'react';

import {
	AudioWaveform,
	Component,
	LucideIcon,
	SquareStack,
	Timer,
} from 'lucide-react';
import AttributedImage from '../attributed-image';

type KeyAspectItem = {
	title: string;
	description: string;
	Icon: LucideIcon;
};

const keyAspects: KeyAspectItem[] = [
	{
		title: 'Real-time Parameter Adjustment',
		description:
			'The filter continuously updates its coefficients based on the incoming signal, allowing it to adapt to changing noise conditions or signal characteristics.',
		Icon: Timer,
	},
	{
		title: 'Multiple Filter Types',
		description:
			'We utilize a combination of different adaptive filter types, including Least Mean Squares (LMS), Recursive Least Squares (RLS), and Kalman filters, each optimized for specific aspects of PCG signal processing.',
		Icon: SquareStack,
	},
	{
		title: 'Frequency-Selective Filtering',
		description:
			'Our adaptive filters are designed to target specific frequency bands where heart sounds and murmurs typically occur, while attenuating noise in other frequency ranges.',
		Icon: AudioWaveform,
	},
	{
		title: 'Non-linear Filtering Elements',
		description:
			'To handle the complex, non-linear nature of some PCG signal components, we incorporate non-linear elements into our adaptive filtering framework.',
		Icon: Component,
	},
];

const multiStageDetails = [
	{
		title: 'Preprocessing',
		details: [
			'Signal segmentation to isolate individual heartbeats',
			'Initial noise reduction using traditional digital filters',
			'Normalization to account for amplitude variations',
		],
	},
	{
		title: 'Adaptive Filtering',
		details: [
			'Application of our advanced adaptive filtering techniques to further reduce noise and enhance signal quality',
			'Separation of heart sounds from murmurs and other cardiac events',
		],
	},
	{
		title: 'Feature Extraction',
		details: [
			'Time-domain feature extraction (e.g., duration of heart sounds, timing intervals)',
			'Frequency-domain feature extraction using techniques like Short-Time Fourier Transform (STFT) and Wavelet Transform',
			'Non-linear feature extraction to capture complex signal dynamics',
		],
	},
	{
		title: 'Machine Learning Classification',
		details: [
			'Use of extracted features to train and apply machine learning models',
			'Classification of heart sounds into normal and various abnormal categories',
			'Potential for identifying specific cardiac conditions based on PCG patterns',
		],
	},
	{
		title: 'Post-processing and Interpretation',
		details: [
			'Integration of classification results with other available patient data',
			'Generation of summary reports and visualizations for clinical interpretation',
		],
	},
];

const Methodology = () => {
	return (
		<section className='w-full bg-background p-6 md:p-16'>
			<div className='max-w-screen-xl mx-auto'>
				<h2 className='font-heading font-semibold text-3xl text-center'>
					Methodology
				</h2>
				<p className='font-medium mt-10'>
					Our project employs advanced adaptive filtering techniques
					to process PCG signals. Adaptive filters are a class of
					digital filters that automatically adjust their parameters
					based on the input signal characteristics. This makes them
					particularly suitable for PCG signal analysis, where the
					signal properties can vary significantly between patients
					and recording conditions.
				</p>
				<p className='font-medium mt-10'>
					Key aspects of our adaptive filtering approach include:
				</p>
				<ul className='w-full grid gird-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5'>
					{keyAspects.map((aspect, index) => (
						<li
							key={`key-aspect-${index}`}
							className='flex flex-col gap-3 p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
						>
							<aspect.Icon size={32} />
							<h3 className='text-lg font-heading font-normal'>
								{aspect.title}
							</h3>
							<p className='font-medium text-balance'>
								{aspect.description}
							</p>
						</li>
					))}
				</ul>
				<AttributedImage
					attribute={{
						name: 'Kyo Takahashi, Naoki Honma and Yoshitaka Tsunekawa',
						url: 'https://www.intechopen.com/chapters/17785',
					}}
					image={{
						src: '/assets/lms-adaptive-filter-diagram.png',
						alt: 'PCG Signal Analysis with Adaptive Filtering',
					}}
					figure={{ className: 'w-full mt-10' }}
				/>
				<div className='mt-10 flex flex-col gap-5'>
					<h3 className='text-2xl font-heading font-medium'>
						Explanation of the multi-stage approach
					</h3>
					<p className='font-medium'>
						Our PCG signal analysis employs a multi-stage approach
						to comprehensively process and interpret the complex
						cardiac signals. This approach allows us to tackle
						different aspects of the signal analysis problem in a
						structured and efficient manner. The stages include:
					</p>
					<ol className='flex list-outside ml-4 list-decimal flex-col gap-5 w-full'>
						{multiStageDetails.map((item, index) => (
							<li key={`challenge-${index}`} className='w-full'>
								<h4 className='text-lg font-heading font-normal'>
									{item.title}
								</h4>
								<ul className='list-inside list-disc'>
									{item.details.map((detail, i) => (
										<li
											key={`pcg-detail-${i}`}
											className='font-normal text-sm text-dim-greys mt-2'
										>
											{detail}
										</li>
									))}
								</ul>
							</li>
						))}
					</ol>
					<p className='font-medium'>
						Each stage in this approach is designed to build upon
						the results of the previous stages, culminating in a
						comprehensive analysis of the PCG signal.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Methodology;
