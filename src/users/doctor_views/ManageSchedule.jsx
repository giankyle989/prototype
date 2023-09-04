import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Tracker";

const ManageSchedule = () => {
  const [availability, setAvailability] = useState([
    { day: "Monday", time: "" },
    { day: "Tuesday", time: "" },
    { day: "Wednesday", time: "" },
    { day: "Thursday", time: "" },
    { day: "Friday", time: "" },
    { day: "Saturday", time: "" },
    { day: "Sunday", time: "" },
  ]);

  const updateAvailability = (day, time) => {
    const updatedAvailability = availability.map((slot) =>
      slot.day === day ? { ...slot, time } : slot
    );
    setAvailability(updatedAvailability);
  };

  return (
    <>
      <div className="bg-slate-300 min-h-screen">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="bg-white flex-1 mt-2 mr-2 rounded-md p-4">
            <div>
              <h1 className="text-center text-2xl font-bold">
                Doctor's Availability
              </h1>
            </div>
            <div className="mt-8">
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Day</th>
                    <th className="border p-2">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {availability.map((slot) => (
                    <tr key={slot.day}>
                      <td className="border text-center p-2">{slot.day}</td>
                      <td className="border text-center p-2">
                        <input
                          type="text"
                          value={slot.time}
                          onChange={(e) =>
                            updateAvailability(slot.day, e.target.value)
                          }
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageSchedule;
