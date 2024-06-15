import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authenticateUser, setAuthToken } from "../../api";
import { jwtDecode } from "jwt-decode";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (!email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!password) {
      tempErrors.password = "Password is required";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        console.log(email, password);
        const response = await authenticateUser({ login: email, password });
        const token = response.token;
        console.log(response);
        const user = jwtDecode(token);
        localStorage.setItem("user", JSON.stringify([user, token]));
        setAuthToken(token); // Set the auth token for axios
        // navigate("/");
      } catch (error) {
        console.error("Login failed:", error);
        // alert("Invalid credentials");
      }
    }
  };

  return (
    <div className="min-h-screen lg:w-screen w-auto lg:mx-0 mx-3  flex flex-col bg items-center justify-center">
      <div className="cursor-pointer text-black absolute top-4 left-4 text-xl font-bold">
        App
      </div>
      <div className="bg-white md:p-8 rounded lg:w-[400px] w-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@domain.com"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-[#828282]">
          Don't have an account yet?{" "}
          <Link
            to="/register"
            className="text-[#828282] decoration-transparent"
          >
            Click here to register.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
