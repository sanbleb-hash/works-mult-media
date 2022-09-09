import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Thanks = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => navigate('/'), 3000);
	}, [navigate]);

	return (
		<div className=' w-full pt-[10vh] relative px-4 min-h-[80vh] grid place-items-center bg-[url("https://cdn.pixabay.com/photo/2013/10/01/14/46/clapping-189171__340.jpg")] bg-cover bg-center bg-blend-lighten before:absolute before:inset-0 before:bg-black/60 z-30'>
			<span className='text-center text-xl md:text-3xl z-50'>
				<h1 className=' tracking-wider text-purple-600 text-center pb-5'>
					Thank you for contacting us
				</h1>
				<p className=' tracking-wider text-gray-300 text-center text-xl md:text-3xl'>
					we will get back to you as soon as possible
				</p>
			</span>
		</div>
	);
};

export default Thanks;
