import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const FeaturedDetails = ({ articles }) => {
	const { name } = useParams();
	const [showTitle, setShowTitle] = useState(false);

	return (
		<section className='text-white min-h-[70vh] w-[80vw] mx-auto  '>
			<div className=' flex  items-center justify-center flex-col '>
				<div className='w-[80vw] min-h-[100px] bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-700 py-3 mt-3 rounded-md shadow-2xl px-5'>
					<h1 className='text-3xl md:text-4xl  '>{name}</h1>
					<p className='px-3 pt-2'>
						we are detail oriented team and aim to provide maximum appeal to
						your brand or ocation
					</p>
				</div>
			</div>

			<article className='mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3 '>
				{articles.length < 1 ? (
					<p className=' self-center text-2xl'> nothing to preview yet. 🤦‍♂️ </p>
				) : (
					articles?.map((article) => (
						<div
							key={article.id}
							className=' min-w-[350px] h-[200px] shadow-lg shadow-gray-900  rounded-md overflow-hidden relative '
						>
							<img
								className=' w-full h-full object-cover'
								src={
									article.attributes.cover?.data[0].attributes.formats.small.url
								}
								alt={article.attributes.title}
								onMouseEnter={() => setShowTitle(!showTitle)}
								onMouseLeave={() => setShowTitle(showTitle)}
							/>
							<video src='' alt='my demo' autoPlay={false} />

							{showTitle && (
								<h3 className=' bg-gray-500/60 text-2xl italic p-2 absolute top-1/2 left-1/2 rounded-l-lg  '>
									{article.attributes.title}
								</h3>
							)}
						</div>
					))
				)}
			</article>
		</section>
	);
};

export default FeaturedDetails;
