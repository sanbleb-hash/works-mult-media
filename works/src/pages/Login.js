import React, { useContext, useState } from 'react';
import {
	getAuth,
	updateProfile,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

import { articleContext } from '../utils/store';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';

const Login = () => {
	const { state, dispatch } = useContext(articleContext);

	const { error, loading } = state;
	const [formData, setFormData] = useState({
		password: '',
		email: '',
		name: '',
	});
	const [isLogin, setIsLogin] = useState(true);

	const { password, email, name } = formData;
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};
	const handleSignIn = async (e) => {
		e.preventDefault();

		if (email === '' || password === '') {
			dispatch({ type: 'USER_ERROR' });
			return error;
		}

		let user;
		try {
			const auth = getAuth();
			if (!isLogin) {
				dispatch({ type: 'INITIAL_STAGE' });
				const userCredential = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);

				updateProfile(auth.currentUser, {
					displayName: name,
				});
				user = userCredential.user;
				dispatch({
					type: 'USER_LOGIN',
					payload: user,
				});
			} else {
				dispatch({ type: 'INITIAL_STAGE' });

				const loginCredential = await signInWithEmailAndPassword(
					auth,
					email,
					password
				);
				user = loginCredential.user;
				dispatch({
					type: 'USER_LOGIN',
					payload: user,
				});
			}

			localStorage.setItem('user', JSON.stringify(user));
			setTimeout(() => {
				if (user) navigate('/create');
			}, 2000);
			console.log(user);
			console.log(db);
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
				<span className=' block  text-red-400 '>
					{error && (
						<p className='p-2 text-sm bg-gray-100 mb-4 rounded-lg'>
							make sure your provide correct credientials
						</p>
					)}
				</span>
				<div className='flex flex-wrap -mx-3 mb-4'>
					{!isLogin && (
						<div className='w-full px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='name'
							>
								name
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='name'
								value={name}
								onChange={handleChange}
								type='text'
								placeholder='
                        name'
							/>
						</div>
					)}
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
						{loading ? 'wait...' : isLogin ? 'login' : 'register'}
					</button>
				</div>
				<span className=' text-gray-500 mt-10 inline-block'>
					{isLogin ? "don't have account ? " : 'already have account ? '}
					{isLogin ? (
						<p
							className='inline-block text-blue-500 underline cursor-pointer  '
							onClick={() => setIsLogin(false)}
						>
							register
						</p>
					) : (
						<p
							className='inline-block text-blue-500 underline cursor-pointer  '
							onClick={() => setIsLogin(!isLogin)}
						>
							log in
						</p>
					)}
				</span>
			</form>
		</div>
	);
};

export default Login;
