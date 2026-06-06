'use client';

import { projects } from '@/src/data/projects';
import { useAddObserver } from '@/src/hooks/useAddObserver';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { ProjectCard } from './ProjectCard';

export default function ProjectMenu() {
	const t = useTranslations();

	const projectMenuRef = useRef<HTMLDivElement>(null);

	const isProjectMenuIntersecting = useAddObserver(projectMenuRef, false, 0.5);

	return (
		<div ref={projectMenuRef} className={clsx('relative flex flex-wrap justify-center gap-4 w-full transition-all duration-1000', !isProjectMenuIntersecting && 'opacity-0 scale-90')}>
			<div style={{ background: 'radial-gradient(closest-side, oklch(from var(--accent) l c h / .5), transparent)' }} className={clsx('absolute h-full aspect-square scale-150 transition-opacity duration-750 delay-750', !isProjectMenuIntersecting && 'opacity-0')} />
			{Object.entries(projects).map(([projectName, project], idx) => (
				<ProjectCard key={idx} title={projectName} description={t(`projects.${project.translationAlias}.description`)} tags={project.tags} link={project.link} images={project.images} />
			))}
		</div>
	);
}
