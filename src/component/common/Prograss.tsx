import React from 'react';
import { FaTasks } from 'react-icons/fa';

const Progress = () => {
  const tasks = [
    { title: "My tasks", daysAgo: 2 },
    { title: "Team Tasks", daysAgo: 3 },
    { title: "Team Tasks3", daysAgo: 4 }
  ];

  return (
    <>
      {tasks.map((task, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-3 flex items-center">
          <div className="bg-purple-600 p-2 rounded-lg mr-4">
            <FaTasks className="text-white text-xl" />
          </div>
          <div className="flex-grow">
            <h3 className="text-gray-800 font-medium">{task.title}</h3>
            <p className="text-gray-500 text-sm">{task.daysAgo} days ago</p>
          </div>
          <div className="text-gray-400 text-xl">
            ⋮
          </div>
        </div>
      ))}
</>
  );
};

export default Progress;