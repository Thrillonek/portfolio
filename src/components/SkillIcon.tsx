'use client';

import { Icon } from '@iconify/react';
import { useEffect, useRef } from 'react';

export default function SkillIcon({ icon, color, name, level }: { icon: string; color: string; name: string; level: 1 | 2 | 3 | 4 }) {
	const sliderRef = useRef<HTMLDivElement>(null);

	const hues = [50, 40, 30, 0];

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && sliderRef.current) {
					sliderRef.current.style.width = `${level * 25}%`;
				}
			},
			{ threshold: 1 },
		);

		if (sliderRef.current) {
			observer.observe(sliderRef.current);
		}

		return () => {
			if (sliderRef.current) {
				observer.unobserve(sliderRef.current);
			}
		};
	}, [sliderRef.current, level]);

	return (
		<div className='items-center py-2 w-24 layout-col-0'>
			<Icon className='text-5xl' style={{ color }} icon={icon} />
			<div className='items-center w-full layout-col-1'>
				<span className='block text-light-gray text-center'>{name}</span>
				<div className='bg-light-gray rounded-full w-16 h-1'>
					<div ref={sliderRef} className='relative flex items-center rounded-full h-full transition-[width] duration-1500 ease-in-out' style={{ width: `0`, backgroundColor: `hsl(${hues[level - 1]}, 100%, 50%)` }}>
						<div className='right-0 absolute bg-white rounded-full h-[200%] aspect-square translate-x-1/2'></div>
					</div>
				</div>
			</div>
		</div>
	);
}
