import emailjs from '@emailjs/browser';

import { SubmitEvent } from 'react';

export function sendEmail(e: SubmitEvent<HTMLFormElement>, { name, email, message }: { name: string; email: string; message: string }) {
	e.preventDefault();
	e.target.reset();

	let mailMessage = `From: <${email}>\n\n${message}`;

	emailjs.send(
		'service_ilt294h',
		'template_y7ki1e4',
		{
			name,
			message: mailMessage,
		},
		{
			publicKey: '4SSdZYrrDgwpEpZRO',
		},
	);
}
