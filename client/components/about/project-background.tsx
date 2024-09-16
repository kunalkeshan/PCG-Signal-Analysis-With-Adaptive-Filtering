import React from 'react';
import Image from 'next/image';

import AttributedImage from '../attributed-image';

const introParas = [
	"The Phonocardiogram (PCG) signal analysis project emerged from a critical need in cardiac health diagnostics. As cardiovascular diseases continue to be a leading cause of mortality worldwide, there's an increasing demand for more accurate, accessible, and non-invasive diagnostic tools. Our project aims to address this need by leveraging advanced signal processing techniques to analyze heart sounds captured through PCG.",
	'PCG, a graphical representation of heart sounds, has been used in medical practice for decades. However, traditional methods of PCG analysis often fall short when it comes to detecting subtle abnormalities or when dealing with noisy environments. Our project seeks to overcome these limitations by employing cutting-edge adaptive filtering techniques and a novel multi-stage approach.',
];

const evolutionImages = [
	{
		src: '/assets/stethoscope.jpg',
		alt: 'Stethoscope',
	},
	{
		src: '/assets/digital-stethoscope.webp',
		alt: 'Digital Stethoscope',
	},
];

const pcgDetails = [
	{
		title: 'A typical PCG signal consists of two main components:',
		details: [
			'S1 (First Heart Sound): Occurs at the beginning of systole and is associated with the closure of the mitral and tricuspid valves.',
			'S2 (Second Heart Sound): Marks the end of systole and the beginning of diastole, caused by the closure of the aortic and pulmonary valves.',
		],
	},
	{
		title: 'In addition to these primary components, PCG signals may also contain:',
		details: [
			'S3 and S4 sounds: Less common, these can indicate various cardiac conditions.',
			'Murmurs: Abnormal sounds that can suggest valvular disorders or other cardiac abnormalities.',
		],
	},
];

const challenges = [
	{
		title: 'Noise Interference',
		description:
			'PCG recordings are often contaminated by various types of noise, including ambient sounds, patient movement, and respiratory sounds. Distinguishing between actual heart sounds and these interfering noises is a major challenge.',
	},
	{
		title: 'Signal Variability',
		description:
			'Heart sounds can vary significantly between individuals and even within the same individual under different conditions (e.g., rest vs. exercise). This variability makes it difficult to establish universal analysis parameters.',
	},
	{
		title: 'Low-Frequency Components',
		description:
			'Many important features in PCG signals occur at low frequencies, which can be difficult to capture and analyze accurately.',
	},
	{
		title: 'Temporal Variations',
		description:
			'The timing and duration of heart sounds can provide crucial diagnostic information, but accurately measuring these temporal aspects can be challenging, especially in the presence of noise or arrhythmias.',
	},
	{
		title: 'Feature Extraction',
		description:
			'Identifying and extracting relevant features from PCG signals that can reliably indicate specific cardiac conditions is a complex task requiring advanced signal processing techniques.',
	},
	{
		title: 'Real-time Processing',
		description:
			'For many applications, such as continuous monitoring, PCG analysis needs to be performed in real-time, adding computational constraints to the analysis process.',
	},
];

const ProjectBackground = () => {
	return (
		<section className='w-full max-w-screen-xl mx-auto p-6 md:p-16'>
			<h2 className='font-heading font-semibold text-3xl text-center'>
				Project Background
			</h2>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 mt-10'>
				{introParas.map((para, index) => (
					<p
						key={`project-background-para-${index}`}
						className='font-medium text-justify'
					>
						{para}
					</p>
				))}
			</div>
			<div className='flex items-center justify-center w-full gap-10'>
				{evolutionImages.map((image, index) => (
					<Image
						key={`evolution-image-${index}`}
						src={image.src}
						alt={image.alt}
						width={400}
						height={200}
						className='max-w-[10rem] lg:max-w-xs'
					/>
				))}
			</div>
			<div className='mt-10 flex flex-col gap-5'>
				<h3 className='text-2xl font-heading font-medium'>
					Detailed explanation of PCG signals
				</h3>
				<p className='font-medium text-justify'>
					Phonocardiogram (PCG) signals are acoustic representations
					of heart sounds and murmurs. These signals are produced by
					the mechanical activity of the heart, including the opening
					and closing of heart valves, blood flow through the
					chambers, and potential abnormalities in cardiac structure
					or function.
				</p>
				<div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10'>
					{pcgDetails.map((detail, index) => (
						<div key={`pcg-detail-item-${index}`}>
							<h4 className='font-medium'>{detail.title}</h4>
							<ul className='list-inside list-disc mt-5'>
								{detail.details.map((item, i) => (
									<li key={`pcg-detail-${i}`}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<AttributedImage
					attribute={{
						name: 'Ravindra Manohar Potdar',
						url: 'https://www.researchgate.net/figure/Different-components-of-a-normal-PCG-signal_fig2_288987933',
					}}
					image={{
						src: '/assets/pcg-components.png',
						alt: 'PCG Signal Analysis with Adaptive Filtering',
						priority: true,
					}}
					figure={{ className: 'w-full' }}
				/>
			</div>
			<div className='mt-10 flex flex-col gap-5'>
				<h3 className='text-2xl font-heading font-medium'>
					Challenges in PCG signal analysis
				</h3>
				<p className='font-medium'>
					Analyzing PCG signals presents several significant
					challenges:
				</p>
				<ul className='flex justify-center flex-wrap gap-5 lg:gap-10 w-full'>
					{challenges.map((challenge, index) => (
						<li
							key={`challenge-${index}`}
							className='shadow-lg rounded-2xl p-4 relative w-full md:w-1/2 lg:w-1/4 xl:w-1/5 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
						>
							<h4 className='text-lg font-heading font-normal'>
								{challenge.title}
							</h4>
							<p className='font-normal text-sm text-dim-greys mt-4'>
								{challenge.description}
							</p>
						</li>
					))}
				</ul>
				<p className='font-medium'>
					Our project aims to address these challenges through
					innovative signal processing techniques and machine learning
					algorithms.
				</p>
			</div>
		</section>
	);
};

export default ProjectBackground;
