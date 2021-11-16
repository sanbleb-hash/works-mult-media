import React, { useState } from 'react';
import { BiSend } from 'react-icons/bi';

const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [massege, setMassege] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="h-screen w-screen   pt-[20vh]">
      <form className="w-1/2 mx-auto " onSubmit={submitHandler}>
        <div className="flex flex-col -my-2 ">
          <label className="text-gray-600 text-lg py-2 capitalize italic">
            name
          </label>
          <input
            className="text-gray-700 "
            required
            type="text"
            placeholder="enter your name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col -my-2 ">
          <label className="text-gray-600 text-lg py-2 capitalize italic">
            subject
          </label>
          <input
            className="text-gray-700 "
            required
            type="text"
            placeholder="topic"
            id="topic"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="flex flex-col -my-2 ">
          <label className="text-gray-600 text-lg py-2 capitalize italic">
            email
          </label>
          <input
            className="text-gray-700 "
            required
            type="text"
            placeholder="enter your email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:items-end justify-between sm:flex-row items-center">
          <textarea
            className=" mx-auto mt-4 sm:flex-1 w-full "
            placeholder="massege"
            required
            id="massege"
            rows="3"
            onChange={(e) => setMassege(e.target.value)}
          ></textarea>{' '}
          <button
            type="submit"
            className=" bg-indigo-600 sm:p-4 py-2 ml-3 text-white sm:rounded-full w-full sm:w-14 mt-3  "
          >
            <BiSend className="hidden sm:inline-block" />
            <span className="sm:hidden">send</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
