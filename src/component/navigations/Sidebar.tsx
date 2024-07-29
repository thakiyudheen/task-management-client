

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-200 hidden md:block text-white flex items-center flex-col w-18 rounded-lg p-4">
      <h1 className="text-2xl font-bold mb-4 p-3 text-purple-700"><FaFireAlt /></h1>
      <nav>
        <ul>
          <li className={`mb-4 rounded p-4 ${location.pathname === '/' ? 'bg-purple-700' : 'bg-gray-300'}`}>
            <Link to="/">
              <IoMdHome className='text-[3vh] text-white' />
            </Link>
          </li>
          <li className={`mb-4 rounded p-4 ${location.pathname === '/notes' ? 'bg-purple-700' : 'bg-gray-300'}`}>
            <Link to="/notes">
              <CiCalendarDate className='text-[3vh]   text-white' />
            </Link>
          </li>
          <li className={`mb-4 rounded p-4 ${location.pathname === '/notifications' ? 'bg-purple-700' : 'bg-gray-300'}`}>
            <Link to="/notifications">
              <IoIosNotifications className='text-[3vh] text-white' />
            </Link>
          </li>
          <li className={`mb-4 rounded p-4 ${location.pathname === '/settings' ? 'bg-purple-700' : 'bg-gray-300'}`}>
            <Link to="/settings">
              <CiSettings className='text-[3vh] text-white' />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

