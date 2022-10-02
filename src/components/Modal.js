import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Modal = () => {
	return (
		<div className='absolute w-screen h-screen bg-indigo-800/50 top-[10vh] -left-16 z-50'>
			<div className=' flex items-start justify-between  w-2/3 bg-indigo-900 py-10 h-full'>
				<div className='  flex flex-col items-start justify-start pl-10  pt-20  text-2xl text-white   leading-10 '>
					<h2 className='cursor-pointer hover:underline text-gray-100 transition-all delay-100 text-lg '>
						<Link to='/about'>our compony</Link>
					</h2>
					<h2 className='cursor-pointer hover:underline text-gray-100 transition-all delay-100 text-lg  my-9'>
						locations
					</h2>
					<h2 className='cursor-pointer hover:underline text-gray-100 transition-all delay-100 text-lg '>
						<Link to='/contact'> contact</Link>
					</h2>
				</div>
				<div className='flex items-center justify-end pt-[30rem] px-10 gap-3  '>
					<a
						href='https://wa.me/731963578?text=%20hello,%20I%20am%20interested%20in%20your%20services'
						target='_blank'
						rel='noreferrer'
						className='rounded-full hover:bg-green-700'
					>
						<FaWhatsapp
							className='
                   shadow-2xl   p-1 text-3xl hover:text-green-200'
						/>
					</a>
					<a
						href='https://www.facebook.com/GRAPHICPREACHERLEO'
						target='_blank'
						rel='noreferrer'
					>
						<FaFacebook className=' shadow-2xl hover:text-blue-700 rounded-full hover:border border-white' />
					</a>
					<a
						href='https://twitter.com/leobutao2'
						target='_blank'
						rel='noreferrer'
					>
						<FaTwitter className=' shadow-2xl hover:text-blue-700 rounded-lg hover:border border-white' />
					</a>
					<a
						href='https://www.youtube.com/channel/UCKb43TK5hiPziOwvbdmqnzw'
						target='_blank'
						rel='noreferrer'
					>
						<FaYoutube className=' shadow-2xl hover:text-red-600' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Modal;
