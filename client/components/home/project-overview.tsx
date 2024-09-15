import React from 'react';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import AttributedImage from '../attributed-image';

interface ProjectOverviewDetail {
	title: string;
	description: string;
	details: string[];
}

const details: ProjectOverviewDetail[] = [
	{
		title: 'What is PCG?',
		description:
			'PCG stands for Phonocardiogram. It is a recording of the sounds made by the heart during its functioning.',
		details: [
			'PCG captures acoustic signals produced by the mechanical action of the heart.',
			'It primarily records two main heart sounds: S1 (associated with the closing of the mitral and tricuspid valves) and S2 (associated with the closing of the aortic and pulmonic valves).',
			'PCG can also capture additional sounds like murmurs, which can indicate various heart conditions.',
		],
	},
	{
		title: 'Importance of PCG Signal Analysis',
		description: 'PCG signal analysis is crucial for several reasons:',
		details: [
			'Non-invasive Diagnosis: PCG provides valuable information about heart function without requiring invasive procedures.',
			'Detection of Heart Conditions: It can help in identifying various heart conditions such as valve disorders, congenital heart defects, and other cardiac abnormalities.',
			'Complementary to Other Tests: PCG analysis complements other cardiac tests like ECG (Electrocardiogram), providing a more comprehensive view of heart health.',
			'Continuous Monitoring: It allows for long-term monitoring of cardiac function, which is essential for tracking the progression of heart conditions or the effectiveness of treatments.',
			'Cost-Effective: PCG recording devices are generally less expensive compared to many other cardiac imaging technologies.',
			'However, PCG signals often contain noise from various sources (e.g., respiratory sounds, ambient noise), which can make accurate analysis challenging. This is where advanced signal processing techniques, like adaptive filtering, become crucial.',
		],
	},
	{
		title: 'Brief Explanation of Adaptive Filtering',
		description:
			'Adaptive filtering is a signal processing technique used to remove noise and unwanted components from a signal.',
		details: [
			'Dynamic Adjustment: Unlike static filters, adaptive filters can adjust their parameters in real-time based on the input signal.',
			'Noise Reduction: It can effectively separate the desired PCG signal from various types of noise, even when the noise characteristics change over time.',
			'Improved Signal Quality: By reducing noise, adaptive filtering enhances the quality of PCG signals, making it easier to identify important features and anomalies.',
			'Customization: The filter can be optimized for different types of PCG signals and noise environments.',
			'Iterative Process: The filter continuously learns from the input data, improving its performance over time.',
		],
	},
];

const ProjectOverview = () => {
	return (
		<section className='w-full max-w-screen-xl mx-auto p-6 md:px-16'>
			<h2 className='font-heading font-semibold text-3xl'>
				Project Overview
			</h2>
			<div className='w-full mt-5 grid grid-cols-1 lg:grid-cols-2'>
				<AttributedImage
					attribute={{
						name: 'Thierry Fousse',
						url: 'https://dribbble.com/shots/23134354-Clipboard',
					}}
					image={{
						src: '/assets/clipboard.png',
						alt: 'PCG Signal Analysis with Adaptive Filtering',
						priority: true,
					}}
					figure={{
						className: 'justify-start h-fit lg:sticky top-20',
					}}
				/>
				<div className='shadow-lg p-6 md:px-16 rounded-2xl h-fit'>
					<Accordion type='multiple'>
						{details.map((detail, index) => (
							<AccordionItem
								key={`project-overview-item-${index}`}
								value={detail.title}
							>
								<AccordionTrigger className='gap-5'>
									<div className='text-left flex items-start gap-3'>
										<p className='text-4xl rotate-6'>
											{index + 1}
										</p>
										<div>
											<h3 className='text-lg font-heading font-normal'>
												{detail.title}
											</h3>
											<p className='font-normal text-sm text-dim-greys'>
												{detail.description}
											</p>
										</div>
									</div>
								</AccordionTrigger>
								<AccordionContent>
									<ul className='list-inside list-disc flex flex-col gap-3'>
										{detail.details.map(
											(item, detailIndex) => (
												<li
													key={`project-overview-detail-${detailIndex}`}
													className='font-medium'
												>
													{item}
												</li>
											)
										)}
									</ul>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default ProjectOverview;
