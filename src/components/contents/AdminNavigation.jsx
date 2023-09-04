import React, { useState } from 'react';


const AdminNavigation = () => {
  const [showDoctorMenu, setShowDoctorMenu] = useState(false);
  const [showNurseMenu, setShowNurseMenu] = useState(false);
  const [showAnnouncementMenu, setShowAnnouncementMenu] = useState(false);

  const toggleDoctorMenu = () => {
    setShowDoctorMenu(!showDoctorMenu);
  };

  const toggleNurseMenu = () => {
    setShowNurseMenu(!showNurseMenu);
  };

  const toggleAnnouncementMenu = () => {
    setShowAnnouncementMenu(!showAnnouncementMenu);
  };

  return (
    <>
      <li className='py-4'><a href="/admin">Department</a></li>
      <li className='py-4'>
        <a href="#" onClick={toggleDoctorMenu}>
          Doctor
          {showDoctorMenu ? ' ▲' : ' ▼'}
        </a>
        {showDoctorMenu && (
          <ul>
            <li><a className='text-base' href="/admin/doctoradd">- Add Doctor</a></li>
            <li><a className='text-base' href="/admin/doctorman">- Manage Doctor</a></li>
          </ul>
        )}
      </li>

      <li className='py-4'>
        <a href="#" onClick={toggleNurseMenu} >
          Nurse
          {showNurseMenu ? ' ▲' : ' ▼'}
        </a>
        {showNurseMenu && (
          <ul>
            <li><a className='text-base' href="/admin/nurseadd">- Add Nurse</a></li>
            <li><a className='text-base' href="/admin/nurseman">- Manage Nurse</a></li>
          </ul>
        )}
      </li>
      <li className='py-4'>
        <a href="#" onClick={toggleAnnouncementMenu}>
          Announcement
          {showAnnouncementMenu ? ' ▲' : ' ▼'}
        </a>
        {showAnnouncementMenu && (
          <ul>
            <li><a className='text-base' href="/admin/annadd">- Add Announcement</a></li>
            <li><a className='text-base' href="/admin/annman">- Manage Announcements</a></li>
          </ul>
        )}
      </li>
      <li className='py-4'><a href="/admin/staff">Staff</a></li>
      <li className='pt-16 underline'><a href="#">Logout</a></li>
    </>
  );
}

export default AdminNavigation;
