import React from 'react';
import Link from 'next/link';

import { Button } from '../ui/button';

import AttributedImage from '../attributed-image';

const Reports = () => {
	return (
		<section className='w-full max-w-screen-xl mx-auto p-6 md:p-16'>
			<h2 className='font-heading font-semibold text-3xl text-center'>
				Reports
			</h2>
			<div className='p-6 mt-10 w-full shadow-lg rounded-2xl flex items-center flex-col-reverse md:flex-row gap-10 md:gap-5'>
				<div className='w-full flex flex-col gap-5'>
					<h3 className='font-semibold text-4xl text-center md:text-left'>
						Project Reports and Documentation
					</h3>
					<p className='font-medium'>
						Reports and documentation related to the project are
						available for download. Click the button below to view
						and download the reports. (Includes presentations,
						reports, and more)
					</p>
					<Button variant={'link'} asChild className='w-fit'>
						<Link href='/reports'>View Reports</Link>
					</Button>
				</div>
				<AttributedImage
					attribute={{
						name: 'Thierry Fousse',
						url: 'https://dribbble.com/shots/15506269-G-stands-for',
					}}
					image={{
						src: '/assets/g-stands-for.png',
						alt: 'PCG Signal Analysis with Adaptive Filtering',
						width: 400,
						height: 200,
						className: 'max-w-sm',
					}}
					figure={{
						className: 'w-fit h-fit animate-float',
					}}
				/>
			</div>
		</section>
	);
};

export default Reports;
