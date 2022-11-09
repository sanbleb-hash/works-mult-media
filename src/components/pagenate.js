import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { articleContext } from '../utils/store';

const Pagenate = ({ name }) => {
	const { state, dispatch } = useContext(articleContext);
	const { articles } = state;

	const { pages } = articles;

	const [pageIndex, setPageInddex] = useState(1);

	const handlePrevPage = () => {
		setPageInddex(() => pageIndex - 1);
	};
	const handleNextPage = () => {
		setPageInddex(() => pageIndex + 1);
	};
	const fetchHandler = async function (x) {
		const { data } = await axios.get(
			`${process.env.REACT_APP_API_ROUTE}/api/articles?type=${name}&pageNumber=${pageIndex}`
		);
		dispatch({ type: 'ARTICLES_PAYLOAD', payload: data });
	};

	useEffect(() => {
		fetchHandler(pageIndex);
		//eslint-disable-next-line
	}, [pageIndex]);

	return (
		<div className=' flex items-center  gap-8'>
			{articles.pages > 2 && (
				<>
					(
					<button
						className='bg-indigo-500 text-white px-3 py-1'
						onClick={handlePrevPage}
						disabled={pageIndex === 1}
					>
						prev
					</button>
					)<span className='text-black'>{pageIndex} pages</span>
					{pageIndex <= pages ? null : (
						<button
							className='bg-indigo-500 text-white px-3 py-1'
							onClick={handleNextPage}
							disabled={pageIndex === pages}
						>
							next
						</button>
					)}
				</>
			)}
		</div>
	);
};

export default Pagenate;
