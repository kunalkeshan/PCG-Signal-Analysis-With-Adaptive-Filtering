// Dependencies
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SheetNav from './shee-nav';

import { NAVBAR_NAVIGATION } from '@/constants/navigation';

const Navbar = () => {
	return (
		<nav className='sticky top-0 p-6 md:px-16 bg-background'>
			<div className='max-w-screen-xl mx-auto flex items-center justify-between gap-10'>
				<Link
					href={'/'}
					className='hover:scale-105 transition-transform duration-300 flex items-center gap-2'
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
				<ul className='hidden lg:flex items-center gap-5'>
					{NAVBAR_NAVIGATION.map((item) => (
						<li
							key={`navbar-nav-item-${item.url}`}
							className='hover:underline font-medium'
						>
							<Link href={item.url}>{item.name}</Link>
						</li>
					))}
				</ul>
				<SheetNav className='flex lg:hidden' />
			</div>
		</nav>
	);
};

export default Navbar;
