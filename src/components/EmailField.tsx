'use client';

import classes from '@/src/assets/_EmailField.module.scss';
import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const email = 'jindrich.kraina@gmail.com';

export default function EmailField() {
	const [copied, setCopied] = useState(false);

	function copyEmail() {
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}

	const t = useTranslations();

	return (
		<button data-tooltip={copied ? t('emailCopy.active') : t('emailCopy.hover')} onClick={copyEmail} className={classes.emailField}>
			<Icon className='text-accent text-xl' icon='mingcute:mail-line' />
			<span>{email}</span>
			<Icon className='text-light-gray' icon='mingcute:copy-2-line' />
		</button>
	);
}
