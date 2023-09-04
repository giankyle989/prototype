import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
const ManageDoctor = () => {
  const [userRole, setUserRole] = useState('admin');
  return (
    <>
    <div className='flex'>
    <Sidebar userRole={userRole}/>
        <div className='w-full'>
          <h1 className='text-center text-2xl font-bold'>Manage Doctors</h1>
          <div className='mt-24'>
            <h2 className='ml-4'>List of Doctors</h2>
          <table className="w-full border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Doctor ID</th>
                    <th className="border p-2">Doctor Name</th>
                    <th className="border p-2">Department</th>
                    <th className="border p-2">Specialization</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Clinic Address</th>
                    <th className="border p-2">Clinic Number</th>
                    <th className="border p-2">License Number</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border  text-center p-2">DOC-002</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">OB-GYN</td>
                    <td className="border  text-center p-2">Obstetrician</td>
                    <td className="border  text-center p-2">Email@email.com</td>
                    <td className="border  text-center p-2">123 Street</td>
                    <td className="border  text-center p-2">515-2333</td>
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
                    <td className="border  text-center p-2">DOC-001</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">Pediatrics</td>
                    <td className="border  text-center p-2">Cardiology</td>
                    <td className="border  text-center p-2">Email@email.com</td>
                    <td className="border  text-center p-2">123 Street</td>
                    <td className="border  text-center p-2">515-2333</td>
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
                    <td className="border  text-center p-2">DOC-003</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">General Medicine</td>
                    <td className="border  text-center p-2">Geriatrician</td>
                    <td className="border  text-center p-2">Email@email.com</td>
                    <td className="border  text-center p-2">123 Street</td>
                    <td className="border  text-center p-2">515-2333</td>
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
                    <td className="border  text-center p-2">DOC-005</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">Internal Medicine</td>
                    <td className="border  text-center p-2">Pulmonology</td>
                    <td className="border  text-center p-2">Email@email.com</td>
                    <td className="border  text-center p-2">123 Street</td>
                    <td className="border  text-center p-2">515-2333</td>
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

export default ManageDoctor