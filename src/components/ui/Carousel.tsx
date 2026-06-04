'use client';

import { useAddEventListener } from '@/src/hooks/useAddEventListener';
import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState, type TouchEvent } from 'react';

function animate(element: HTMLElement, keyframes: Keyframe[] | PropertyIndexedKeyframes, options: KeyframeAnimationOptions) {
	let anim = element.animate(keyframes, options);
	anim.finished.then(() => {
		anim.commitStyles();
		anim.cancel();
	});
}

export default function Carousel({ images }: { images: StaticImageData[] }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const t = useTranslations();

	const carouselRef = useRef<HTMLDivElement>(null);
	const startParamsRef = useRef<{ pos: number; time?: number }>({ pos: 0, time: undefined });
	const currentOffsetRef = useRef(0);

	function changeImage(side: 'left' | 'right') {
		const duration = 300;

		if (!carouselRef.current) return;

		if (side === 'left') {
			setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
		} else {
			setCurrentIndex((prev) => (prev + 1) % images.length);
		}

		animate(carouselRef.current, { transform: `translateX(calc(${100 * (side === 'left' ? -1 : 1)}% + ${currentOffsetRef.current}px))` }, { duration: 0, fill: 'forwards' });
		animate(carouselRef.current, { transform: `translateX(0)` }, { duration, easing: currentOffsetRef.current === 0 ? 'ease-in-out' : 'ease-out', fill: 'forwards' });
	}

	function handleMouseMove(e: TouchEvent, startParams: { pos: number; time?: number }) {
		if (!carouselRef.current || !startParams.time) return;

		currentOffsetRef.current = e.touches[0].clientX - startParams.pos;
		carouselRef.current.style.transform = `translateX(${currentOffsetRef.current}px)`;
	}

	useAddEventListener('touchmove', (e) => handleMouseMove(e, startParamsRef.current), [startParamsRef.current]);
	useAddEventListener('touchend', () => {
		if (carouselRef.current) {
			const isActionFast = Date.now() - startParamsRef.current.time! < 100;
			if (currentOffsetRef.current > carouselRef.current.clientWidth / 2.5 || (currentOffsetRef.current > 0 && isActionFast)) {
				changeImage('left');
			} else if (currentOffsetRef.current < carouselRef.current.clientWidth / -2.5 || (currentOffsetRef.current < 0 && isActionFast)) {
				changeImage('right');
			} else {
				animate(carouselRef.current, { transform: `translateX(0)` }, { duration: 300, easing: 'ease-in-out', fill: 'forwards' });
			}
		}
		startParamsRef.current = { pos: 0, time: undefined };
		currentOffsetRef.current = 0;
	});

	return (
		<div onTouchStart={(e) => (startParamsRef.current = { pos: e.touches[0].clientX, time: Date.now() })} className='relative flex items-center rounded-lg w-full h-full overflow-hidden select-none'>
			<button onClick={() => changeImage('left')} className='left-2 z-10 absolute bg-neutral-700/50 hover:bg-neutral-700/75 p-1 rounded-full transition-colors'>
				<Icon icon='mdi:chevron-left' className='text-3xl' />
			</button>
			<button onClick={() => changeImage('right')} className='right-2 z-10 absolute bg-neutral-700/50 hover:bg-neutral-700/75 p-1 rounded-full transition-colors'>
				<Icon icon='mdi:chevron-right' className='text-3xl' />
			</button>
			<div ref={carouselRef} style={{ aspectRatio: `${images[0].width} / ${images[0].height}` }} className='relative flex w-full'>
				{Array.from({ length: 3 }, (_, idx) => idx - 1).map((idx) => {
					const image = images[(currentIndex + idx + images.length) % images.length];
					return <Image style={{ left: `${idx * 100}%` }} key={idx} className='absolute inset-0 object-cover pointer-events-none' src={image} alt={t('projects.altImage')} />;
				})}
			</div>
		</div>
	);
}
