import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	return (
		<header className='h-screen w-screen before:z-10  relative pt-[20vh] before:absolute before:bg-purple-900/40 before:inset-0 overflow-hidden  '>
			<img
				src='/images/hero-img.jpg'
				alt='burner'
				className='absolute inset-0 z-0 '
			/>
			<div className='z-50 flex flex-col   justify-end top-[14vh] absolute inset-5 bottom-32 sm:top-24 sm:bottom-[7rem] w-[85vw] sm:w-1/2 l-7  sm:left-[18rem] lg:left-[30rem] md:left-[25rem]  px-4  md:px-14 py-6 shadow-2xl  text-gray-100 my-auto bg-indigo-800/40'>
				<h3 className='md:text-4xl text-2xl py-4   text-end '>
					we are experts in{' '}
				</h3>
				<div className='h-[37px]   overflow-hidden z-50 flex items-center justify-end   '>
					<span className='h-full animate-move mb-[25px]  '>
						<h3 className='md:text-4xl text-2xl text-end '>home</h3>
						<h3 className='md:text-4xl text-2xl text-end  '>
							{' '}
							bussiness <span className='text-pink-900'>,</span>
						</h3>
						<h3 className='md:text-4xl  text-2xl text-end '>
							personal <span className='text-pink-900'>&</span>
						</h3>
						<h3 className='md:text-4xl  text-2xl text-end '>professional</h3>
					</span>
				</div>
				<h3 className='text-2xl md:text-4xl py-4 self-end text-end'>
					graphic designs
					<span className='block'> and video production</span>
				</h3>
				<p className='z-50'>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
					commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
					et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
				</p>
				<button
					className=' bg-yellow-600/60 text-lg md:text-xl  px-3 md:px-6 py-1 md:mt-9 mt-3 hover:text-gray-300 hover:bg-opacity-90 transition-all delay-75 ease-in active:bg-yellow-800 capitalize font-semibold '
					onClick={() => navigate('/contact')}
				>
					get in touch
				</button>
			</div>
		</header>
	);
};

export default Header;