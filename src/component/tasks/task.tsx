
import React, { useState } from 'react';
import { FaTasks } from 'react-icons/fa';
import TasksImg from '../../assets/tasks/taks.svg';
import { toast } from 'sonner';
import { CiWarning } from "react-icons/ci";

type TaskType = {
  _id: string;
  task: string;
  date: string;
  completionStatus: boolean;
};



export const Task: React.FC<any> = ({ tasks, handleDelete, handleUpdate, filteredTasks, setFilteredTasks }) => {

  const [isFirst, setIsFirst] = useState<boolean>(false);

  const filterTasks = (filterType: string) => {
    switch (filterType) {
      case 'Today':
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        setFilteredTasks(
          tasks.filter((task: any) => new Date(task.date).setHours(0, 0, 0, 0) === today.getTime())
        );
        break;
      case 'completed':
        
        
        setFilteredTasks(tasks.filter((task: any) => task.completionStatus === true));
        console.log('the completeddata',filterTasks);
        break;
      case 'in-progress':
        setFilteredTasks(tasks.filter((task: any) => task.completionStatus === false));
        break;
      default:
        setFilteredTasks(tasks);
    }
    setIsFirst(true);
  };

  const formatDate = (dueDate: string) => {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const taskDate = new Date(new Date(dueDate).toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

    now.setHours(0, 0, 0, 0);
    taskDate.setHours(0, 0, 0, 0);

    const diffTime = now.getTime() - taskDate.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays > 0) return `${diffDays} days ago`;
    if (diffDays === -1) return 'Tomorrow';
    return `${Math.abs(diffDays)} days left`;
  };

  return (
    <div className='flex'>
      <div className='m-3 rounded-lg bg-gray-100 p-5 w-full md:w-3/4 max-h-[calc(100vh-2rem)] overflow-y-scroll'>
        <div className="mb-4">
          <select
            className="select select-secondary py-1 bg-white border-gray-500 border max-w-xs"
            onChange={(e) => filterTasks(e.target.value)}
            defaultValue="All Tasks"
          >
            <option value="all">All Tasks</option>
            <option value="Today">Today</option>
            <option value="completed">Completed</option>
            <option value="in-progress">In-progress</option>
          </select>
        </div>

        <div className='flex-grow'>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task: any) => (
              <div key={task._id} className="bg-white rounded-lg shadow-md p-4 mb-3 flex items-center">
                <div className="bg-purple-600 p-2 rounded-lg mr-4">
                  <FaTasks className="text-white text-xl" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-gray-800 font-medium">{task.task}</h3>
                  <p className="text-gray-500 text-sm">{formatDate(task.date)}</p>
                </div>
                <div className="text-gray-400 text-xl">
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="m-1">⋮</div>
                    <ul tabIndex={0} className="dropdown-content menu absolute bg-gray-100 text-black rounded-box z-[1] w-52 p-2 shadow-lg">

                      {task?.completionStatus ? (
                        <li onClick={() => toast.info('You already completed!')}><a>completed</a></li>
                      ) : (
                        <li onClick={() => handleUpdate(task._id)}><a>Complete</a></li>
                      )}

                      <li className='text-[red]' onClick={() => handleDelete(task._id)}><a>Delete</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='h-screen md:h-[10vh] flex justify-center md:items-center relative '>
               <div className='flex flex-col absolute md:relative top-[7vh] md:top-[20vh] justify-center items-center'>
              <CiWarning className='text-[10vh] text-gray-400 -z-9' />
              <small className='text-gray-400 text-semibold -z-9'>Please Add Tasks</small>
              </div>
              {/* <img src={Empty} alt="No tasks" className='w-[30%] hidden  h-[10%] md:w-[10%] md:h-[100%] relative md:top-[20vh] top-[10%]' /> */}
            </div>
          )}
        </div>
      </div>

      <div className='bg-purple-100 w-1/3 hidden md:block m-3 rounded-lg shadow-sm flex justify-center'>
        <img src={TasksImg} alt="Tasks" />
        <button className='bg-gradient-to-t from-purple-500 to-purple-800 rounded-full py-2 px-3 relative bottom-5 left-10 text-white'>
          <small>Learn more</small>
        </button>
      </div>
    </div>
  );
};
