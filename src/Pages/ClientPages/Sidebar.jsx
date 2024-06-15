import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiHome } from "react-icons/ci";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

import House from "../../Components/House";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [activeTab, setActiveTab] = useState();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="d-flex flex-row">
      <div className="d-flex flex-col border-r-[1px] h-[100vh]">
        {/* Top Bar */}
        <div className="d-flex  justify-between lg:block xs:hidden sm:hidden items-center text-black">
          <div className="font-bold lg:block hidden mt-[30px] ml-[24px]">
            Smart City Hub
          </div>
          <div
            className="cursor-pointer lg:hidden block"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineBars size={30} onClick={toggleSidebar} />
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div
          className={`flex-col text-black h-full fixed top-0 left-0 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } 
    md:translate-x-0 md:relative md:flex md:w-64 transition-transform duration-300 ease-in-out`}
        >
          <div className="list-group list-group-flush">
            <div className="lg:hidden block text-lg font-bold mt-6 p-0 ml-6">
              Smart City Hub
            </div>
            <div className="text-lg font-bold mt-6 p-0 ml-6">Control Panel</div>
            <span className="cursor-pointer d-flex w-auto mx- rounded-sm flex-row gap-x-4 list-group-item mt-2 list-group-item-action bg-light ">
              <div>
                <CiHome className="font-bold" size={25} />
              </div>
              <div>
                <Link
                  to="/admindashboard"
                  className="font-bold decoration-transparent text-black"
                >
                  Home Lights
                </Link>
              </div>
            </span>
            <span className="d-flex flex-row gap-x-4 mt-4 cursor-pointer bg-white list-group-item list-group-item-action bg-light ">
              <div>
                <AiOutlineBars size={30} />
              </div>
              <div>
                <Link
                  to=""
                  className="font-bold decoration-transparent text-black"
                >
                  Account Settings
                </Link>
              </div>
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`flex-1 ${
            sidebarOpen ? "ml-64" : ""
          } md:ml-64 p-4 transition-all duration-300`}
        >
          <Outlet />
        </div>
      </div>
      <House />
    </div>
  );
};

export default Sidebar;
