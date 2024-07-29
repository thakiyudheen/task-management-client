import React from 'react'
import TaskManager from '../../component/tasks/calentder'
import BottomNav from '../../component/navigations/bottomNav'
import Sidebar from '../../component/navigations/Sidebar'
import { Task } from '../../component/tasks/task'

type Props = {}

export const Tasks = (props: Props) => {
  return (
    <div className="flex min-h-screen w-full justify-start  font-Poppins md:p-4 bg-white">
      <Sidebar />
      <div className='flex flex-col w-full'>

      <TaskManager />
      <Task/>
      </div>
      <BottomNav />
      
    </div>
  )
}