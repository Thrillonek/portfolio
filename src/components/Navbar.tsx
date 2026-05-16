'use client';

import iconSvg from '@/src/app/icon.svg';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		function handleClick() {
			setIsMenuOpen(false);
		}

		document.querySelectorAll('nav a, nav button').forEach((el) => {
			el.addEventListener('click', handleClick);
		});

		return () => {
			document.querySelectorAll('nav a, nav button').forEach((el) => {
				el.removeEventListener('click', handleClick);
			});
		};
	}, []);

	return (
		<header className='flex justify-center w-full'>
			<button className='menu' onClick={() => setIsMenuOpen(true)}>
				<Icon icon='mingcute:menu-fill' className='text-light-gray' />
			</button>
			<div onClick={() => setIsMenuOpen(false)} className={clsx('lg:hidden fixed inset-0 bg-black/50 opacity-0 transition-opacity', isMenuOpen ? 'opacity-100 pointer-events-auto' : 'pointer-events-none')}></div>
			<nav data-active={isMenuOpen} className='shadow-2xl'>
				<button className='lg:hidden top-1 left-1 absolute bg-dark p-2 rounded-full' onClick={() => setIsMenuOpen(false)}>
					<Icon icon='mingcute:close-line' className='text-light-gray' />
				</button>
				<Link href='#hero' className='flex items-center gap-2'>
					<Image src={iconSvg} width={32} alt={'Logo'} />
					<h4>Jindřich Kraina</h4>
				</Link>
				<div className='flex max-lg:flex-col gap-4'>
					<Link href='#about'>About</Link>
					<Link href='#tech-stack'>Tech stack</Link>
					<Link href='#projects'>Projects</Link>
					<Link href='#contact'>Contact</Link>
				</div>
				<button className='flex items-center gap-1 px-2 py-1 rounded text-white hover:text-accent transition-colors hover:bg-accent-muted'>
					<Icon icon='mdi:language' />
					<span className='text-sm'>EN</span>
				</button>
			</nav>
		</header>
	);
}
