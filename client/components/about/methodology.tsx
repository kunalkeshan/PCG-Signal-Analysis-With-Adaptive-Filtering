import React from 'react';

import {
	AudioWaveform,
	Component,
	LucideIcon,
	SquareStack,
	Timer,
} from 'lucide-react';

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
			</div>
		</section>
	);
};

export default Methodology;
