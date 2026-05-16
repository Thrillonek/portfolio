import emailjs from '@emailjs/browser';

import { SubmitEvent } from 'react';
import { useApplicationStore } from '../data/stores';

export function sendEmail(e: SubmitEvent<HTMLFormElement>, { name, email, message }: { name: string; email: string; message: string }) {
	e.preventDefault();
	e.target.reset();

	const setActiveModal = useApplicationStore.getState().setActiveModal;

	let mailMessage = `From: <${email}>\n\n${message}`;

	emailjs
		.send(
			'service_ilt294h',
			'template_y7ki1e4',
			{
				name,
				message: mailMessage,
			},
			{
				publicKey: '4SSdZYrrDgwpEpZRO',
			},
		)
		.then(
			(result) => {
				setActiveModal('emailSent');
			},
			(error) => {
				console.log(error.text);
			},
		);
}
