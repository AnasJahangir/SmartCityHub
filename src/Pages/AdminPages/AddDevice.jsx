import AdminLayout from "./AdminLayout"

const AddDevice = () => {
  return (
    <>
    <div className="d-flex flex-row">
            <AdminLayout/>
            <div className="w-3/4 h-screen flex items-center justify-center">
        <div className="lg:w-[450px] mx-2 w-auto h-[490px] bg-white lg:p-8 p-0 rounded shadow-md">
          <h2 className="lg:text-2xl font-bold mb-6 text-center">Add new device</h2>
          <form className="mx-2">
            <div className="mb-4">
              <input
                type="text"
                placeholder="location"
                className="lg:w-[400px] h-[40px] p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="name"
                className="w-[400px] h-[40px] p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="description(can be empty)"
                className="w-[400px] h-[40px] p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="type"
                className="w-[400px] h-[40px] p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="deviceId"
                className="w-[400px] h-[40px] p-3 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="text-center w-[400px] h-[40px] bg-black text-white rounded hover:bg-gray-800"
            >
              add
            </button>
          </form>
        </div>
      </div>

    </div>

    {/* </div> */}

    </>
  )
}

export default AddDevice