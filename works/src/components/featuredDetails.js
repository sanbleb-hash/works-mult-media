import React from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';

const FeaturedDetails = ({ articles }) => {
	const { name } = useParams();

	return (
		<section className='text-white w-[80vw] mx-auto  '>
			<div className=' flex  items-center justify-center flex-col'>
				<div className='w-[80vw] min-h-[100px] bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-700 py-3 mt-3 rounded-md shadow-2xl px-5'>
					<h1 className='text-3xl md:text-4xl  '>{name}</h1>
					<p className='px-3 pt-2'>
						we are detail oriented team and aim to provide maximum appeal to
						your brand or ocation
					</p>
				</div>
			</div>

			<article className='mt-6 flex flex-wrap items-center justify-start gap-3 '>
				{articles.map((article) => (
					<div className=' min-w-[350px] h-[300px] shadow-lg shadow-gray-200'>
						{article.attributes.title}
					</div>
				))}
			</article>
		</section>
	);
};

export default FeaturedDetails;
