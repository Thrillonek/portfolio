import { Icon } from '@iconify/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

type ProjectCardProps = {
	title: string;
	description: string;
	images: StaticImageData[];
	tags: string[];
	link: string;
};

export function ProjectCard({ title, description, images, tags, link }: ProjectCardProps) {
	const t = useTranslations();

	return (
		<div style={{ zIndex: '1' }} className='bg-darker shadow-lg/75 p-4 border border-gray rounded-lg w-md max-w-full layout-col-4'>
			<Image src={images[0]} alt={`${t('projects.altImage')} ${title}`} className='rounded-lg w-full h-auto object-contain shrink-0' />
			<div className='layout-col-1'>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
			<div className='flex flex-wrap gap-x-1 gap-y-2 w-full'>
				{tags.map((tag) => (
					<span key={tag} className='bg-dark shadow/75 px-2 py-1 rounded-full text-light-gray text-xs shrink-0'>
						{tag}
					</span>
				))}
			</div>
			<div style={{ marginTop: 'auto' }} className='flex flex-wrap gap-2'>
				<button id={title} className='button'>
					{t('projects.seeMore')}
				</button>
				<Link className='button secondary' href={link} target='_blank' rel='noopener noreferrer'>
					<span>{t('projects.goToPage')}</span>
					<Icon icon='mingcute:external-link-line' />
				</Link>
			</div>
		</div>
	);
}
