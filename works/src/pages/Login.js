import React, { useContext, useState } from 'react';
import axios from 'axios';
import { articleContext } from '../utils/store';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const { state, dispatch } = useContext(articleContext);

	const { error } = state;
	const [formData, setFormData] = useState({
		password: '',
		email: '',
	});
	const { password, email } = formData;
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};
	const handleSignIn = async (e) => {
		e.preventDefault();
		const data = { identifier: email, password };
		try {
			const { data: user } = await axios.post(`/auth/local`, data);
			dispatch({ type: 'LOGIN_IN_USER', payload: user });
			localStorage.setItem('user', JSON.stringify(user));
			setFormData({
				email: '',
				password: '',
			});
			setTimeout(() => navigate('/create'), 2000);
			console.log(user);
		} catch (err) {
			dispatch({
				type: 'USER_ERROR',
				payload: err.message,
			});
			console.log(err);
		}
	};

	return (
		<div className=' w-[80vw] mx-auto grid place-items-center pt-20'>
			<form onSubmit={handleSignIn} className='w-full max-w-xs'>
				<span className=' block  text-red-500'>
					{error && <p>{error.slice(0, 15) + 'pliz log in as admin'}</p>}
				</span>
				<div className='flex flex-wrap -mx-3 mb-4'>
					<div className='w-full px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='email'
						>
							Email
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							id='email'
							value={email}
							onChange={handleChange}
							type='email'
							placeholder='
                        email'
						/>
					</div>
				</div>
				<div className='flex flex-wrap -mx-3 mb-4'>
					<div className='w-full px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='password'
						>
							Password
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							id='password'
							value={password}
							onChange={handleChange}
							type='password'
							placeholder='******************'
						/>
					</div>
				</div>
				<div className=' flex justify-between items-center'>
					<button
						type='submit'
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					>
						login
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
