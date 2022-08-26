import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Contact from './pages/Contact';
import About from './pages/About';
import HomePage from './pages/HomePage';
import { Featured } from './pages/Featured';
import FeaturedDetails from './components/featuredDetails';
import Layout from './layout';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='/*' element={<HomePage />} />

					<Route path='featured' element={<Featured />}>
						<Route path=':name' element={<FeaturedDetails />} />
					</Route>
					<Route path='/contact' element={<Contact />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
