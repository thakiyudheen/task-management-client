import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";

const BottomNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: IoMdHome },
    { path: '/notes', icon: CiCalendarDate },
    { path: '/notifications', icon: IoIosNotifications },
    { path: '/settings', icon: CiSettings },
  ];

  return (
    <nav className="fixed bottom-0 md:hidden left-0 right-0 bg-gray-100 shadow-lg p-2">
      <ul className="flex justify-around items-center h-16">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="flex flex-col items-center">
              <item.icon
                className={`text-2xl ${location.pathname === item.path
                    ? 'text-[#8215bb]'
                    : 'text-gray-400'
                  }`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;