'use client';

// Dependencies
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { NAVBAR_NAVIGATION } from '@/constants/navigation';

interface Props extends React.HTMLProps<typeof SheetTrigger> {}

const SheetNav: React.FC<Props> = ({ className }) => {
	const [open, setOpen] = useState(false);

	const handleToggleOpen = (value: boolean) => {
		setOpen(value);
	};

	const handleCloseSheet = () => {
		setOpen(false);
	};

	return (
		<Sheet open={open} onOpenChange={handleToggleOpen}>
			<SheetTrigger className={cn(className)}>
				<Menu className='shrink-0' strokeWidth={2} />
			</SheetTrigger>
			<SheetContent className='bg-background'>
				<SheetHeader>
					<SheetTitle className='flex flex-col gap-2'>
						<Link
							href={'/'}
							className='hover:scale-105 transition-transform duration-300 w-fit'
							onClick={handleCloseSheet}
						>
							<Image
								src='/assets/logo.png'
								alt='PCG Signal Analysis with Adaptive Filtering'
								width={40}
								height={40}
							/>
						</Link>
						<p>PCG Signal Analysis with Adaptive Filtering</p>
					</SheetTitle>
					<SheetDescription>
						A project on signal analysis using adaptive filtering.
					</SheetDescription>
				</SheetHeader>
				<ul className='flex flex-col gap-2 mt-8'>
					{NAVBAR_NAVIGATION.map((item) => (
						<li
							key={`navbar-sheet-nav-item-${item.url}`}
							className='hover:underline font-medium text-lg'
						>
							<Link href={item.url} onClick={handleCloseSheet}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</SheetContent>
		</Sheet>
	);
};

export default SheetNav;
