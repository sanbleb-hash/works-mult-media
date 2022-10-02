import React from 'react';
import { Link } from 'react-router-dom';

const Modal = () => {
	return (
		<div className='absolute w-screen h-screen bg-indigo-800/50 top-[10vh] -left-16 z-50'>
			<div className=' w-2/3 bg-indigo-900 h-full flex flex-col items-start justify-start pl-10  pt-20  text-2xl text-white shadow-lg  leading-10 '>
				<h2 className='cursor-pointer hover:underline text-gray-100 transition-all delay-100 text-lg '>
					<Link to='/about'>our compony</Link>
				</h2>
				<h2 className='cursor-pointer hover:underline text-gray-100 transition-all delay-100 text-lg  my-9'>
					locations
				</h2>
				<h2 className='cursor-pointer hover:underline text-gray-100 transition-all delay-100 text-lg '>
					<Link to='/contact'> contact</Link>
				</h2>
			</div>
		</div>
	);
};

export default Modal;
