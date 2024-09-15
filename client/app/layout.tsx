import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import type { Metadata } from 'next';
import { Fraunces, Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const fraunces = Fraunces({
	subsets: ['latin'],
	variable: '--font-fraunces',
	display: 'swap',
});
const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'PCG Signal Analysis with Adaptive Filtering',
	description: 'A project on signal analysis using adaptive filtering.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					fraunces.variable,
					poppins.variable,
					'font-body antialiased'
				)}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
