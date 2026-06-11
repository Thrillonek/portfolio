import '@/src/assets/_base.scss';
import '@/src/assets/_form.scss';
import '@/src/assets/_nav.scss';
import { routing } from '@/src/i18n/routing';
import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';

const inter = Inter({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Jindřich Kraina',
	description: "Jindřich Kraina's personal portfolio website showcasing projects, skills, and contact information.",
};

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang='en' className={`${inter.className} h-full antialiased scroll-smooth scroll-pt-8`}>
			<head>
				<meta name='google-site-verification' content='ryTwTvhX56Sv1aNbiOtR0sa_YI7uuC09iqx8-MXZn48' />
			</head>
			<body className='flex flex-col min-h-lvh'>
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
