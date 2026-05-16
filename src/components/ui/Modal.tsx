'use client';

import classes from '@/src/assets/_Modal.module.scss';
import { useApplicationStore } from '@/src/data/stores';
import { Icon } from '@iconify/react';
import { useMemo } from 'react';

type ModalProps = {
	children: React.ReactNode;
	name: string;
	title: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLImageElement>, HTMLImageElement>;

function Modal({ title, name, children, ...props }: ModalProps) {
	const activeModal = useApplicationStore((state) => state.activeModal);
	const setActiveModal = useApplicationStore((state) => state.setActiveModal);

	const toggleOpen = (isOpen: boolean) => {
		setActiveModal(isOpen ? name : undefined);
	};

	const isOpen = useMemo(() => activeModal === name, [activeModal, name]);

	return (
		<div data-modal-name={name} onClick={(e) => e.target === e.currentTarget && toggleOpen(false)} data-is-open={isOpen} className={classes.backdrop}>
			<div className={classes.modal}>
				<div className={classes['modal-header']}>
					<h5>{title}</h5>
					<button onClick={() => toggleOpen(false)}>
						<Icon icon='mingcute:close-line' />
					</button>
				</div>
				<div className={classes['modal-content']}>
					<div {...props}>{children}</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
