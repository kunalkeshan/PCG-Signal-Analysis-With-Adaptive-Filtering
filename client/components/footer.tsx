// Dependencies
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FOOTER_SECTIONS } from '@/constants/navigation';

const Footer = () => {
	return (
		<footer className='w-full bg-foreground p-6 md:px-16 text-white mt-auto'>
			<div className='max-w-screen-xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8'>
					{/* Logo and Branding */}
					<div className='col-span-1'>
						<Link
							href={'/'}
							className='hover:scale-105 transition-transform duration-300 flex items-center gap-2 w-fit mb-4'
						>
							<Image
								src='/assets/logo.png'
								alt='PCG Signal Analysis with Adaptive Filtering'
								width={40}
								height={40}
							/>
							<span className='font-semibold text-lg lg:text-2xl font-heading'>
								PCGAwAF
							</span>
						</Link>
						<p className='text-sm text-white/70 max-w-xs'>
							Advanced phonocardiogram signal analysis using
							adaptive filtering techniques for biomedical
							research and education.
						</p>
					</div>

					{/* Footer Sections */}
					{FOOTER_SECTIONS.map((section) => (
						<div key={`footer-section-${section.title}`}>
							<h3 className='font-semibold text-base mb-4'>
								{section.title}
							</h3>
							<ul className='space-y-2'>
								{section.links.map((link) => (
									<li key={`footer-link-${link.url}`}>
										<Link
											href={link.url}
											target={link.target}
											className='text-sm text-white/70 hover:text-white transition-colors duration-200'
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<hr className='my-4 border border-white/50 rounded-2xl' />

				<div className='flex flex-wrap items-center justify-center gap-2 text-center text-sm text-white'>
					<p>&copy; 2024 PCGAwAF. All rights reserved.</p>
					<p>
						Design inspired by{' '}
						<Link
							href={'https://bright-beginnings.webflow.io/'}
							target='_blank'
							className='text-primary underline'
						>
							Bright Beginnings
						</Link>
						.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
