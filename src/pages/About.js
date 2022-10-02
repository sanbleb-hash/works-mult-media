import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div className='min-h-screen pt-20 bg-[url(https://images.unsplash.com/photo-1662589535641-64f27e1b09c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)] bg-cover object-cover'>
			<div className='mx-auto container bg-slate-100/50 p-5 min-h-[70vh]'>
				<h1 className=' text-4xl lg:text-6xl text-center text-gray-300'>
					welcome to our vlog
				</h1>
				<div className='flex py-8'>
					<p className=' text-xl md:text-2xl tracking-wider text-gray-300  '>
						We are an experienced mult-media team currently operating from Cape
						Town South Africa . We specialize in video production , photography
						and graphic production , posters,flyers brochures design and
						production for any occasion or purpose,from screen writing -
						perfomance through the lens - editing - capturing till we give you
						satisfactory end product and experience.
					</p>
				</div>
				<span className=' text-gray-600 md:text-gray-300 italic'>
					{' '}
					pliz{' '}
					<Link to='/contact'>
						<span className=' text-purple-900 hover:opacity-25 underline pr-2'>
							contact
						</span>
					</Link>
					us any time
				</span>
			</div>
		</div>
	);
};

export default About;
