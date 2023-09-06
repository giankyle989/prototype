import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Tracker from "../../components/Tracker";
import ViewPatientModal from "../../components/modals/ViewPatientModal";

const DocHistory = () => {
  const [showViewPatientModal, setShowViewPatientModal] = useState(false);
  const handleOnClose = () => setShowViewPatientModal(false);

  return (
    <>
      <div className="bg-slate-300 min-h-screen">
        <Navbar />
        <div className="flex">
          <Tracker />
          <div className="bg-white flex-1 mt-2 mr-2 rounded-md p-4">
            <div>
              <h1 className="text-center text-2xl font-bold">
                Appointment History
              </h1>
            </div>
            <div className="mt-4">
              <div className="mt-2 overflow-x-auto">
                <table className="w-full border-collapse border">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">Date</th>
                      <th className="border p-2">Time</th>
                      <th className="border p-2">Patient Name</th>
                      <th className="border p-2">Appointment ID</th>
                      <th className="border p-2">Diagnosis</th>
                      <th className="border p-2">Status</th>
                      <th className="border p-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border text-center p-2">09-23-23</td>
                      <td className="border text-center p-2">10:30AM</td>
                      <td className="border text-center p-2">John Doe</td>
                      <td className="border text-center p-2">APPT-101</td>
                      <td className="border text-center p-2">Headache</td>
                      <td className="border text-center p-2">Complete</td>
                      <td className="border text-center p-2">
                        <button
                          className="px-4 py-2 bg-[#4867D6] text-white rounded mr-2"
                          onClick={() => setShowViewPatientModal(true)}
                        >
                          View Patient
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="border text-center p-2">09-23-23</td>
                      <td className="border text-center p-2">10:30AM</td>
                      <td className="border text-center p-2">John Doe</td>
                      <td className="border text-center p-2">APPT-102</td>
                      <td className="border text-center p-2">Headache</td>
                      <td className="border text-center p-2">Rejected</td>
                      <td className="border text-center p-2">
                        <button
                          className="px-4 py-2 bg-[#4867D6] text-white rounded mr-2"
                          onClick={() => setShowViewPatientModal(true)}
                        >
                          View Patient
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="border text-center p-2">09-23-23</td>
                      <td className="border text-center p-2">10:30AM</td>
                      <td className="border text-center p-2">John Doe</td>
                      <td className="border text-center p-2">APPT-103</td>
                      <td className="border text-center p-2">Headache</td>
                      <td className="border text-center p-2">Complete</td>
                      <td className="border text-center p-2">
                        <button
                          className="px-4 py-2 bg-[#4867D6] text-white rounded mr-2"
                          onClick={() => setShowViewPatientModal(true)}
                        >
                          View Patient
                        </button>
                      </td>
                    </tr>

                    
                    {/* Add more appointment rows here */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ViewPatientModal onClose={handleOnClose} visible={showViewPatientModal} />
      </div>
    </>
  );
};

export default DocHistory;
