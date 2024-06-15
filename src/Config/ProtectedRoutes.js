import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getAuthenticatedUser } from "../api";

function ProtectedRoutes({ component: Component }) {
  const [isUser, setIsUser] = useState(null); // Initial state is null to represent loading state
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("No token found");
        }
        // Set the auth token in the header
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        // Call the API to check if the user is authenticated
        const response = await getAuthenticatedUser();
        console.log(response);
        setIsUser(true);
      } catch (error) {
        console.log(error);

        setIsUser(false);
        // navigate("/login");
      }
    };
    checkAuth();
    setIsUser(true);
  }, [navigate]);

  if (isUser === null) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth status
  }

  return <>{isUser && <Component />}</>;
}

export default ProtectedRoutes;
