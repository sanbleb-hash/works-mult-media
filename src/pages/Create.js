import React, { useContext, useEffect, useState } from 'react';

import { FaArrowLeft, FaUpload } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { articleContext } from '../utils/store';

import Loader from '../components/loader';
import axios from 'axios';

const Create = () => {
	const { dispatch } = useContext(articleContext);
	const auth = getAuth();

	const [isLoading, setIsLoading] = useState(false);

	const [showUpload, setShowUpLoad] = useState(false);

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
		try {
			setIsLoading(true);
			const { data } = await axios.post(
				'/https://works-mult-media.onrender.com/api/articles/create',
				formData
			);

			if (data) {
				setIsLoading(false);
				toast.success('article created successfully');
				navigate(`https://works-mult-media.onrender.com/featured/${data.type}`);
			}
		} catch (err) {
			toast.error(err);
		}
	};

	const upLoadToCloudnary = async (e, imageField = 'cover') => {
		e.preventDefault();
		const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/auto/upload`;
		try {
			setShowUpLoad(true);
			const {
				data: { signature, timestamp },
			} = await axios.post(
				'https://works-mult-media.onrender.com/api/v1/upload'
			);

			const upload = e.target.files[0];
			const formInput = new FormData();
			formInput.append('file', upload);
			formInput.append('signature', signature);
			formInput.append('timestamp', timestamp);

			formInput.append('api_key', process.env.REACT_APP_CLOUDINARY_API_KEY);
			const { data } = await axios.post(url, formInput, {
				headers: { 'Content-Type': 'multipart/form-data' },
			});

			setIsLoading(false);
			setFormData({
				...formData,
				cover: { photo: data.secure_url, public_id: data.public_id },
			});
			console.log(data);
			toast.success('File uploaded successfully');
		} catch (err) {
			toast.error({ err });
		}
	};

	const handleChange = (e) => {
		if (e.target.files) {
			setFormData((prevState) => ({
				...prevState,
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
						<form
							onSubmit={handleSubmit}
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
								<div>
									{showUpload ? (
										<>uploading..</>
									) : (
										<label
											className='text-xl flex items-center gap-2 border border-gray-500 rounded p-2 cursor-pointer '
											htmlFor='imageFile'
										>
											<FaUpload fill='green' />
											<span className='text-xl text-gray-500'>upload</span>
										</label>
									)}
									<input
										hidden
										type='file'
										accept='.jpg,.png,.jpeg,.mp4'
										id='imageFile'
										onChange={upLoadToCloudnary}
									/>
								</div>

								<input
									type='text'
									name='cover'
									id='cover'
									onChange={handleChange}
									value={cover.photo}
								/>

								<select
									className='shadow appearance-none border rounded lg:w-[150px] py-2 px-3 text-gray-700 w-full  leading-tight focus:outline-none focus:shadow-outline'
									onChange={handleChange}
									name='type'
									value={type}
								>
									<option>photography</option>
									<option>video-production</option>
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
