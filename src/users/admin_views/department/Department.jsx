import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";

const Department = () => {
  const [userRole, setUserRole] = useState('admin');
  return (
    <>
      <div className="flex w-screen">
      <Sidebar userRole={userRole}/>
        <div className=" w-full ml-8">
          <div>
            <h1 className="text-center text-2xl font-bold">Add new department</h1>
            <form className="p-4 text-center mt-4">
              <label>Deparment Name:</label>
              <input
                className="border-2 border-black ml-8"
                type="text"
                placeholder="Create new department"
              />
              <button className="p-2 bg-sky-500 ml-16 rounded-md text-white">
                Create
              </button>
            </form>
          </div>
          <div className="mt-32">
            <h1>List of Departments</h1>
            <div className="p-4">
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Department ID</th>
                    <th className="border p-2">Department Name</th>
                    <th className="border p-2">Number of Doctors</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border  text-center p-2">DEPT-102</td>
                    <td className="border  text-center p-2">OB-GYN</td>
                    <td className="border  text-center p-2">2</td>
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
                    <td className="border  text-center p-2">DEPT-103</td>
                    <td className="border  text-center p-2">Pediatrics</td>
                    <td className="border  text-center p-2">2</td>
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
                    <td className="border  text-center p-2">DEPT-104</td>
                    <td className="border  text-center p-2">General Medicine</td>
                    <td className="border  text-center p-2">2</td>
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
                    <td className="border  text-center p-2">DEPT-105</td>
                    <td className="border  text-center p-2">Internal Medicine</td>
                    <td className="border  text-center p-2">2</td>
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
      </div>
    </>
  );
};

export default Department;
