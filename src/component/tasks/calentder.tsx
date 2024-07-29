// import React from 'react';
// import { IoAddOutline } from 'react-icons/io5';
// import { IoMdArrowRoundBack } from "react-icons/io";
// import { Navbar } from '../navigations/Navbar';

// const TaskManager: React.FC = () => {
//   const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

//   return (

//     <div className='w-full m-2  '>
//       <div className='flex justify-between items-center p-4 md:hidden mr-[1vh]'>
//         <IoMdArrowRoundBack className='ml-[1vh] text-xl' />
//         <input
//           type="text"
//           placeholder="Search..."
//           className={`
//                 px-4 py-2
//                 border border-purple-200 
//                 bg-white
//                 rounded-full
//                 focus:outline-none
//                 transition-all duration-300 ease-in-out
                
//             `}

//         />

//       </div>
//       <Navbar />
//       <div className="bg-white p-6 rounded-lg   h-[30%]  mx-auto mt-2">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl ">Oct, 2020</h1>
//           <button className="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center">
//             <IoAddOutline className="mr-1" /> Add Task
//           </button>
//         </div>

//         <div className="grid grid-cols-7 gap-2 mb-6">
//           {days.map((day, index) => (
//             <div key={index} className={`text-center py-2 ${day === 'Tu' ? 'bg-purple-100 rounded-full' : ''}`}>
//               <div className="text-sm text-gray-600">{day}</div>
//               <div className={`font-bold ${day === 'Tu' ? 'text-purple-600' : ''}`}>{index + 3}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default TaskManager;

import React from 'react';
import { IoAddOutline } from 'react-icons/io5';
import { IoMdArrowRoundBack } from 'react-icons/io';

const getCurrentWeekDates = () => {
  const today = new Date();
  const firstDayOfWeek = today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1); // Adjust for Sunday
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today.setDate(firstDayOfWeek + i));
    return date;
  });
  return weekDates;
};

const TaskManager: React.FC = () => {
  const weekDates = getCurrentWeekDates();
  const today = new Date();
  const currentMonthYear = today.toLocaleString('default', { month: 'short', year: 'numeric' });
  
  return (
    <div className='w-full md:m-2 md:bg-white   rounded-lg  '>
      <div className='flex justify-between items-center p-4 md:hidden mr-[1vh]  '>
        <IoMdArrowRoundBack className='ml-[1vh] text-xl' />
        <input
          type="text"
          placeholder="Search..."
          className='px-4 py-2 border border-purple-200 bg-white rounded-full focus:outline-none transition-all duration-300 ease-in-out'
        />
      </div>
      
      <div className="bg-white p-6 rounded-lg h-[30%] mx-auto mt-2">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl">{currentMonthYear}</h1>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center">
            <IoAddOutline className="mr-1" /> Add Task
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-6">
          {weekDates.map((date, index) => (
            <div
              key={index}
              className={`text-center py-2 ${date.toDateString() === today.toDateString() ? 'bg-purple-100 rounded-full' : ''}`}
            >
              <div className="text-sm text-gray-600">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
              <div className={` ${date.toDateString() === today.toDateString() ? 'text-purple-600' : ''}`}>
                {date.getDate()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
