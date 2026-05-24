'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { projects } from '../data/projects';
import { useApplicationStore } from '../data/stores';
import Modal from './ui/Modal';

export default function ProjectModal({ name }: { name: keyof typeof projects }) {
	const setActiveModal = useApplicationStore((state) => state.setActiveModal);

	useEffect(() => {
		function handleClick() {
			setActiveModal(name);
		}

		document.getElementById(name)?.addEventListener('click', handleClick);

		return () => {
			document.getElementById(name)?.removeEventListener('click', handleClick);
		};
	}, []);

	const t = useTranslations();

	const translationProjectNames = {
		'Poznávačka Tool': 'poznavacka',
		'Domácnost hrou': 'domacnostHrou',
	};

	return (
		<Modal name={name} title='Project details'>
			<div className='w-2xl'>
				<div className='p-4 layout-col-4'>
					<h2>{name}</h2>
					<p>{t(`projects.${translationProjectNames[name]}.what`)}</p>
					<div className='flex flex-wrap gap-1'>
						{projects[name].tags.map((tag) => (
							<span key={tag} className='bg-dark shadow px-2 py-1 rounded-full text-light-gray text-xs'>
								{tag}
							</span>
						))}
					</div>
					{projects[name].images.map((image, idx) => {
						return <Image key={idx} src={image} alt={name} className='rounded-lg' />;
					})}
					<Link href={projects[name].link} className='w-fit button secondary' target='_blank' rel='noopener noreferrer'>
						{t('projects.goToPage')}
					</Link>
				</div>
				<div className='p-4 layout-col-4'>
					<h5 className='font-bold'>{t('projects.whyTitle')}</h5>
					<p>{t(`projects.${translationProjectNames[name]}.why`)}</p>
				</div>
			</div>
		</Modal>
	);
}
