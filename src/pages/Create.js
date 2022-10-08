import React, { useContext, useEffect, useState } from 'react';

import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { articleContext } from '../utils/store';

import Loader from '../components/loader';

const Create = () => {
	const { dispatch } = useContext(articleContext);
	const auth = getAuth();

	const [isLoading, setIsLoading] = useState(false);
	const [isPreview, setIsPreview] = useState(null);

	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		cover: {},
		description: '',
		title: '',
		type: 'photography',
		userRef: '',
	});

	const { description, type, cover, title, userRef } = formData;

	const handleSubmit = async (e) => {
		e.preventDefault();

		// store images in firesore
	};

	const upLoadToCloudnary = (e) => {
		e.preventDefault();
		if (cover === null) {
			return toast.error('pliz add a file');
		}
		previewFile(cover);
	};
	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setIsPreview(reader.result);
		};
	};

	const handleChange = (e) => {
		if (e.target.files) {
			setFormData((prevState) => ({
				...prevState,
				cover: e.target.files,
			}));
		} else {
			setFormData({ ...formData, [e.target.name]: e.target.value });
		}
	};

	useEffect(() => {
		document.title = 'Create Listing';
		onAuthStateChanged(auth, (user) => {
			if (user) {
				return setFormData({ ...formData, userRef: user.uid });
			}
		});
		// eslint-disable-next-line
	}, [auth]);

	return (
		<section className='p-8 pt-20 min-h-[70vh]'>
			{isLoading ? (
				<Loader />
			) : (
				<>
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
						<button
							type='button'
							className=' hover:text-gray-500 hover:scale-105'
						>
							<FaArrowLeft style={{ paddingRight: 4, display: 'inline' }} /> go
							back
						</button>
					</Link>
					<div className=' w-3/4 h-full mx-auto flex  items-center justify-center'>
						{isPreview && console.log(isPreview)}
						<form
							onSubmit={upLoadToCloudnary}
							className='flex  pt-20 items-start flex-col min-h-[50vh] gap-5'
						>
							<div className='flex items-center justify-center lg:justify-between flex-col lg:flex-row gap-5'>
								<input
									type='text'
									className='shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight w-full lg:w-3/4 focus:outline-none focus:shadow-outline'
									onChange={handleChange}
									name='title'
									value={title}
									placeholder='title...'
								/>
								<input
									type='text'
									className='shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight w-full lg:w-3/4  focus:outline-none focus:shadow-outline'
									onChange={handleChange}
									name='userRef'
									value={userRef}
									placeholder={userRef}
									disabled
								/>

								<input
									type='file'
									id='cover'
									accept='.jpg,.png,.jpeg,.mp4'
									multiple
									onChange={handleChange}
								/>
								{cover.lenth && 'yes'}

								<select
									className='shadow appearance-none border rounded lg:w-[150px] py-2 px-3 text-gray-700 w-full  leading-tight focus:outline-none focus:shadow-outline'
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
				</>
			)}
		</section>
	);
};

export default Create;
