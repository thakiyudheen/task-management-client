import React from 'react'
import Progress from '../common/Prograss'
import TasksImg from '../../assets/tasks/taks.svg'

type Props = {}

export const Task = (props: Props) => {
  return (
    <div className='flex'>
    <div className='m-3 rounded-lg bg-gray-100 p-5 w-full md:w-3/4'>
        <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Tasks</h2>
        <select className=" p-2 border rounded-lg text-gray-600 px-3">
          <option>Completed</option>
          <option>In Progress</option>
          <option>Pending</option>
        </select>
      </div>
      <div>
     
        {['Design Changes'].map((task, index) => (
           <Progress/>
        ))}
      </div>

    </div>
    <div className='bg-purple-100 w-1/3 hidden md:block  m-3 rounded-lg shadow-sm flex justify-center'>
        <img src={TasksImg} alt="" />
        <button className='bg-gradient-to-t from-purple-500 to-purple-800 rounded-full py-2 px-3 relative bottom-5 left-10 text-white'><small>Learn more</small></button>
    </div>
    </div>
  )
}