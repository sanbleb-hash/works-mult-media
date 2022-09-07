import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import { RiLoader5Line } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { articleContext } from '../utils/store';

const Create = () => {
	const { state, dispatch } = useContext(articleContext);
	const { user } = state;
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		cover: null,
		description: '',
		title: '',
		type: '',
	});
	const handleChange = (e) => {
		if (cover) {
			setFormData((prevState) => ({
				...prevState,
				cover: e.target.files[0],
			}));
		} else {
			setFormData({ ...formData, [e.target.name]: e.target.value });
		}
	};

	const { description, type, cover, title } = formData;

	const token = user.stsTokenManager.accessToken;
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch('http://localhost:1337/api/articles', {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ data: { description, type, title } }),
			});
			const data = await res.json(res);

			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleUpload = async (e) => {
		e.preventDefault();

		const data = new FormData();
		data.append('files', cover[0]);
		data.append('ref', 'articles');

		let result = await axios.post('http://localhost:1337/upload', data, {
			// headers: {
			// 	Authorization: `Bearer ${token}`,
			// },
		});

		console.log(result);

		// const data = new FormData();
		// data.append('files', cover[0]);

		// const result = await fetch('http://localhost:1337/api/upload', {
		// 	data,
		// 	method: 'POST',
		// });
		// return result;
	};

	useEffect(() => {
		document.title = 'Create Listing';
	}, []);

	return (
		<section className='p-8 pt-20 min-h-[70vh]'>
			{isLoading && (
				<div className='flex justify-center items-center  animate-spin h-screen w-screen'>
					<RiLoader5Line className='text-5xl text-blue-300' />
				</div>
			)}
			<h1 className='text-gray-500 text-center text-5xl capitalize pb-4'>
				post another one
			</h1>

			<button
				onClick={() => {
					dispatch({
						type: 'LOG_OUT_USER',
					});
					navigate('/');
				}}
				className='pl-5 text-gray-700 capitalize border bg-emerald-200 px-4 py-2 hover:text-gray-500 shadow-lg shadow-white '
			>
				log out
			</button>
			<Link className=' text-gray-500 block py-3' to={'/'}>
				<button type='button' className=' hover:text-gray-500 hover:scale-105'>
					<FaArrowLeft style={{ paddingRight: 4, display: 'inline' }} /> go back
				</button>
			</Link>
			<div className=' w-3/4 h-full mx-auto flex  items-center justify-center'>
				<form
					onSubmit={handleUpload}
					className='flex  pt-20 items-start flex-col min-h-[50vh] gap-5'
				>
					<div className='flex items-center justify-center lg:justify-between flex-col lg:flex-row gap-5'>
						<input
							type='text'
							className='shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight w-full focus:outline-none focus:shadow-outline'
							onChange={handleChange}
							name='title'
							value={title}
							placeholder='title...'
						/>

						<input
							type='file'
							name='cover'
							accept='.jpg,.png,.jpeg,.mp4'
							multiple
							onChange={handleChange}
						/>

						<select
							className='shadow appearance-none border rounded lg:w-[200px] py-2 px-3 text-gray-700 w-full leading-tight focus:outline-none focus:shadow-outline'
							onChange={handleChange}
							name='type'
							value={type}
						>
							<option>photography</option>
							<option>video-editing</option>
							<option>graphic-design</option>
						</select>
					</div>
					<div className='flex w-full items-end justify-between '>
						<textarea
							className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							onChange={handleChange}
							name='description'
							value={description}
							placeholder='description'
							rows={4}
						/>
						{formData && (
							<button
								className='bg-green-300 px-5 rounded-lg ml-7 py-2 text-gray-400'
								type='submit'
							>
								Submit
							</button>
						)}
					</div>
				</form>
			</div>
		</section>
	);
};

export default Create;
