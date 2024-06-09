import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="flex items-center justify-center  overflow-x-hidden lg:m-0 mx-4 min-h-screen">
      <Link to ="/home">
      
      <div className="absolute text-black top-4 left-4 text-xl font-bold">App</div>
      </Link>
      <div className="bg-white p-8 rounded shadow-md lg:w-[500px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an account</h2>
        <form className='p-x-4 rounded gap-y-[16px]'>
          <div className="mb-2">
            <input
              type="email"
              placeholder="email@domain.com"
              className="lg:w-[400px] w-[400px] ml-1 h-[40px] border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Full Name"
              className="w-[400px] h-[40px] border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Home Address"
              className="w-[400px] h-[40px] border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              placeholder="password"
              className="w-[400px] h-[40px] border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              placeholder="confirm your password"
              className="w-[400px] h-[40px] border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
          >
            Sign up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600 text-sm">
          By clicking continue, you agree to our <b className="text-black">
             Terms of Service  </b>
          and <b className="text-black">
            Privacy Policy
          </b>
        </p>
      </div>
    </div>
  );
}

export default Register;
