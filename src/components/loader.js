import React from 'react';
import { useEffect } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loader = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<span className='w-screen h-screen flex items-center justify-center mx-auto bg-slate-100/80 absolute inset-0 '>
			<AiOutlineLoading3Quarters
				fill='purple'
				size={32}
				className=' animate-spin'
			/>
		</span>
	);
};

export default Loader;
