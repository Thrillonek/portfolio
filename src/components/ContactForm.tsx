'use client';

import React, { useState } from 'react';
import { sendEmail } from '../api/sendEmail';

export default function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	return (
		<form onSubmit={(e) => sendEmail(e, { name, email, message })} className='items-center bg-darker shadow-xl p-8 rounded-2xl w-[min(480px,100%)] layout-col-4'>
			<div>
				<input onChange={(e) => setName(e.target.value)} type='text' placeholder=' ' id='name' />
				<label htmlFor='name'>Your Name</label>
			</div>
			<div>
				<input onChange={(e) => setEmail(e.target.value)} type='email' placeholder=' ' id='email' />
				<label htmlFor='email'>Your Email</label>
			</div>
			<div>
				<textarea onChange={(e) => setMessage(e.target.value)} placeholder=' ' id='message' rows={4} />
				<label htmlFor='message'>Your Message</label>
			</div>
			<button type='submit' className='form-button button'>
				Send!
			</button>
		</form>
	);
}
