import React, {useState} from 'react'
import Sidebar from "../../../components/Sidebar";
const Staff = () => {
  const [userRole, setUserRole] = useState('admin');
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log(formData);
  };
  return (
    <>
    <div className='flex'>
    <Sidebar userRole={userRole}/>
        <div className="w-full">
          <h1 className="mt-8 font-bold text-center">Add New Staff</h1>
          <div className="max-w-md mx-auto">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="firstName"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="lastName"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Email"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="firstName"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Password"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="lastName"
                  >
                    Retype Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Retype Password"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className='mt-16'>
            <h2 className='ml-4'>List of Staff</h2>
          <table className="w-full border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Staff ID</th>
                    <th className="border p-2">Staff Name</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border  text-center p-2">ST-002</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">Email@email.com</td>
                    <td className="border  text-center p-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
                        Edit
                      </button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border  text-center p-2">ST-001</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">Email@email.com</td>
                    <td className="border  text-center p-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
                        Edit
                      </button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded">
                        Delete
                      </button>
                    </td>
                  </tr>                  <tr>
                    <td className="border  text-center p-2">ST-003</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">Email@email.com</td>
                    <td className="border  text-center p-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
                        Edit
                      </button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded">
                        Delete
                      </button>
                    </td>
                  </tr>                  <tr>
                    <td className="border  text-center p-2">ST-005</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">Email@email.com</td>
                    <td className="border  text-center p-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
                        Edit
                      </button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
    </div>
    </>
  )
}

export default Staff