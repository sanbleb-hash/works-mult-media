import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './pages/Contact';
import About from './pages/About';
import HomePage from './pages/HomePage';
import { Featured } from './pages/Featured';
import FeaturedDetails from './components/featuredDetails';
import Layout from './layout';
import Create from './pages/Create';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';
import Thanks from './pages/Thankyou';

function App() {
	return (
		<BrowserRouter>
			<ToastContainer />
			<Layout>
				<Routes>
					<Route path='/*' element={<HomePage />} />

					<Route path='featured' element={<Featured />}>
						<Route path=':name' element={<FeaturedDetails />} />
					</Route>
					<Route path='/contact' element={<Contact />} />
					<Route path='/about' element={<About />} />
					<Route path='/login' element={<Login />} />
					<Route path='/create' element={<PrivateRoute />}>
						<Route path='/create' element={<Create />} />
					</Route>
					<Route path='/thank-you' element={<Thanks />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
