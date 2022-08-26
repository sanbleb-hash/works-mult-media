import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<Navbar />
			<main className=' min-h-[90vh] pt-[10vh] w-screen bg-gray-200 '>
				{children}
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
