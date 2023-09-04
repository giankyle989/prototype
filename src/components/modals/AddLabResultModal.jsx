import React from 'react'

const AddLabResultModal = ({ visible, onClose }) => {
    if (!visible) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
          <div className="modal-container bg-white w-96 rounded-lg shadow-lg z-50 relative">
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
              <h2 className="text-2xl font-semibold">Add Lab Result</h2>
            </div>
            <div className="modal-content p-4">
            <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="file"
                />
              </div>
            </div>
            <div className="modal-footer bg-gray-100 p-4 rounded-b-lg flex justify-end">
              <button
                onClick={onClose}
                className="bg-[#4867D6] hover:bg-[#32499b] text-white px-4 py-2 rounded-lg focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      );
    };

export default AddLabResultModal