import React, { useState } from "react";
import AdminLayout from "../Pages/AdminPages/AdminLayout";


const AdminHouses = () => {
  const [activeTab, setActiveTab] = useState("House01");
  const [lights, setLights] = useState([
    { name: "Light 01", state: "on", description: "description of this light(can be empty)", stateClass: "bg-success" },
    { name: "Light 02", state: "on", description: "description of this light(can be empty)", stateClass: "bg-success" },
    { name: "Light 03", state: "on", description: "description of this light(can be empty)", stateClass: "bg-success" },
    { name: "Light 04", state: "on", description: "description of this light(can be empty)", stateClass: "bg-success" },
    { name: "Light 05", state: "off", description: "description of this light(can be empty)", stateClass: "bg-danger" },
    { name: "Light 06", state: "off", description: "description of this light(can be empty)", stateClass: "bg-danger" },
    { name: "Light 07", state: "off", description: "description of this light(can be empty)", stateClass: "bg-danger" },
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleDeleteClick = (name) => {
    setLights(lights.filter(light => light.name !== name));
  };

  const handleEditClick = (name) => {
    const newDescription = prompt("Enter new description:");
    if (newDescription !== null) {
      setLights(lights.map(light =>
        light.name === name ? { ...light, description: newDescription } : light
      ));
    }
  };

  const handleToggleState = (name) => {
    setLights(lights.map(light =>
      light.name === name
        ? { ...light, state: light.state === "on" ? "off" : "on", stateClass: light.state === "on" ? "bg-danger" : "bg-success" }
        : light
    ));
  };

  return (
    <>
      <div className="d-flex flex-row">
        <AdminLayout />
        <div className="container-fluid">
          <div className="row">
            <div className="col p-4 table-responsive">
              <div className="table d-flex mb-3">
                {["House01", "House02", "House03"].map((house) => (
                  <div key={house}>
                    <button
                      className={`btn ${activeTab === house ? "btn-light" : "btn-secondary"} me-2`}
                      onClick={() => handleTabClick(house)}
                    >
                      {house}
                    </button>
                  </div>
                ))}
                <div className="ms-auto">
                  <button className="btn btn-dark">Call to action</button>
                </div>
              </div>
              <div className="card mt-0 mx-2">
                <div className="card-body h-[448px]">
                  <table className="table-responsive w-[900px]">
                    <thead className="-mt-8">
                      <tr>
                        <th>Title</th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="h-[20px] border-b-2">
                        <td className="font-bold text-[#9ca3af]">
                          <p className="text-[#6b7280] font-bold">{activeTab}</p>
                        </td>
                        <td className="text-[#9ca3af]">
                          <p className="text-[#6b7280] font-bold">
                            state&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options
                          </p>
                        </td>
                        <td>
                          <p className="text-[#6b7280] font-bold">description</p>
                        </td>
                      </tr>
                      {lights.map((light) => (
                        <tr className="border-t-2 h-[50px]" key={light.name}>
                          <td className="w-[320px] h-[30px]">{light.name}</td>
                          <td className="h-[25px]">
                            <button
                              className={`btn mr-2 rounded-lg text-md  text-white ${light.stateClass}`}
                              onClick={() => handleToggleState(light.name)}
                            >
                              {light.state}
                            </button>
                            <button className="btn btn-dark me-2" onClick={() => handleDeleteClick(light.name)}>
                              delete
                            </button>
                            <button className="btn btn-dark" onClick={() => handleEditClick(light.name)}>
                              edit
                            </button>
                          </td>
                          <td className="w-[320px]">{light.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHouses;
