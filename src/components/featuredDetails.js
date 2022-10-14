import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { articleContext } from '../utils/store';
import DetailedPage from './detailedPage';
import Pagenate from './pagenate';

import Loader from './loader';

import { FaArrowAltCircleLeft, FaPlay } from 'react-icons/fa';

const FeaturedDetails = () => {
	const [showTitle] = useState(false);
	const [showDetailed, setShowDetailed] = useState(false);

	const { name } = useParams();

	const [loading, setLoading] = useState(true);
	const { dispatch, state } = useContext(articleContext);
	const { articles } = state;

	let image =
		'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60';
	useEffect(() => {
		if (articles) {
			setLoading(false);
		}
	}, [articles]);

	return (
		<section className='text-white min-h-[70vh] w-[80vw] mx-auto bg-gradient-to-r  from-white to-yellow-200 flex flex-between flex-col gap-10 p-5  relative  '>
			<Link to='/'>
				<FaArrowAltCircleLeft fill='gray' size={32} />
			</Link>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className=' flex  items-center justify-center flex-col '>
						<div className='min-w-[75vw] min-h-[100px] bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-700 py-3 mt-3 rounded-md shadow-2xl px-5'>
							<h1 className='text-3xl md:text-4xl  '>{name}</h1>
							<p className='px-3 pt-2'>
								we are detail oriented team and aim to provide maximum appeal to
								your brand or ocation
							</p>
						</div>
					</div>

					<article className='mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3 '>
						{articles?.length < 1 ? (
							<p className=' self-center text-2xl'>
								{' '}
								nothing to preview yet. 🤦‍♂️{' '}
							</p>
						) : (
							articles?.map((article) => (
								<div
									key={article._id}
									className=' min-w-[350px] h-[200px] shadow-lg shadow-gray-900  rounded-md overflow-hidden relative '
									onClick={() => {
										setShowDetailed(!showDetailed);
										dispatch({ type: 'ARTICLE_PAYLOAD', payload: article });
									}}
								>
									{name === 'video-production' ? (
										<>
											<video
												className=' w-full h-full object-cover rounded-lg relative '
												src={article?.cover.photo}
												alt='my demo video'
											/>
											<FaPlay className='absolute top-1/2 bottom-1/2 left-[180px] text-4xl text-gray-400 shadow p-2 bg-red-700 rounded-md ' />
										</>
									) : (
										<img
											className=' w-full h-full object-cover'
											src={article?.cover.photo || image}
											alt={article.title}
										/>
									)}

									{showTitle && (
										<h3 className=' bg-gray-500/60 text-2xl italic p-2 absolute top-1/2 left-1/2 rounded-l-lg  '>
											{article.description}
										</h3>
									)}
								</div>
							))
						)}
					</article>
					{showDetailed && (
						<DetailedPage cancel={setShowDetailed} type={name} />
					)}
				</>
			)}
			<Pagenate articles={articles} />
		</section>
	);
};

export default FeaturedDetails;
