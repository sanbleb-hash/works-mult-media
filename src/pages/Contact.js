import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const form = useRef();
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		setFormData({
			name: '',
			email: '',
			subject: '',
			message: '',
		});
		setTimeout(() => {
			navigate('/thank-you');
		}, 1300);
	};

	return (
		<section className='w-full pt-[10vh] px-4 min-h-[80vh] bg-[url("https://cdn.pixabay.com/photo/2016/06/04/14/56/icon-1435687__340.png")] bg-cover bg-center md:bg-right bg-no-repeat  '>
			<h1 className=' tracking-wider text-gray-600 text-center pb-5'>
				Contact
			</h1>
			<p className=' tracking-wider text-gray-500 text-center text-xl md:text-3xl'>
				hello 👋, waiting to hear from you
			</p>
			<form
				ref={form}
				onSubmit={sendEmail}
				className=' py-10 max-w-[350px] px-4 flex flex-col gap-3 items-center justify-center mx-auto lg:ml-20 '
			>
				<input
					className=' w-full ring-0
               border focus:right-0 bg-transparent focus:border-purple-300 text-purple-400 caret-red-300 placeholder:text-purple-500 rounded-sm'
					type='text'
					name='name'
					placeholder=' name'
					onChange={handleChange}
				/>
				<input
					className=' w-full ring-0
               border focus:right-0 bg-transparent focus:border-purple-300 text-purple-400 caret-red-300 placeholder:text-purple-500 rounded-sm'
					type='text'
					name='email'
					placeholder='email'
					onChange={handleChange}
				/>
				<input
					className=' w-full ring-0
               border focus:right-0 bg-transparent focus:border-purple-300 text-purple-400 caret-red-300 placeholder:text-purple-500 rounded-sm'
					type='text'
					name='subject'
					placeholder='Subject'
					onChange={handleChange}
				/>
				<textarea
					className=' w-full ring-0
               border focus:right-0 bg-transparent focus:border-purple-300 text-purple-400 caret-red-300 placeholder:text-purple-500 rounded-sm'
					name='message'
					id=''
					cols='30'
					rows='3'
					placeholder='message'
					onChange={handleChange}
				></textarea>
				<button
					className=' block bg-purple-200 text-gray-600 w-full py-2 hover:bg-purple-300 shadow-xl rounded-md'
					type='submit'
				>
					Send
				</button>
			</form>
		</section>
	);
};

export default Contact;
