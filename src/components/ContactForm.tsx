'use client';

import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { sendEmail } from '../api/sendEmail';
import Modal from './ui/Modal';

export default function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	return (
		<>
			<form onSubmit={(e) => sendEmail(e, { name, email, message })} className='items-center bg-darker shadow-xl p-8 rounded-2xl w-[min(480px,100%)] layout-col-4'>
				<div>
					<input required onChange={(e) => setName(e.target.value)} type='text' placeholder=' ' id='name' />
					<label htmlFor='name'>Your Name</label>
				</div>
				<div>
					<input required onChange={(e) => setEmail(e.target.value)} type='email' placeholder=' ' id='email' />
					<label htmlFor='email'>Your Email</label>
				</div>
				<div>
					<textarea onChange={(e) => setMessage(e.target.value)} placeholder=' ' id='message' rows={4} />
					<label htmlFor='message'>Your Message (optional)</label>
				</div>
				<button type='submit' className='form-button button'>
					Send!
				</button>
			</form>
			<Modal title='Message Sent' name='emailSent' className='items-center text-center layout-col-2'>
				<div className='place-items-center grid bg-lime-500/15 rounded-full w-20 aspect-square'>
					<Icon className='text-lime-500 text-4xl' icon='mingcute:check-line' />
				</div>
				<h2>Success!</h2>
				<p>Your message has been sent! Thank you for reaching out to me.</p>
			</Modal>
		</>
	);
}
