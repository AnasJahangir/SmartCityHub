import React from "react";
import Sidebar from "./Pages/ClientPages/Sidebar";
import Login from "./Pages/ClientPages/Login";
import Register from "./Pages/ClientPages/Register";
import AddDevice from "./Pages/AdminPages/AddDevice";
import Houses from "./Components/AdminHouses";
import { Route, Routes } from "react-router-dom";
import { path } from "./Assets/path";
import { DeviceProvider } from "./Context/DeviceContext";
import ProtectedRoutes from "./Config/ProtectedRoutes";

const App = () => {
  return (
    <DeviceProvider>
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path="register/" element={<Register />} />
          <Route path={"/home"} element={<Sidebar />} />
          <Route
            path={"/admin"}
            element={<ProtectedRoutes component={Houses} />}
          />
          <Route
            path={"Add-device"}
            element={<ProtectedRoutes component={AddDevice} />}
          />
        </Routes>
      </>
    </DeviceProvider>
  );
};

export default App;
