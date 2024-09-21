import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { CircleHelp } from 'lucide-react';

import AttributedImage from '../attributed-image';

const Hero = () => {
	const subtitles = [
		"Our PCG Signal Analysis project aims to improve the quality of heart sound recordings using advanced digital signal processing techniques. By applying adaptive filtering algorithms, we're working to reduce noise and enhance the clarity of phonocardiogram signals.",
		'This research has potential applications in telemedicine, wearable health devices, and clinical diagnostics. Our goal is to make heart sound analysis more accurate and accessible, potentially aiding in the early detection of cardiac abnormalities.',
	];

	return (
		<section className='bg-background w-full'>
			<div className='max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2'>
				<div className='flex flex-col gap-5 p-6 md:px-16 md:pb-16'>
					<h1 className='font-heading text-5xl font-semibold leading-tight'>
						Project Details
					</h1>
					{subtitles.map((subtitle, index) => (
						<p
							key={`project-hero-subtitle-${index}`}
							className='font-medium'
						>
							{subtitle}
						</p>
					))}
					<Button className='gap-2 lg:w-fit font-semibold' asChild>
						<Link href={'/about'}>
							<CircleHelp className='shrink-0' size={20} />
							<span>About the Project</span>
						</Link>
					</Button>
				</div>
				<AttributedImage
					attribute={{
						name: 'Thierry Fousse',
						url: 'https://dribbble.com/shots/10620598-Science-blueprint',
					}}
					image={{
						src: '/assets/science-blueprint.png',
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
