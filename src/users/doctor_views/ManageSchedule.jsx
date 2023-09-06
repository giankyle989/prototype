import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Navbar from "../../components/Navbar";
import Tracker from "../../components/Tracker";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import SelectDateModal from "../../components/modals/SelectDate";

const localizer = momentLocalizer(moment);

function ManageSchedule() {
  const [showSelectDateModal, setShowSelectDateModal] = useState(false);
  const handleOnClose = () => setShowSelectDateModal(false);

  const events = [
    // Add your events here
    {
      title: "8:00 AM - 5:00 PM",
      start: new Date(2023, 8, 11), // September 1, 2023
      end: new Date(2023, 8, 11), // September 3, 2023
    },
    {
      title: "8:00 AM - 5:00 PM",
      start: new Date(2023, 8, 12), // September 1, 2023
      end: new Date(2023, 8, 12), // September 3, 2023
    },
    {
      title: "8:00 AM - 5:00 PM",
      start: new Date(2023, 8, 13), // September 1, 2023
      end: new Date(2023, 8, 13), // September 3, 2023
    },
    {
      title: "8:00 AM - 5:00 PM",
      start: new Date(2023, 8, 14), // September 1, 2023
      end: new Date(2023, 8, 14), // September 3, 2023
    },
    {
      title: "8:00 AM - 5:00 PM",
      start: new Date(2023, 8, 15), // September 1, 2023
      end: new Date(2023, 8, 15), // September 3, 2023
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-300">
      <Navbar />
      <div className="flex flex-1">
        <Tracker />
        <div className="bg-white flex-1 mt-2 mr-2 rounded-md p-4">
          <div>
            <h1 className="text-center text-2xl font-bold">
              September 2023
            </h1>
          </div>
          <div className="flex-1 h-full" onClick={() => setShowSelectDateModal(true)} >
            <BigCalendar
              localizer={localizer}
              events={events}
              defaultView="month"
              toolbar={false}
              views={["month"]} // Include 'week' view
            />
          </div>
        </div>
      </div>
      <SelectDateModal
        onClose={handleOnClose}
        visible={showSelectDateModal}
      />
    </div>
  );
}

export default ManageSchedule;