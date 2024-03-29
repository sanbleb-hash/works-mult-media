import React from 'react';
import Circles from './circles';
import { useNavigate } from 'react-router-dom';

const Footerbanner = () => {
	const navigate = useNavigate();
	return (
		<section className=' min-h-[100px ] w-[80vw] py-4 sm:py-6  px-8 md:py-10 absolute rounded-lg shadow-2xl -top-48 md:-top-32 left-[57px] sm:left-[70px] md:left-[6rem] lg:left-[8.4rem] bg-yellow-400 mx-auto z-50 overflow-hidden'>
			<div className='relative w-full h-full z-50'>
				<span className='z-10'>
					<Circles />
				</span>

				<Circles />

				<article className=' z-50 flex flex-col md:flex-row items-center justify-center md:justify-between  overflow-hidden   '>
					<div className=' text-white md:text-left text-center w-8/12  '>
						<h1 className='text-white md:text-3xl text-xl pb-4 font-semibold '>
							Let talk about your project
						</h1>
						<p className='text-sm py-2 md:py-0 '>
							Ready to take it to the next level ? Contact us today to find out
							how our expartise can help grow your bussiness
						</p>
					</div>
					<button
						className=' z-50bg-transparent bg-yellow-600 text-sm sm:text-lg md:text-xl  px-3 md:px-6 py-1 md:mt-9 mt-3 hover:font-bold hover:scale-105
                  hover:text-gray-300 transition-all delay-75 ease-in active:bg-yellow-800 capitalize md:font-semibold  text-white   '
						onClick={() => navigate('/contact')}
					>
						get in touch
					</button>
				</article>
			</div>
		</section>
	);
};

export default Footerbanner;
