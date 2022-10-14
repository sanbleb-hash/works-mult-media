import React, { useContext } from 'react';
import { articleContext } from '../utils/store';

const Pagenate = () => {
	const { state } = useContext(articleContext);
	const { articles } = state;

	return (
		<div className=' flex items-center  gap-8'>
			{articles.length >= 2 && (
				<>
					{' '}
					(<button className='bg-indigo-500 text-white px-3 py-1'>pre</button>)
					<button className='bg-indigo-500 text-white px-3 py-1'>next</button>
				</>
			)}
		</div>
	);
};

export default Pagenate;
