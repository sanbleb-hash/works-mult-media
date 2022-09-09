import React, { useContext, useEffect, useState } from 'react';

import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage';

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { articleContext } from '../utils/store';
import { db } from '../firebase/config';
import Loader from '../components/loader';

const Create = () => {
	const { dispatch } = useContext(articleContext);
	const auth = getAuth();

	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		cover: {},
		description: '',
		title: '',
		type: 'photography',
		userRef: '',
	});
	const handleChange = (e) => {
		if (cover) {
			setFormData((prevState) => ({
				...prevState,
				cover: e.target.files,
			}));
		} else {
			setFormData({ ...formData, [e.target.name]: e.target.value });
		}
	};

	const { description, type, cover, title, userRef } = formData;

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (cover === null) {
			return toast.error('pliz add a file');
		}

		try {
			// store images in firesore
			setIsLoading(true);
			const storeImage = async (image) => {
				return new Promise((resolve, reject) => {
					const storage = getStorage();
					const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
					const storageRef = ref(storage, 'cover/' + fileName);

					const uploadTask = uploadBytesResumable(storageRef, image);
					uploadTask.on(
						'state_changed',
						(snapshot) => {
							const progress =
								(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
							console.log('Upload is ' + progress + '% done');
							switch (snapshot.state) {
								case 'paused':
									console.log('Upload is paused');
									break;
								case 'running':
									console.log('Upload is running');
									break;
								default:
									break;
							}
						},
						(error) => {
							reject(error);
						},
						() => {
							getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
								resolve(downloadURL);
							});
						}
					);
				});
			};

			const imgUrls = await Promise.all(
				[...cover].map((urls) => storeImage(urls))
			).catch(() => {
				setIsLoading(false);
				toast.error('Images not uploaded');
				return;
			});

			await uploadDB(imgUrls);

			setIsLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	const uploadDB = async (pics) => {
		try {
			const postRef = collection(db, 'articles');
			const formDataCopy = {
				...formData,
				cover: pics,
				timestamp: serverTimestamp(),
			};

			const item = await addDoc(postRef, formDataCopy);
			if (item) navigate('/');
		} catch (err) {
			console.log(err);
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
								/>

								<input
									type='file'
									name='cover'
									accept='.jpg,.png,.jpeg,.mp4'
									multiple
									onChange={handleChange}
								/>

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
					</div>{' '}
				</>
			)}
		</section>
	);
};

export default Create;
