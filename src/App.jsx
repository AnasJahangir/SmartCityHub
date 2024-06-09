import React from 'react'
import Sidebar from './Pages/ClientPages/Sidebar'
import Login from './Pages/ClientPages/Login'
import Register from './Pages/ClientPages/Register'
import AddDevice from './Pages/AdminPages/AddDevice'
import Houses from './Components/AdminHouses'
import { Route, Routes } from "react-router-dom";
import {path} from './Assets/path' 
import { DeviceProvider } from './Context/DeviceContext'


const App = () => {
  return (
    <DeviceProvider>
    <>
       <Routes>
       <Route path={path.landing} element={<Login />} />
       <Route path={path.register} element={<Register />} />
       <Route path={path.home} element={<Sidebar />} />
       <Route path={path.admin} element={<Houses />} />
       <Route path={path.adddevice} element={<AddDevice />} />
       </Routes>
    </>
    </DeviceProvider>
  )
}

export default App