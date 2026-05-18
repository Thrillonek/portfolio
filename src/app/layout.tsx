import '@/src/assets/_base.scss';
import '@/src/assets/_form.scss';
import '@/src/assets/_nav.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Jindřich Kraina',
	description: "Jindřich Kraina's personal portfolio website showcasing projects, skills, and contact information.",
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
