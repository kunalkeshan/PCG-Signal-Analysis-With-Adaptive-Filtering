import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

import siteConfig from '@/constants/site-config';
import AttributedImage from '../attributed-image';

const Hero = () => {
	const subtitles = [
		'Adaptive filtering is a method for identifying and eliminating noise from a signal. Our project focuses on the use of adaptive filtering to remove noise from phonocardiogram (PCG) signals.',
		'The PCG signal is a non-invasive method for diagnosing heart diseases. The project aims to develop a system that can accurately detect heart diseases by analyzing the PCG signal using adaptive filtering.',
	];

	return (
		<section className='bg-background w-full p-6 md:px-16'>
			<div className='max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
				<div className='flex flex-col gap-5'>
					<h1 className='font-heading text-5xl font-semibold'>
						PCG Signal Analysis with Adaptive Filtering
					</h1>
					{subtitles.map((subtitle, index) => (
						<p
							key={`landing-hero-subtitle-${index}`}
							className='font-medium'
						>
							{subtitle}
						</p>
					))}
					<Button className='gap-2 lg:w-fit font-semibold' asChild>
						<Link href={siteConfig.github} target='_blank'>
							<Github className='shrink-0' size={20} />
							<span>View Code</span>
						</Link>
					</Button>
				</div>
				<AttributedImage
					attribute={{
						name: 'Thierry Fousse',
						url: 'https://dribbble.com/shots/23134330-Electrocardiograph',
					}}
					image={{
						src: '/assets/electrocardiograph.png',
						alt: 'PCG Signal Analysis with Adaptive Filtering',
						priority: true,
					}}
				/>
			</div>
		</section>
	);
};

export default Hero;
