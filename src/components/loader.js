import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loader = () => {
	return (
		<span className='w-[80vw] h-[40vh] flex items-center justify-center mx-auto '>
			<AiOutlineLoading3Quarters
				fill='purple'
				size={32}
				className=' animate-spin'
			/>
		</span>
	);
};

export default Loader;
