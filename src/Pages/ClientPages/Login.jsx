import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
      console.log('Form submitted');
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    <div className="min-h-screen lg:w-screen w-auto lg:mx-0 mx-3  flex flex-col bg items-center justify-center">
      <div className="cursor-pointer text-black absolute top-4 left-4 text-xl font-bold">App</div>
      <div className="bg-white p-8 rounded shadow-md lg:w-[400px] w-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
             required={true}
              type="email"
              placeholder="email@domain.com"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <Link to = "/home">
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
          >
            login
          </button>
          
          </Link>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account yet?
          <a href="/register" className="text-gray-600 decoration-transparent">
            Click here to register.<br/>
            <Link to ="/admindashboard" className='decoration-transparent text-black'>Login as Admin</Link>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
