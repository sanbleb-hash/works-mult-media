import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailedPage from './detailedPage';
import { articleContext } from '../utils/store';
import { toast } from 'react-toastify';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import Loader from './loader';

const FeaturedDetails = () => {
	const { name } = useParams();
	const [showTitle] = useState(false);
	const [showDetailed, setShowDetailed] = useState(false);
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchArticles = async () => {
		try {
			setLoading(true);
			// get reference
			const articleRef = collection(db, 'articles');

			// create a query object

			const q = query(
				articleRef,
				where('type', '==', name),

				limit(10)
			);

			// execute query
			const querySnap = await getDocs(q);
			let listings = [];

			querySnap.forEach((doc) => {
				return listings.push({
					id: doc.id,
					data: doc.data(),
				});
			});

			setLoading(false);
			setArticles(listings);
		} catch (err) {
			toast.error(err);
		}
	};

	useEffect(() => {
		fetchArticles();
		// eslint-disable-next-line
	}, []);

	let image =
		'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60';

	const { dispatch } = useContext(articleContext);
	if (loading) <h3 className='text-center text-orange-500'>loading...</h3>;

	return (
		<section className='text-white min-h-[70vh] w-[80vw] mx-auto  relative  '>
			{loading ? (
				<Loader />
			) : (
				<>
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
							<p className=' self-center text-2xl'>
								{' '}
								nothing to preview yet. 🤦‍♂️{' '}
							</p>
						) : (
							articles?.map((article) => (
								<div
									key={article.id}
									className=' min-w-[350px] h-[200px] shadow-lg shadow-gray-900  rounded-md overflow-hidden relative '
									onClick={() => {
										setShowDetailed(!showDetailed);
										dispatch({ type: 'ARTICLE_PAYLOAD', payload: article });
									}}
								>
									<img
										className=' w-full h-full object-cover'
										src={article.data.cover[0] || image}
										alt={article.data.title}
									/>
									<video src='' alt='my demo' autoPlay={false} />

									{showTitle && (
										<h3 className=' bg-gray-500/60 text-2xl italic p-2 absolute top-1/2 left-1/2 rounded-l-lg  '>
											{article.data.description}
										</h3>
									)}
								</div>
							))
						)}
					</article>
					{showDetailed && <DetailedPage cancel={setShowDetailed} />}
				</>
			)}
		</section>
	);
};

export default FeaturedDetails;