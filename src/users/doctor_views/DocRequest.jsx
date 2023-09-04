import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import Tracker from '../../components/Tracker'
import RejectPatientModal from '../../components/modals/RejectPatientModal'

const DocRequest = () => {
  const [showRejectPatientModal, setShowRejectPatientModal] = useState(false)
  const handleOnClose = () => setShowRejectPatientModal(false)
  return (
    <>
      <div className=" bg-slate-300">
        <Navbar />
        <div className="flex">
          <Tracker />
          <div className="bg-white flex-1 mt-2 mr-2 rounded-md">
            <div>
              <h1 className="text-center text-2xl font-bold">
                Appointment Requests
              </h1>
            </div>
            <div className="mt-12">
              <h1 className='ml-4'>Pending Requests</h1>
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
                        <button className="px-4 py-2 bg-[#4867D6] text-white rounded mr-2">
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
                        <button className="px-4 py-2 bg-[#4867D6] text-white rounded mr-2">
                          Approve
                        </button>
                        <button onClick={() => setShowRejectPatientModal(true)} className="px-4 py-2 bg-red-500 text-white rounded">
                          Reject
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-12">
              <h1 className='ml-4'>Accepted Requests</h1>
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
                        <button className="px-4 py-2 bg-[#4867D6] text-white rounded mr-2">
                          Reschedule
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="border  text-center p-2">09-23-23</td>
                      <td className="border  text-center p-2">10:30AM</td>
                      <td className="border  text-center p-2">Juan Cruz</td>
                      <td className="border  text-center p-2">Check up</td>
                      <td className="border  text-center p-2">
                        <button className="px-4 py-2 bg-[#4867D6] text-white rounded mr-2">
                          Reschedule
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RejectPatientModal onClose={handleOnClose} visible={showRejectPatientModal}/>
    </>
  )
}

export default DocRequest