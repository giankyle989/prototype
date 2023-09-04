import React, { useState } from 'react';

const Tracker = () => {
  const [showInProgressMenu, setShowInProgressMenu] = useState(false);
  const [showCheckedInMenu, setShowCheckedInMenu] = useState(false);

  const toggleInProgressMenu = () => {
    setShowInProgressMenu(!showInProgressMenu);
  };

  const toggleCheckedInMenu = () => {
    setShowCheckedInMenu(!showCheckedInMenu);
  };

  return (
    <>
      <div className='w-72 h-screen p- bg-white m-2 p-2 rounded-md'>
        <div className='flex p-4 items-center justify-center'>
          <h2 className='text-2xl font-bold'>Tracker</h2>
        </div>
        <div>
          <ul className='text-2xl'>
            <li className='py-4'>
              <a href="#" onClick={toggleInProgressMenu}>
                In Progress (2)
                {showInProgressMenu ? ' ▲' : ' ▼'}
              </a>
              {showInProgressMenu && (
                <ul>
                  <li className='bg-orange-600 rounded-md p-2'>
                    <p className='text-sm font-bold text-white'>Juan Dela Cruz</p>
                    <p className='text-xs '>5 minutes ago</p>
                    <p className='text-xs text-white'>Consultation with doctor</p>
                  </li>
                  <li className='bg-orange-600 rounded-md p-2 mt-2'>
                    <p className='text-sm font-bold text-white'>Danilo Bautista</p>
                    <p className='text-xs '>1 minutes ago</p>
                    <p className='text-xs text-white'>Assessment with nurse</p>
                  </li>
                </ul>
              )}
            </li>
            <li className='py-4'>
              <a href="#" onClick={toggleCheckedInMenu}>
                Checked In (2)
                {showCheckedInMenu ? ' ▲' : ' ▼'}
              </a>
              {showCheckedInMenu && (
                <ul>
                  <li className='bg-yellow-600 rounded-md p-2'>
                    <p className='text-sm font-bold text-white'>Pedro Gil</p>
                    <p className='text-xs'>5 minutes ago</p>
                    <p className='text-xs text-white'>In Lobby</p>
                  </li>
                  <li className='bg-yellow-600 rounded-md p-2 mt-2'>
                    <p className='text-sm font-bold text-white'>Mary Sanchez</p>
                    <p className='text-xs'>1 minute ago</p>
                    <p className='text-xs text-white'>In Lobby</p>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tracker;
