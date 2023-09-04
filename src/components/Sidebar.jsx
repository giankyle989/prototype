import React, { useState } from 'react';
import AdminNavigation from './contents/AdminNavigation';
import StaffNavigation from './contents/StaffNavigation';
import NurseNavigation from './contents/NurseNavigation';
import sidebarimg from '../assets/control.png'
import logo from '../assets/OneHealthPNG.png'
const Sidebar = ({ userRole }) => {

  const [open, setOpen] = useState(true)

  return (
    <>
      <div className={`${open ? 'w-72' : 'w-20'} bg-[#4867D6] text-white h-screen relative p-4`}>
        <img src={sidebarimg} className='absolute cursor-pointer rounded-full border-[#4867D6] -right-3 top-9 w-7 border-2' onClick={() => setOpen(!open)} />
        <div className='flex p-4 items-center justify-center'>
        <img src={logo} width="200px" alt="logo" />
        </div>
        <h3 className='text-center text-1xl uppercase'>{userRole}</h3>
        <div>
          <ul className='text-2xl'>
          {userRole === 'admin' && <AdminNavigation />}
          {userRole === 'staff' && <StaffNavigation />}
          {userRole === 'nurse' && <NurseNavigation />}
            </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
