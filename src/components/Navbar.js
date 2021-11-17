import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import Modal from './Modal';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className=" bg-indigo-800/30 border-b-2 shadow-md text-gray-100 w-screen h-[10vh] fixed z-50 font-montserrat ">
      <div className="  flex items-center justify-between w-[80vw] mx-auto h-full text-xl capitalize relative">
        <div className="">
          <h1 className="flex  items-center cursor-pointer hover:text-gray-700 transition-all duration-75 ease-in relative text-lg lg:text-xl   ">
            <Link to="/">
              {' '}
              works{' '}
              <span className="font-shalimer font-semibold text-3xls pl-2 ">
                mult-media
              </span>
            </Link>
          </h1>
        </div>

        <ul className=" hidden md:flex items-center lg:font-medium text-lg lg:text-xl  ">
          <li className=" inline-block transition-all delay-75 hover:bg-opacity-70  ease-out  cursor-pointer  hover:border-b-2 hover:pb-3 hover:mt-3 border-b-black hover:animate-bounce">
            <Link to="/about">our compony</Link>{' '}
          </li>
          <li className="mx-2 md:mx-5  inline-block transition-all delay-75 hover:bg-opacity-70  ease-out  cursor-pointer mr-6 hover:border-b-2 hover:pb-3 hover:mt-3 border-b-black hover:animate-bounce">
            {' '}
            <Link to="/about"> locations</Link>
          </li>
          <li className=" inline-block transition-all delay-75 hover:text-opacity-100 ease-out  cursor-pointer mr-6 hover:border-b-2 hover:pb-3 hover:mt-3 border-b-black hover:animate-bounce">
            <Link to="/contact"> contact</Link>
          </li>
        </ul>
        <span
          className="md:hidden cursor-pointer  text-2xl transition-all delay-75 ease-in"
          onClick={() => setActive(!active)}
        >
          {active ? <FaBars /> : <FaTimes />}
          {!active ? <Modal /> : ''}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
