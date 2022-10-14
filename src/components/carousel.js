import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { useNavigate } from 'react-router-dom';

const Skipper = ({ data }) => {
	const navigate = useNavigate();

	return (
		<Swiper
			slidesPerView={1}
			pagination={{ clickable: true }}
			modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
			autoplay={{
				delay: 3500,
				disableOnInteraction: false,
			}}
			loop={true}
			className='h-[300px]'
		>
			{data?.map((item) => (
				<SwiperSlide
					className=' w-screen h-[30vh] flex items-start pt-6 '
					key={item._id}
				>
					{item.type === 'video-production' ? (
						<video
							src={item.cover.photo}
							className='h-full w-full object-contain relative cursor-pointer'
							onClick={() => navigate(`/featured/${item.type}`)}
						/>
					) : (
						<img
							src={item.cover.photo}
							alt={item?.name}
							className='h-full w-full object-contain relative cursor-pointer'
							onClick={() => navigate(`/featured/${item.type}`)}
						/>
					)}
					<p className=' absolute left-14 sm:left-5 top-3/4 bg-gray-700 text-gray-200 text-2xl p-2 rounded-md lg:text-gray-700 lg:bg-gray-300 lg:text-3xl'>
						{item.description}
					</p>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Skipper;
