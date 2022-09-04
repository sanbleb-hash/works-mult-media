import React, { useContext, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { articleContext } from '../utils/store';

const DetailedPage = ({ cancel }) => {
	const { state } = useContext(articleContext);
	const { articleID, loading } = state;
	let image =
		'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60';

	// useEffect(() => {
	// 	dispatch({
	// 		type: 'INITIAL_STAGE',
	// 		loading: true,
	// 	});
	// }, [dispatch]);

	return (
		<div className=' absolute top-2 h-[85vh] -left-7 -right-7 rounded-md bg-yellow-700/50 '>
			<div className='flex w-full items-center pb-3 bg-white/60 justify-between'>
				{loading && (
					<AiOutlineLoading3Quarters className=' self-center text-white text-5xl' />
				)}
				<FaTimes
					className=' hover:scale-110 pt-4 pl-3 text-5xl text-gray-800'
					onClick={(prev) => cancel(!prev)}
				/>
				<p className=' text-2xl shadow-xl shadow-black/50 text-gray-800 p-3 mr-4'>
					{articleID?.attributes.title}
				</p>
			</div>
			<div className='flex bg to-blue-100 w-5/6 h-[70%] pl-4 shadow-xl shadow-black/70 mt-4 rounded-lg overflow-hidden mx-auto '>
				<img
					className=' w-full h-full object-cover rounded-lg '
					src={
						articleID.attributes.cover.data
							? articleID.attributes.cover?.data[0].attributes.formats.small.url
							: image
					}
					alt={articleID.attributes.title}
				/>
			</div>
			<div className=' w-[90%] mt-4 mx-auto py-3 bg-white text-gray-600 '>
				<p>{articleID.attributes.description}</p>
			</div>
		</div>
	);
};

export default DetailedPage;
