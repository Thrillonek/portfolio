import { Icon } from '@iconify/react';

type HobbyCardProps = {
	title: string;
	description: string;
	icon: string;
};

export default function HobbyCard({ title, description, icon }: HobbyCardProps) {
	return (
		<div className='bg-dark shadow p-4 rounded-lg layout-col-2'>
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
