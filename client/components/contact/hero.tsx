import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { CircleHelp } from 'lucide-react';

import AttributedImage from '../attributed-image';

const Hero = () => {
	const subtitles = [
		'For your convenience, we have provided detailed contact information below, along with a selection of frequently asked questions (FAQs). Please do not hesitate to reach out to any of our team members or consult the FAQs for further assistance.',
	];

	return (
		<section className='bg-background w-full'>
			<div className='max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2'>
				<div className='flex flex-col gap-5 p-6 md:px-16 md:pb-16'>
					<h1 className='font-heading text-5xl font-semibold leading-tight'>
						Contact Us
					</h1>
					{subtitles.map((subtitle, index) => (
						<p
							key={`contact-hero-subtitle-${index}`}
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
						url: 'https://dribbble.com/shots/4631339-Contact-Illustration',
					}}
					image={{
						src: '/assets/contact.png',
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
