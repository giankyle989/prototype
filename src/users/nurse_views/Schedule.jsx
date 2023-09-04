import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import AddLabResultModal from "../../components/modals/AddLabResultModal";


const Schedule = () => {
  const [userRole, setUserRole] = useState('nurse');
  const [showAddLabResult, setShowAddLabResult] = useState(false)
  const handleOnClose = () => setShowAddLabResult(false)
  return (
    <>
      <div className="flex w-screen">
      <Sidebar userRole={userRole}/>
        <div className=" w-full ml-8">
          <div>
            <h1 className="text-center text-2xl font-bold">Appointment Schedule</h1>
          </div>
          <div className="mt-32">
            <h1>Appointments for today</h1>
            <div className="p-4">
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Date</th>
                    <th className="border p-2">Time</th>
                    <th className="border p-2">Patient Name</th>
                    <th className="border p-2">Doctor</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border  text-center p-2">09-23-23</td>
                    <td className="border  text-center p-2">10:30AM</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">Doctor 1</td>
                    <td className="border  text-center p-2">Done</td>
                    <td className="border  text-center p-2">
                    </td>
                  </tr>
                  <tr>
                    <td className="border  text-center p-2">09-23-23</td>
                    <td className="border  text-center p-2">2:30PM</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">Doctor 1</td>
                    <td className="border  text-center p-2">Done</td>
                    <td className="border  text-center p-2">
                    </td>
                  </tr>
                  <tr>
                    <td className="border  text-center p-2">09-23-23</td>
                    <td className="border  text-center p-2">3:30PM</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">Doctor 1</td>
                    <td className="border  text-center p-2">Assessment with Nurse</td>
                    <td className="border  text-center p-2">
                      <button onClick={() => setShowAddLabResult(true)} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
                        Add Lab Results
                      </button>
                      <button className="px-4 py-2 bg-green-600 text-white rounded mr-2">
                        Consult
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border  text-center p-2">09-23-23</td>
                    <td className="border  text-center p-2">4:30PM</td>
                    <td className="border  text-center p-2">Juan Cruz</td>
                    <td className="border  text-center p-2">Doctor 1</td>
                    <td className="border  text-center p-2">Waiting in lobby</td>
                    <td className="border  text-center p-2">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddLabResultModal onClose={handleOnClose} visible={showAddLabResult}/>
    </>
  );
};

export default Schedule;
