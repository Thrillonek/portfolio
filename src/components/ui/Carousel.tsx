'use client';

import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Carousel({ images }: { images: StaticImageData[] }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const t = useTranslations();

	const carouselRef = useRef<HTMLDivElement>(null);

	function changeImage(side: 'left' | 'right') {
		const duration = 300;

		if (side === 'left') {
			setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
		} else {
			setCurrentIndex((prev) => (prev + 1) % images.length);
		}

		carouselRef.current?.animate({ transform: `translateX(${100 * (side === 'left' ? -1 : 1)}%)` }, { duration: 0, fill: 'forwards' });
		carouselRef.current?.animate({ transform: `translateX(0)` }, { duration, easing: 'ease-in-out', fill: 'forwards' });
	}

	return (
		<div className='relative flex items-center rounded-lg w-full h-full overflow-hidden'>
			<button onClick={() => changeImage('left')} className='left-2 z-10 absolute bg-neutral-700/50 hover:bg-neutral-700/75 p-1 rounded-full transition-colors'>
				<Icon icon='mdi:chevron-left' className='text-3xl' />
			</button>
			<button onClick={() => changeImage('right')} className='right-2 z-10 absolute bg-neutral-700/50 hover:bg-neutral-700/75 p-1 rounded-full transition-colors'>
				<Icon icon='mdi:chevron-right' className='text-3xl' />
			</button>
			<div ref={carouselRef} style={{ aspectRatio: `${images[0].width} / ${images[0].height}` }} className='relative flex w-full'>
				{Array.from({ length: 3 }, (_, idx) => idx - 1).map((idx) => {
					const image = images[(currentIndex + idx + images.length) % images.length];
					return <Image style={{ left: `${idx * 100}%` }} key={idx} className='absolute inset-0 object-cover' src={image} alt={t('projects.altImage')} />;
				})}
			</div>
		</div>
	);
}
