import React from "react";

const ViewPatientModal = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="modal-overlay fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="modal-container bg-white w-120 rounded-lg shadow-lg z-50 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="modal-header bg-[#4867D6] text-white p-4 rounded-t-lg">
          <h2 className="text-2xl font-semibold">Patient Details</h2>
        </div>
        <div className="modal-content p-4">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Date</th>
                  <th className="border p-2">Time</th>
                  <th className="border p-2">Appointment ID</th>
                  <th className="border p-2">Reason</th>
                  <th className="border p-2">Diagnosis</th>
                  <th className="border p-2">Status</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border text-center p-2">09-23-23</td>
                  <td className="border text-center p-2">10:30AM</td>
                  <td className="border text-center p-2">APPT-102</td>
                  <td className="border text-center p-2">Check Up</td>
                  <td className="border text-center p-2">Headache</td>
                  <td className="border text-center p-2">Complete</td>
                  <td className="border text-center p-2">
                    <button className="px-2 py-1 bg-blue-500 text-white rounded mr-2">
                      Prescriptions
                    </button>
                    <button className="px-2 py-1 bg-green-500 text-white rounded">
                      Test Results
                    </button>
                  </td>
                </tr>
                {/* Add more rows here */}
              </tbody>
            </table>
          </div>
        </div>
        <div className="modal-footer bg-gray-100 p-4 rounded-b-lg flex justify-end">
          {/* Add footer content here */}
        </div>
      </div>
    </div>
  );
};

export default ViewPatientModal;
