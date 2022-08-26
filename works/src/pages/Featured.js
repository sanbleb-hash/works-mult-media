import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FeaturedDetails from '../components/featuredDetails';

export const Featured = () => {
	const { name } = useParams();
	console.log(name);
	const [articles, setArticles] = useState([]);

	const fetchArticles = async () => {
		try {
			const { data } = await axios.get(`/articles?filters[type]=${name}`);
			if (data) {
				setArticles(data.data);
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchArticles();
	}, []);
	console.log(articles);

	return (
		<section className=' w-screen pt-[10vh] text-white min-h-[80vh]  bg-black text-center '>
			<FeaturedDetails articles={articles} />
		</section>
	);
};
