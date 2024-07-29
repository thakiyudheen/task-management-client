import React from 'react';
import { TbListDetails } from "react-icons/tb";
import { BsClipboardData } from "react-icons/bs";

interface TaskCardProps {
  title: string;
  progress: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, progress }) => {
  return (
    <>
    <div className=" bg-gradient-to-l from-purple-500 to-purple-700 md:w-full text-purple-100 p-4  rounded-lg shadow">
    <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <BsClipboardData className="text-white text-2xl" />
</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{progress}</p>
      <div className="  w-56" ></div>
    </div>
    <div className='md:hidden h-[4vh]'></div>
    </>

  );
};

export default TaskCard;
// import React from 'react';
// import { BsClipboardData } from "react-icons/bs"; // Changed icon to better match the image

// interface TaskCardProps {
//   title: string;
//   progress: string;
// }

// const TaskCard: React.FC<TaskCardProps> = ({ title, progress }) => {
//   return (
//     <>
//       <div className="bg-gradient-to-br from-purple-600 to-purple-700 md:w-64 h-64 w-[290px] rounded-xl shadow-lg p-6 mr-4 flex flex-col justify-between">
//         <div>
//           <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
//             <BsClipboardData className="text-white text-2xl" />
//           </div>
//           <h3 className="text-white text-lg font-semibold mb-1">{title}</h3>
//           <p className="text-white text-xl font-bold">{progress}</p>
//         </div>
//         <p className="text-purple-200 text-sm">October 20, 2020</p>
//       </div>
      
//     </>
//   );
// };

// export default TaskCard;