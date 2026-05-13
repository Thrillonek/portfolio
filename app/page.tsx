import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import './base.scss';

export default function Home() {
	return (
		<main className='flex flex-col flex-1 items-center gap-4 bg-black py-4 text-white'>
			<section className='flex flex-col items-center gap-4 py-4 w-[min(90vw,800px)]'>
				<h1 className='text-center'>Jindřich Kraina</h1>
				<div className='bg-accent rounded w-12 h-1' />
				<h4 className='text-center'>Full stack developer & UI/UX designer</h4>
				<p className='text-center'>I use React and Node.js with some help of Figma to create elegant & accessible websites and other user interfaces. Although I’m still a student, I’ve made some big projects that people use and love.</p>
				<p className='flex items-center gap-2'>
					<Icon icon='mingcute:location-fill' className='text-accent text-xl' />
					<span>Havířov, Czech Republic</span>
				</p>
				<div className='flex gap-4'>
					<Link className='button' href='#contact'>
						Contact me
					</Link>
					<Link className='button secondary' href='#projects'>
						View my projects
					</Link>
				</div>
			</section>
		</main>
	);
}
