import React, { useState } from "react";

const House = () => {
  const [activeTab, setActiveTab] = useState("House01");

  const tabs = ["House01", "House02", "House03"];

  return (
    <>
      <div className="container-fluid flex justify-center">
        <div className="row">
          <div className="col p-4">
            <div className="flex justify-between p-2 bg-gray-100 rounded-lg w-[40%] mb-3">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer px-4 py-2 rounded-lg ${
                    activeTab === tab ? "bg-white shadow" : ""
                  }`}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className="border-2 rounded-sm min-w-[930px]">
              <div className="card-body w-[920px] overflow-x-auto">
                {" "}
                {/* Tailwind class */}
                <div className="table mt-[28px] h-[30px] min-w-full">
                  <table className="table mt-[28px] h-[30px] min-w-full">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold w-[250px] text-[#9ca3af]">
                          <p className="text-[#6b7280] font-bold">
                            {activeTab}
                          </p>
                        </td>
                        <td className="text-[#9ca3af] w-[200px]">
                          <p className="text-[#6b7280] font-bold">state</p>
                        </td>
                        <td>
                          <p className="text-[#6b7280] font-bold">
                            description
                          </p>
                        </td>
                      </tr>
                      <tr className="border-b-2">
                        <td>Light 01</td>
                        <td className="py-1 px-2 mt-1 inline-flex text-md leading-5 rounded-md bg-success text-white">
                          on
                        </td>
                        <td>description of this light(can be empty)</td>
                      </tr>
                      <tr className="border-b-2">
                        <td>Light 02</td>
                        <td className="py-1 px-2 mt-1 inline-flex text-md leading-5 rounded-md bg-success text-white">
                          on
                        </td>
                        <td>description of this light(can be empty)</td>
                      </tr>
                      <tr className="border-b-2">
                        <td>Light 03</td>
                        <td className="py-1 px-2 mt-1 inline-flex text-md leading-5 rounded-md bg-success text-white">
                          on
                        </td>
                        <td>description of this light(can be empty)</td>
                      </tr>
                      <tr className="border-b-2">
                        <td>Light 04</td>
                        <td className="py-1 px-2 mt-1 inline-flex text-md leading-5 rounded-md bg-success text-white">
                          on
                        </td>
                        <td>description of this light(can be empty)</td>
                      </tr>
                      <tr className="border-b-2">
                        <td>Light 05</td>
                        <td className="py-1 px-2 mt-1 inline-flex text-md leading-5 rounded-md bg-danger text-white">
                          off
                        </td>
                        <td>description of this light(can be empty)</td>
                      </tr>
                      <tr className="border-b-2">
                        <td>Light 06</td>
                        <td className="py-1 px-2 mt-1 inline-flex text-md leading-5 rounded-md bg-danger text-white">
                          off
                        </td>
                        <td>description of this light(can be empty)</td>
                      </tr>
                      {/* <tr className="">
                      <td>Light 07</td>
                      <td className="py-1 px-2 mt-1 inline-flex text-md leading-5 rounded-md bg-danger text-white">off</td>
                      <td>description of this light(can be empty)</td>
                    </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* <div className="mx-6 border-2 rounded-sm w-[930px]">
              <div className="card-body w-[920px] overflow-x-auto">
                <div className='table-responsive'>

                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default House;
