import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Footerbanner from './footer-pop';

const Footer = () => {
	const page = useLocation();

	return (
		<footer
			className={
				page.pathname === '/contact'
					? ' text-white bg-indigo-400 w-screen min-h-[100px] text-center my-auto mx-auto shadow-xl pt-16'
					: ' text-white bg-indigo-400 w-screen min-h-[100px] text-center my-auto mx-auto shadow-xl pt-16 relative'
			}
		>
			{page.pathname !== 'contact' || 'create' || ' login' ? (
				''
			) : (
				<Footerbanner />
			)}
			<article className='flex flex-col sm:flex-row items-start sm:items-center justify-between  w-[80vw] mx-auto  '>
				<h1 className='flex  items-center cursor-pointer hover:underline transition-all duration-75 ease-in relative   '>
					<Link to='/'>
						works
						<span className='font-shalimer font-semibold text-3xls pl-2 '>
							mult-media
						</span>
					</Link>
				</h1>
				<ul className=' flex items-center font-medium justify-between flex-wrap  '>
					<li className=' inline-block transition-all delay-75 hover:bg-opacity-70  ease-out  cursor-pointer mr-6 hover:underline  '>
						<Link to='/about'>our compony</Link>{' '}
					</li>
					<li className='mx-3  inline-block transition-all delay-75 hover:bg-opacity-70  ease-out  cursor-pointer mr-6 hover:underline'>
						{' '}
						locations
					</li>
					<li className=' inline-block transition-all delay-75 hover:text-opacity-100 ease-out  cursor-pointer mr-6 hover:underline'>
						<Link to='/contact'>contact</Link>
					</li>
				</ul>
			</article>
			<hr className='w-[80vw] mx-auto my-5 bg-yellow-700 ' />
			<section className='my-5'>
				<div className='flex items-center justify-end px-10 gap-3 '>
					<a
						href='https://wa.me/676912501?text=%20hello,%20I%20am%20interested%20in%20your%20services'
						target='_blank'
						rel='noreferrer'
					>
						<FaWhatsapp
							className='
                   shadow-2xl hover:bg-green-700 rounded-full p-1 text-3xl hover:text-green-200'
						/>
					</a>
					<a
						href='https://www.facebook.com/GRAPHICPREACHERLEO'
						target='_blank'
						rel='noreferrer'
					>
						<FaFacebook className=' shadow-2xl hover:text-blue-700' />
					</a>
					<a
						href='https://twitter.com/leobutao2'
						target='_blank'
						rel='noreferrer'
					>
						<FaTwitter className='mx-5  shadow-2xl hover:text-blue-700 ' />
					</a>
					<a
						href='https://www.youtube.com/channel/UCKb43TK5hiPziOwvbdmqnzw'
						target='_blank'
						rel='noreferrer'
					>
						<FaYoutube className=' shadow-2xl hover:text-red-600' />
					</a>
				</div>
			</section>
			san bleb 2021
		</footer>
	);
};

export default Footer;
