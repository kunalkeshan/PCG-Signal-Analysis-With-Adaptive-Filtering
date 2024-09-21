import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { FolderKanban } from 'lucide-react';

import AttributedImage from '../attributed-image';

const Hero = () => {
	const subtitles = [
		"Our Phonocardiogram (PCG) Signal Analysis Project explores new methods for processing heart sound recordings. We're working on applying adaptive filtering techniques to PCG signals, aiming to improve the clarity and interpretability of these recordings.",
		"The project focuses on developing a multi-stage approach to analyze PCG signals. Our goal is to create tools that could potentially assist in cardiac health assessment, though we're still in the early stages of research and development. We hope our work might contribute to the broader field of cardiac signal processing.",
	];

	return (
		<section className='bg-background w-full'>
			<div className='max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2'>
				<div className='flex flex-col gap-5 p-6 md:px-16 md:pb-16'>
					<h1 className='font-heading text-5xl font-semibold leading-tight'>
						About Our PCG Signal Analysis Project
					</h1>
					{subtitles.map((subtitle, index) => (
						<p
							key={`about-hero-subtitle-${index}`}
							className='font-medium'
						>
							{subtitle}
						</p>
					))}
					<Button className='gap-2 lg:w-fit font-semibold' asChild>
						<Link href={'/project'}>
							<FolderKanban className='shrink-0' size={20} />
							<span>View Project Details</span>
						</Link>
					</Button>
				</div>
				<AttributedImage
					attribute={{
						name: 'Thierry Fousse',
						url: 'https://dribbble.com/shots/18900799-Biotech',
					}}
					image={{
						src: '/assets/biotech.png',
						alt: 'PCG Signal Analysis with Adaptive Filtering',
						priority: true,
					}}
					figure={{ className: 'p-6 md:px-16 animate-float' }}
				/>
			</div>
		</section>
	);
};

export default Hero;
