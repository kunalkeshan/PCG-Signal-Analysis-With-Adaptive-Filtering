import React from 'react';

import { CircleCheckBig } from 'lucide-react';

interface KeyFeatureItem {
	title: string;
	features: string[];
}

const keyFeatures: KeyFeatureItem[] = [
	{
		title: 'Multi-stage Feed-forward Adaptive Filter',
		features: [
			'Utilizes multiple stages of filtering for enhanced noise reduction',
			'Each stage builds upon the improvements made by the previous stage',
		],
	},
	{
		title: 'Automatic Adjustment of Filter Stages',
		features: [
			'The system can dynamically adapt the number of filter stages based on signal quality',
			'Optimizes computational efficiency while maintaining high performance',
		],
	},
	{
		title: 'Adaptive Algorithm Switching',
		features: [
			'Alternates between Least Mean Squares (LMS) and Sign-LMS algorithms',
			'Balances between convergence speed and stability for optimal performance',
		],
	},
	{
		title: 'Configurable Filter Parameters',
		features: [
			'Adjustable filter length for fine-tuning the trade-off between noise reduction and computational complexity',
			'Customizable step size (learning rate) to control adaptation speed and stability',
		],
	},
	{
		title: 'Synthetic PCG Signal Generation',
		features: [
			'Includes capability to generate synthetic PCG signals for testing and validation',
			'Allows for controlled experiments with known signal characteristics',
		],
	},
	{
		title: 'Customizable Noise Addition',
		features: [
			'Can add controlled amounts of noise to clean signals',
			"Enables testing of the filter's performance under various noise conditions",
		],
	},
	{
		title: 'Real-time Signal-to-Noise Ratio (SNR) Calculation',
		features: [
			'Continuously measures SNR improvement',
			'Provides quantitative assessment of filter performance',
		],
	},
	{
		title: 'Visualizations of Signal Processing Stages',
		features: [
			'Generates plots of original, noisy, and filtered signals',
			'Enables visual inspection and comparison of filter effectiveness',
		],
	},
	{
		title: 'Flexible Input Handling',
		features: [
			'Can process both synthetic and real PCG recordings',
			'Adaptable to various PCG signal formats and sampling rates',
		],
	},
	{
		title: 'Performance Metrics Reporting',
		features: [
			'Calculates and reports key performance indicators like SNR improvement',
			'Facilitates objective evaluation and comparison of different filter configurations',
		],
	},
	{
		title: 'Modular Design',
		features: [
			'Separates signal generation, noise addition, filtering, and analysis components',
			'Allows for easy extension and modification of individual components',
		],
	},
	{
		title: 'Scalable Processing',
		features: [
			'Capable of handling both short PCG segments and longer recordings',
			'Suitable for both quick tests and extended monitoring scenarios',
		],
	},
	{
		title: 'Error Analysis',
		features: [
			'Computes and tracks error signals throughout the filtering process',
			'Useful for debugging and fine-tuning filter performance',
		],
	},
	{
		title: 'Adaptive to Various Noise Types',
		features: [
			'Effective against different noise sources common in PCG recordings (e.g., respiratory sounds, ambient noise)',
			'Robust performance across diverse recording conditions',
		],
	},
];

const KeyFeatures = () => {
	return (
		<div className='w-full max-w-screen-xl mx-auto p-6 md:px-16'>
			<h2 className='font-heading font-semibold text-3xl text-center'>
				Key Features
			</h2>
			<ul className='flex justify-center flex-wrap gap-5 lg:gap-10 mt-10 w-full'>
				{keyFeatures.map((feature, index) => (
					<li
						key={`key-feature-${index}`}
						className='shadow-lg rounded-2xl p-4 relative w-full md:w-1/2 lg:w-1/4 xl:w-1/5 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
					>
						<CircleCheckBig className='shrink-0 text-xl lg:text-4xl absolute -top-2 -right-2 rotate-12 group-hover:rotate-0 transition-transform duration-300' />
						<h3 className='text-lg font-heading font-normal'>
							{feature.title}
						</h3>
						<ul className='mt-4 list-disc list-inside flex flex-col gap-2'>
							{feature.features.map((item, i) => (
								<li
									key={`key-feature-item-${i}`}
									className='font-normal text-sm text-dim-greys'
								>
									{item}
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};

export default KeyFeatures;
