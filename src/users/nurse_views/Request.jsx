import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import RejectPatientModal from '../../components/modals/RejectPatientModal'

const Request = () => {
  const [userRole, setUserRole] = useState('nurse');
  const [showRejectPatientModal, setShowRejectPatientModal] = useState(false)
  const handleOnClose = () => setShowRejectPatientModal(false)
  return (
    <>
      <div className="flex w-screen">
      <Sidebar userRole={userRole}/>
        <div className=" w-full ml-8">
          <div>
            <h1 className="text-center text-2xl font-bold">Appointment Requests</h1>
          </div>
          <div className="mt-32">
            <h1>List of Requests</h1>
            <div className="p-4">
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Date</th>
                    <th className="border p-2">Time</th>
                    <th className="border p-2">Patient Name</th>
                    <th className="border p-2">Reason</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border  text-center p-2">09-23-23</td>
                    <td className="border  text-center p-2">10:30AM</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">Check up</td>
                    <td className="border  text-center p-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
                        Approve
                      </button>
                        <button  onClick={() => setShowRejectPatientModal(true)} className="px-4 py-2 bg-red-500 text-white rounded">
                          Reject
                        </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border  text-center p-2">09-23-23</td>
                    <td className="border  text-center p-2">10:30AM</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">Check up</td>
                    <td className="border  text-center p-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
                        Approve
                      </button>
                      <button  onClick={() => setShowRejectPatientModal(true)} className="px-4 py-2 bg-red-500 text-white rounded">
                          Reject
                        </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <RejectPatientModal onClose={handleOnClose} visible={showRejectPatientModal}/>
    </>
  );
};

export default Request;
