'use client';

import classes from '@/src/assets/_OtherHobbies.module.scss';
import { Icon } from '@iconify/react';
import { MouseEvent, useEffect, useState } from 'react';
import { hobbies } from '../data/hobbies';
import { useApplicationStore } from '../data/stores';
import Modal from './ui/Modal';

type HobbyCardProps = {
	title: string;
	description: string;
	icon: string;
};

export default function OtherHobbies() {
	const [activeHobby, setActiveHobby] = useState<string | null>(null);
	const [isHobbyInfoVisible, setIsHobbyInfoVisible] = useState(false);

	useEffect(() => {
		function handleMouseEnter(e: MouseEvent) {
			setActiveHobby(e.currentTarget.getAttribute('data-title'));
			setIsHobbyInfoVisible(true);
		}

		Object.keys(hobbies).forEach((hobby) => {
			const element = document.querySelector(`[data-title="${hobby}"]`) as HTMLElement;
			if (element) {
				element.addEventListener('mouseenter', handleMouseEnter as any);
				element.addEventListener('mouseleave', () => setIsHobbyInfoVisible(false));
			}
		});

		return () => {
			Object.keys(hobbies).forEach((hobby) => {
				const element = document.querySelector(`[data-title="${hobby}"]`) as HTMLElement;
				if (element) {
					element.removeEventListener('mouseenter', handleMouseEnter as any);
					element.removeEventListener('mouseleave', () => setIsHobbyInfoVisible(false));
				}
			});
		};
	}, []);

	return (
		<div className={'bg-darker relative p-8 border border-gray rounded-2xl h-fit layout-col-4'}>
			<h3>My other hobbies</h3>
			<div data-visible={isHobbyInfoVisible} className={classes['hobby-info']}>
				<HobbyInfo activeHobby={activeHobby} />
			</div>
			{Object.keys(hobbies).map((hobby, idx) => (
				<Modal key={idx} title='Hobby' name={hobby}>
					<HobbyInfo activeHobby={hobby} />
				</Modal>
			))}
			<div className='gap-4 grid 2xl:grid-cols-2'>
				<HobbyCard title='Calisthenics' description='A cool athletic sport focused on physical exercises using your bodyweight and some bars.' icon='mingcute:barbell-line' />
				<HobbyCard title='Math' description='I like learning new concepts, going to competitions and training my brain.' icon='mynaui:math-square' />
				<HobbyCard title='Music' description='I think everyone has this on their list. I still have to include it here, because I listen to music everyday.' icon='mingcute:music-line' />
				<HobbyCard title='Random skills' description='Cubing, parkour, card tricks, juggling, stretching…' icon='mingcute:flash-line' />
			</div>
		</div>
	);
}

function HobbyInfo({ activeHobby }: { activeHobby: string | null }) {
	return (
		<>
			<div className='flex items-center gap-4 mb-2'>
				<div className='place-items-center grid rounded-full w-12 aspect-square bg-accent-muted'>{activeHobby && <Icon icon={hobbies[activeHobby as keyof typeof hobbies].icon} className='text-accent text-2xl' />}</div>
				<h3>{activeHobby}</h3>
			</div>
			<p>{hobbies[activeHobby as keyof typeof hobbies]?.description}</p>
		</>
	);
}

function HobbyCard({ title, description, icon }: HobbyCardProps) {
	const setActiveModal = useApplicationStore((state) => state.setActiveModal);

	function handleClick() {
		if (!window.matchMedia('(pointer: fine)').matches) setActiveModal(title);
	}

	return (
		<div data-title={title} onClick={handleClick} className='bg-dark shadow p-4 rounded-lg hobby-card layout-col-2'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center gap-2'>
					<Icon icon={icon} className='text-accent text-2xl' />
					<h4>{title}</h4>
				</div>
				<Icon icon='mingcute:information-line' className='text-accent text-2xl shrink-0' />
			</div>
			<p>{description}</p>
		</div>
	);
}
