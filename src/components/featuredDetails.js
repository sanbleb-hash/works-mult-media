import React from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';

const FeaturedDetails = () => {
  const { name } = useParams();

  return (
    <section className="text-white flex  items-center justify-center flex-col ">
      <div className="w-[80vw] min-h-[100px] bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-700 py-3 mt-3 rounded-md shadow-2xl px-5">
        <h1 className="text-3xl md:text-4xl  ">{name}</h1>
        <p className="px-3 pt-2">
          {name === 'video-editing' || 'photography' || 'graphic-design'
            ? 'we are detail oriented team and aim to provide maximum appeal to your brand or ocation'
            : ''}
        </p>
      </div>
      <article className="mt-6 ">
        {name === 'graphic-design' && <div>details to follow</div>}
      </article>
      <article className="mt-6 ">
        {name === 'photography' && <div>ndiye yake</div>}
      </article>
      <article className="mt-6 ">
        {name === 'video-editing' && <div>video details</div>}
      </article>
    </section>
  );
};

export default FeaturedDetails;
