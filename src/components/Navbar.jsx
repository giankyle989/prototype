import React from "react";
import logo from '../assets/OneHealthPNG.png'
const Navbar = () => {
  return (
    <>
      <div className="w-full h-[70px] flex justify-between items-center px-4 bg-[#4867D6] text-white  ">
        <a href="">
        <img src={logo} width="200px" alt="" />
        </a>
        <div>
          <ul className="flex">
          <li>
              <a href="/doctor" className="hover:font-bold p-2">
                Request
              </a>
            </li>
            <li>
              <a href="/doctor/history" className="hover:font-bold p-2">
                History
              </a>
            </li>
            <li>
              <a href="/doctor/schedule" className="hover:font-bold p-2">
                Schedule
              </a>
            </li>
            <li>
              <a href="/doctor/availability" className="hover:font-bold p-2">
                Availability
              </a>
            </li>
            <li>
              <a href="/" className="hover:font-bold p-2">
                Logout
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
