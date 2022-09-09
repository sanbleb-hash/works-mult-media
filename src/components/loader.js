import React from 'react';
import { RiLoader5Line } from 'react-icons/ri';

const Loader = () => {
	return (
		<div className='flex justify-center items-center  animate-spin h-screen w-screen'>
			<RiLoader5Line className='text-5xl text-blue-300' />
		</div>
	);
};

export default Loader;
