import React, {useState} from 'react'

const House = () => {
  const [activeTab, setActiveTab] = useState("House01");

  const handleTabClick = (tab) => {
      setActiveTab(tab);
  };

  return (
    <>
     <div className="container-fluid">
        <div className="row">

          <div className="col p-4">
          <div className="d-flex mb-3">
  {["House01", "House02", "House03"].map((house) => (
    <div key={house}>
      <button
        className={`ml-2 btn ${
          activeTab === house ? "btn-light" : "btn-secondary"
        } me-2`}
        onClick={() => handleTabClick(house)}
      >
        {house}
      </button>
    </div>
  ))}
  <div className="ms-auto">
    <button className="btn btn-dark px-36">Call to action</button>
  </div>
</div>
<div className="mx-6 border-2 rounded-sm w-[930px]">
  <div className="card-body w-[920px] overflow-x-auto"> {/* Tailwind class */}
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
                            <p className="text-[#6b7280] font-bold">{activeTab}</p>
                        </td>
                        <td className="text-[#9ca3af] w-[200px]"><p className="text-[#6b7280] font-bold">state</p></td>
                        <td>
                            <p className="text-[#6b7280] font-bold">description</p>
                        </td>
                    </tr>
                    <tr className="border-b-2">
                      <td>Light 01</td>
                      <td className="py-1 px-2 mt-1 inline-flex text-md leading-5 rounded-md bg-success text-white">on</td>
                      <td>description of this light(can be empty)</td>
                    </tr>
                    <tr className="border-b-2">
                      <td>Light 02</td>
                      <td className="py-1 px-2 mt-1 inline-flex text-md leading-5 rounded-md bg-success text-white">on</td>
                      <td>description of this light(can be empty)</td>
                    </tr>
                    <tr className="border-b-2">
                      <td>Light 03</td>
                      <td className="py-1 px-2 mt-1 inline-flex text-md leading-5 rounded-md bg-success text-white">on</td>
                      <td>description of this light(can be empty)</td>
                    </tr>
                    <tr className="border-b-2">
                      <td>Light 04</td>
                      <td className="py-1 px-2 mt-1 inline-flex text-md leading-5 rounded-md bg-success text-white">on</td>
                      <td>description of this light(can be empty)</td>
                    </tr>
                    <tr className="border-b-2">
                      <td>Light 05</td>
                      <td className="py-1 px-2 mt-1 inline-flex text-md leading-5 rounded-md bg-danger text-white">off</td>
                      <td>description of this light(can be empty)</td>
                    </tr>
                    <tr className="border-b-2">
                      <td>Light 06</td>
                      <td className="py-1 px-2 mt-1 inline-flex text-md leading-5 rounded-md bg-danger text-white">
                        off</td>
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
  )
}

export default House