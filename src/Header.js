import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="h-screen w-screen  relative pt-[20vh] bg-graphics bg-cover object-cover before:absolute before:bg-black/50 before:inset-0 overflow-x-hidden       ">
      <div className="absolute top-[10vh] sm:top-24 w-full sm:w-1/2 px-4  md:px-14 py-6 shadow-2xl  text-gray-100 my-auto bg-indigo-800/20       ">
        <h3 className="md:text-3xl text-2xl py-4">we are experts in </h3>
        <div className="h-[37px]  overflow-hidden flex items-center   ">
          <span className="h-full animate-move  ">
            <h3 className="md:text-3xl text-2xl ">home</h3>
            <h3 className="md:text-3xl text-2xl  "> bussiness</h3>
            <h3 className="md:text-3xl text-2xl ">personal</h3>
            <h3 className="md:text-3xl text-2xl ">professional</h3>
            <h3 className="md:text-3xl text-2xl ">&</h3>
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl py-4">
          all graphic designs
          <span className="block"> and video production</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
        </p>
        <button
          className="bg-transparent bg-yellow-600 text-lg md:text-xl  px-3 md:px-6 py-1 md:mt-9 mt-3 hover:font-bold hover:scale-105 transition-all delay-75 ease-in active:bg-yellow-800 capitalize font-semibold "
          onClick={() => navigate('/contact')}
        >
          get in touch
        </button>
      </div>
    </header>
  );
};

export default Header;
