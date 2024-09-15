// Dependencies
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FOOTER_NAVIGATION } from '@/constants/navigation';

const Footer = () => {
	return (
		<footer className='w-full bg-foreground p-6 md:px-16 text-white mt-auto'>
			<div className='max-w-screen-xl mx-auto flex items-center justify-between gap-5 flex-wrap'>
				<Link
					href={'/'}
					className='hover:scale-105 transition-transform duration-300 flex items-center gap-2 w-fit'
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
				<ul className='flex items-center gap-5 flex-wrap'>
					{FOOTER_NAVIGATION.map((item) => (
						<li
							key={`footer-nav-item-${item.url}`}
							className='hover:underline'
						>
							<Link href={item.url}>{item.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
