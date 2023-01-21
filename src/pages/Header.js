import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Skipper from '../components/carousel';
import Loader from '../components/loader';

const Header = () => {
	const navigate = useNavigate();
	const [loading, setloading] = useState(true);
	const [carouselData, setCarouselData] = useState([]);
	useEffect(() => {
		const carousel = async () => {
			setloading(true);
			const { data } = await axios.get(
				`${process.env.REACT_APP_API_ROUTE}/api/articles/all`
			);
			setloading(false);
			console.log(data);
			setCarouselData(data);
		};
		carousel();
	}, []);

	return (
		<>
			<header className='h-screen w-screen before:z-10  relative pt-[20vh] before:absolute before:bg-purple-900/60  before:inset-0 overflow-hidden z-30  '>
				<img
					src='/images/hero-img.jpg'
					alt='burner'
					className='absolute inset-0 z-0 md:inline-block hidden '
				/>
				<video
					src='/images/hero'
					loop
					autoPlay
					muted
					className=' absolute inset-0 w-full object-cover h-full md:hidden  '
				></video>
				<div className='z-40 flex flex-col   justify-end top-[14vh] absolute inset-5 bottom-32 sm:top-24 sm:bottom-[7rem] w-[85vw] sm:w-1/2 l-7  sm:left-[18rem] lg:left-[30rem] md:left-[25rem]  px-4  md:px-14 py-6 shadow-2xl  text-gray-400 my-auto bg-slate-800/60  shadow-gray-400 backdrop-opacity-30 '>
					<h3 className='md:text-4xl text-2xl py-4   text-end '>
						we are experts in{' '}
					</h3>
					<div className='h-[37px]   overflow-hidden z-50 flex items-center justify-end capitalize  '>
						<span className='h-full animate-move mb-[25px]  '>
							<h3 className='md:text-4xl text-2xl text-end '>home</h3>
							<h3 className='md:text-4xl text-2xl text-end  '>
								{' '}
								bussiness <span className='text-pink-300'>,</span>
							</h3>
							<h3 className='md:text-4xl  text-2xl text-end '>
								personal <span className='text-pink-300'>&</span>
							</h3>
							<h3 className='md:text-4xl  text-2xl text-end '>professional</h3>
						</span>
					</div>
					<h3 className='text-2xl md:text-4xl py-4 self-end text-end capitalize '>
						graphic designs
						<span className='block'>& </span>video production
					</h3>
					<p className='z-50 hidden md:block'>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa. Cum sociis natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						Donec quam
					</p>
					<button
						className=' bg-yellow-700/70 text-lg md:text-xl  px-3 md:px-6 py-1 md:mt-9 mt-3 hover:text-gray-300 hover:bg-opacity-90 transition-all delay-75 ease-in active:bg-yellow-800 capitalize font-semibold shadow-lg rounded-md '
						onClick={() => navigate('/contact')}
					>
						get in touch
					</button>
				</div>
			</header>
			{loading ? <Loader /> : <Skipper data={carouselData} />}
		</>
	);
};

export default Header;
