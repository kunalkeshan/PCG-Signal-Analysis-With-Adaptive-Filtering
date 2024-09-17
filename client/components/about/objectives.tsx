import React from 'react';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import AttributedImage from '../attributed-image';

const objectives = [
	{
		title: 'Improved Accuracy',
		description:
			'By employing advanced signal processing and machine learning techniques, we aim to achieve higher accuracy in detecting and classifying cardiac abnormalities compared to traditional auscultation methods.',
	},
	{
		title: 'Earlier Detection',
		description:
			'The enhanced sensitivity of our analysis may allow for the detection of subtle cardiac abnormalities at earlier stages, potentially leading to earlier interventions and improved patient outcomes.',
	},
	{
		title: 'Non-invasive Screening',
		description:
			'Our technology could provide a powerful, non-invasive screening tool for cardiac health, potentially reducing the need for more invasive or expensive diagnostic procedures in some cases.',
	},
	{
		title: 'Accessibility',
		description:
			'By developing a system that can work with relatively inexpensive PCG recording devices, we could make advanced cardiac diagnostics more accessible, particularly in resource-limited settings or for remote healthcare applications.',
	},
	{
		title: 'Continuous Monitoring',
		description:
			"The real-time processing capabilities we're developing could enable continuous cardiac monitoring, providing a more comprehensive view of a patient's cardiac health over time.",
	},
	{
		title: 'Support for Healthcare Providers',
		description:
			'Our system could serve as a valuable support tool for healthcare providers, offering a second opinion or highlighting potential issues that warrant further investigation.',
	},
	{
		title: 'Standardization',
		description:
			'By providing objective analysis of heart sounds, our system could help standardize cardiac auscultation practices, potentially reducing variability in diagnoses between different healthcare providers.',
	},
];

const Objectives = () => {
	return (
		<section className='w-full max-w-screen-xl mx-auto p-6 md:p-16'>
			<h2 className='font-heading font-semibold text-3xl text-center'>
				Objectives
			</h2>
			<div className='w-full mt-5 grid grid-cols-1 lg:grid-cols-2'>
				<div>
					<div className='shadow-lg p-6 md:px-16 rounded-2xl h-fit'>
						<Accordion type='multiple'>
							{objectives.map((objective, index) => (
								<AccordionItem
									key={`project-overview-item-${index}`}
									value={objective.title}
								>
									<AccordionTrigger className='gap-5'>
										<div className='text-left flex items-center gap-3'>
											<p className='text-4xl rotate-6'>
												{index + 1}
											</p>
											<div>
												<h3 className='text-lg font-heading font-normal'>
													{objective.title}
												</h3>
											</div>
										</div>
									</AccordionTrigger>
									<AccordionContent>
										<p className='font-medium'>
											{objective.description}
										</p>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
					<p className='font-medium mt-5 text-center lg:text-left'>
						Our PCG signal analysis project has the potential to
						significantly impact cardiac health diagnostics in
						several ways as mentioned above.
					</p>
				</div>
				<AttributedImage
					attribute={{
						name: 'Thierry Fousse',
						url: 'https://dribbble.com/shots/23134354-Clipboard',
					}}
					image={{
						src: '/assets/clipboard.png',
						alt: 'PCG Signal Analysis with Adaptive Filtering',
					}}
					figure={{
						className: 'justify-start h-fit lg:sticky top-20',
					}}
				/>
			</div>
		</section>
	);
};

export default Objectives;
