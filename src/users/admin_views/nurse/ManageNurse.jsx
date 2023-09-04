import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
const ManageNurse = () => {
  const [userRole, setUserRole] = useState('admin');
  return (
    <>
    <div className='flex'>
    <Sidebar userRole={userRole}/>
        <div className='w-full'>
          <h1 className='text-center text-2xl font-bold'>Manage Nurses</h1>
          <div className='mt-24'>
            <h2 className='ml-4'>List of Nurses</h2>
          <table className="w-full border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Nurse ID</th>
                    <th className="border p-2">Nurse Name</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">License Number</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border  text-center p-2">NUR-002</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">Email@email.com</td>
                    <td className="border  text-center p-2">123123</td>
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
                    <td className="border  text-center p-2">NUR-001</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">Email@email.com</td>
                    <td className="border  text-center p-2">123123</td>
                    <td className="border  text-center p-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
                        Edit
                      </button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded">
                        Delete
                      </button>
                    </td>
                  </tr>                  <tr>
                    <td className="border  text-center p-2">NUR-003</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">Email@email.com</td>
                    <td className="border  text-center p-2">123123</td>
                    <td className="border  text-center p-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
                        Edit
                      </button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded">
                        Delete
                      </button>
                    </td>
                  </tr>                  <tr>
                    <td className="border  text-center p-2">NUR-005</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">Email@email.com</td>
                    <td className="border  text-center p-2">123123</td>
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

export default ManageNurse