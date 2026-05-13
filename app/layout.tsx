import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Jindřich Kraina',
	description: 'Portfolio od Jindřicha Krainy, frontendového vývojáře se zaměřením na React a Next.js.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={`${inter.className} h-full antialiased scroll-smooth scroll-pt-8`}>
			<body className='flex flex-col min-h-full'>{children}</body>
		</html>
	);
}
