import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createToken, createUser, setAuthToken } from "../../api";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    homeAddress: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.fullName) tempErrors.fullName = "Full Name is required";
    if (!formData.homeAddress)
      tempErrors.homeAddress = "Home Address is required";
    if (!formData.password) tempErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(null); // Reset server error
    if (validate()) {
      setLoading(true);
      try {
        const response = await createUser({
          email: formData.email,
          name: formData.fullName,
          address: formData.homeAddress,
          password: formData.password,
        });
        console.log(response);
        navigate("/login");
      } catch (error) {
        if (error.response) {
          console.error("Server responded with an error:", error.response.data);
          setServerError(error.response.data.value); // Display the error message from server
        } else {
          console.error("Error during request:", error);
          setServerError("An unexpected error occurred. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="flex items-center justify-center  overflow-x-hidden lg:m-0 mx-4 min-h-[100vh]">
      <Link to="/home">
        <div className="absolute text-black top-4 left-4 text-xl font-bold">
          App
        </div>
      </Link>
      <div className="bg-white md:p-8 rounded  lg:w-[500px]">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create an account
        </h2>
        <form className="p-x-4 rounded gap-y-[16px]" onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@domain.com"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="homeAddress"
              value={formData.homeAddress}
              onChange={handleChange}
              placeholder="Home Address"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.homeAddress && (
              <p className="text-red-500 text-xs mt-1">{errors.homeAddress}</p>
            )}
          </div>
          <div className="mb-2">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mb-2">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 mt-2 rounded hover:bg-gray-800"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600 text-sm">
          By clicking continue, you agree to our{" "}
          <b className="text-black">Terms of Service </b>
          and <b className="text-black">Privacy Policy</b>
        </p>
      </div>
    </div>
  );
}

export default Register;
