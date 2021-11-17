import React, { useRef, useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [done, setDone] = useState(false);
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const formRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLETE_ID,
        formRef.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            setDone(true);
            navigate('/');
          }, 2000);
        },
        (error) => {
          console.log(error.text);
          setErr(true);
        }
      );
  };

  return (
    <section className="h-screen w-screen   pt-[20vh]">
      <form className="w-1/2 mx-auto " ref={formRef} onSubmit={submitHandler}>
        <div className="flex flex-col -my-2 ">
          <label className="text-gray-600 text-lg py-2 capitalize italic">
            name
          </label>
          <input
            className="text-gray-700 "
            required
            type="text"
            placeholder="enter your name"
            name="user_name"
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
            placeholder="subject"
            name="user_subject"
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
            name="user_email"
          />
        </div>
        <div className="flex flex-col sm:items-end justify-between sm:flex-row items-center">
          <textarea
            className=" mx-auto mt-4 sm:flex-1 w-full "
            placeholder="massege"
            required
            name="massege"
            rows="3"
          ></textarea>{' '}
          <button
            type="submit"
            className=" bg-indigo-600 sm:p-4 py-2 ml-3 text-white sm:rounded-full w-full sm:w-14 mt-3  "
          >
            <BiSend className="hidden sm:inline-block" />
            <span className="sm:hidden">send</span>
          </button>
        </div>
        <span className="text-green-400 text-center pt-12 ">
          {done && 'thank you... will contact you soon'}
        </span>
      </form>
    </section>
  );
};

export default Contact;
