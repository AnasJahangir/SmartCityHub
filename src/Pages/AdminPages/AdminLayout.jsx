import React, { useState } from 'react';
import { CiHome } from "react-icons/ci";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* Top Bar for mobile */}
        <div className="flex justify-between items-center p-4 text-black md:hidden">
          <div className="font-bold">
            Smart City Hub
          </div>
          <div className="cursor-pointer mt-0 ml-9 mr-0" onClick={toggleSidebar}>
            {sidebarOpen ? <AiOutlineClose size={30} /> : <AiOutlineBars size={30} />}
          </div>
        </div>

        {/* Sidebar */}
        <div className={`flex-col h-full fixed top-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:flex md:w-64 transition-transform duration-300 ease-in-out`}>
          <div className="mt-6 ml-6 text-2xl font-bold hidden md:block">
            Smart City Hub
          </div>
          <div className="list-group list-group-flush">
            <div className="text-lg font-bold mt-6 p-0 ml-6 hidden md:block">
              Control Panel
            </div>
            <span className="cursor-pointer d-flex w-auto mx-2 rounded-sm flex-row gap-x-4 list-group-item mt-2 list-group-item-action bg-light">
              <div>
                <CiHome className="font-bold" size={25} />
              </div>
              <div>
                <Link to="/admindashboard" className="font-bold decoration-transparent text-black">
                  Home Lights
                </Link>
              </div>
            </span>
            <span className="d-flex flex-row gap-x-4 mt-4 cursor-pointer bg-white list-group-item list-group-item-action bg-light">
              <div>
                <AiOutlineBars size={30} />
              </div>
              <div>
                <Link to="" className="font-bold decoration-transparent text-black">
                  Account Settings
                </Link>
              </div>
            </span>
            <span className="d-flex flex-row gap-x-4 mt-4 cursor-pointer bg-white list-group-item list-group-item-action bg-light">
              <div>
                <AiOutlineBars size={30} />
              </div>
              <div>
                <Link to="/adddevice" className="font-bold decoration-transparent text-black">
                  Add a new device
                </Link>
              </div>
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className={`flex-1 p-4 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
