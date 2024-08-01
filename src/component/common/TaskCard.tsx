import React from 'react';
import { TbListDetails } from "react-icons/tb";
import { BsClipboardData } from "react-icons/bs";

interface TaskCardProps {
  title: string;
  progress: any;
  count:any;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, progress ,count}) => {
  return (
    <>
      <div className={`${count%2!=0?'bg-gradient-to-l from-purple-500 to-purple-700':'bg-gradient-to-l from-purple-400 to-purple-400'} md:w-full text-purple-100 p-4  rounded-lg shadow`}>
        <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <BsClipboardData className="text-white text-2xl" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-white font-semibold text-2xl">{progress}</p>
        <div className="  w-56" ></div>
      </div>
      <div className='md:hidden h-[4vh]'></div>
    </>

  );
};

export default TaskCard;
