import { Icon } from '@iconify/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import ProjectModal from './ProjectModal';

type ProjectCardProps = {
	title: string;
	description: string;
	image: StaticImageData;
	tags: string[];
	link: string;
};

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
	return (
		<>
			<div className='bg-darker p-4 border border-gray rounded-lg w-md max-w-full layout-col-4'>
				<Image src={image} alt={'Obrázek projektu ' + title} className='rounded-lg w-full h-auto object-contain shrink-0' />
				<div className='layout-col-1'>
					<h4>{title}</h4>
					<p>{description}</p>
				</div>
				<div className='flex gap-1'>
					{tags.map((tag) => (
						<span key={tag} className='bg-dark shadow px-2 py-1 rounded-full text-light-gray text-xs'>
							{tag}
						</span>
					))}
				</div>
				<div style={{ marginTop: 'auto' }} className='flex flex-wrap gap-2'>
					<button id={title} className='button'>
						See more
					</button>
					<Link className='button secondary' href={link} target='_blank' rel='noopener noreferrer'>
						<span>Go to the page</span>
						<Icon icon='mingcute:external-link-line' />
					</Link>
				</div>
			</div>
			<ProjectModal name={title as any} />
		</>
	);
}
