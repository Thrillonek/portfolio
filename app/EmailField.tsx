'use client';

import { Icon } from '@iconify/react';
import { useState } from 'react';
import classes from './_EmailField.module.scss';

const email = 'jindrich.kraina@gmail.com';

export default function EmailField() {
	const [copied, setCopied] = useState(false);

	function copyEmail() {
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}

	return (
		<button data-tooltip={copied ? 'Email copied!' : 'Copy email'} onClick={copyEmail} className={classes.emailField}>
			<Icon className='text-accent text-xl' icon='mingcute:mail-line' />
			<span>{email}</span>
		</button>
	);
}
