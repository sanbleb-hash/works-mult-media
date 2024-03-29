import React, { useEffect } from 'react';

import Tiles from './Grid';
import Header from './Header';

const HomePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<main className='min-h-[90vh] pb-[100px] w-screen bg-gray-200 overflow-x-hidden '>
			<Header />
			<Tiles />
		</main>
	);
};

export default HomePage;
