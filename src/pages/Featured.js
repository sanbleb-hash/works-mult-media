import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import FeaturedDetails from '../components/featuredDetails';
import Loader from '../components/loader';
import { articleContext } from '../utils/store';

export const Featured = () => {
	const [loading, setLoading] = useState(false);
	const { dispatch } = useContext(articleContext);
	const { name } = useParams();

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				setLoading(true);
				const { data } = await axios.get(
					`${process.env.REACT_APP_API_ROUTE}/api/articles?type=${name}`
				);

				dispatch({ type: 'ARTICLES_PAYLOAD', payload: data });

				setLoading(false);
			} catch (err) {
				toast.error(err);
			}
		};
		fetchArticles();
	}, [name, dispatch]);

	if (loading) return <Loader />;

	return (
		<section className=' w-screen pt-[10vh] text-white min-h-[100vh] pb-[250px]  bg-black text-center relative '>
			<FeaturedDetails />
		</section>
	);
};
