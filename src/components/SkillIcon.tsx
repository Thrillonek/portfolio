'use client';

import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

export default function SkillIcon({ icon, color, name, level }: { icon: string; color: string; name: string; level: 1 | 2 | 3 | 4 }) {
	const sliderRef = useRef<HTMLDivElement>(null);

	const t = useTranslations();

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
		<div className='flex gap-4'>
			<Icon className='text-5xl shrink-0' style={{ color }} icon={icon} />
			<div className='justify-center w-full layout-col-1'>
				<span className='block font-medium text-white'>{name}</span>
				<div className='grow layout-col-2'>
					<div style={{ width: 'calc(100% - .5rem)' }} className='bg-light-gray rounded-full h-1'>
						<div ref={sliderRef} className='relative flex items-center rounded-full h-full transition-[width] duration-1500 ease-in-out' style={{ width: `0`, backgroundColor: `hsl(${hues[level - 1]}, 100%, 50%)` }}>
							<div className='right-0 absolute bg-white rounded-full h-[250%] aspect-square translate-x-1/2'></div>
						</div>
					</div>
					<span className='text-light-gray text-xs leading-0'>{t(`skills.skillLevels.${level - 1}`)}</span>
				</div>
			</div>
		</div>
	);
}
