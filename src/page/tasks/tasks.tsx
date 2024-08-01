import React, { useEffect, useState } from 'react'
import {TaskManager} from '../../component/tasks/calentder'
import BottomNav from '../../component/navigations/bottomNav'
import Sidebar from '../../component/navigations/Sidebar'
import { Task } from '../../component/tasks/task'
import AddTaskModal from '../../component/tasks/addTask'
import { useAppDispatch, useAppSelector } from '../../hooks/hooke'
import { createTaskAction } from '../../redux/store/actions/tasks/createTaskAction'
import { RootState } from '../../redux/store'
import { toast } from 'sonner'
import { getTaskAction } from '../../redux/store/actions/tasks/getTaskAction'
import { deleteTaskAction } from '../../redux/store/actions/tasks/deleteTaskAction'
import { updateTaskAction } from '../../redux/store/actions/tasks/updateTaskAction'
import LoadingIndicator from '../../component/common/loding/loadingIndicator'

type Props = {}

export const Tasks = (props: Props) => {
  const {data}= useAppSelector((state:RootState)=> state.user)
  const [isOpen, setOpen]=useState<any>(false)
  const [isLoading,setLoading]=useState<boolean>(false)
  const dispatch = useAppDispatch()
  const [tasks,setTasks]=useState<any>(null)
  const [filteredTasks, setFilteredTasks] = useState<any>([]);

  const isClose:any = () =>{
     setOpen(false)
  }

  const onAdd=async (datas:any)=>{
  
    datas.userId=data._id
    console.log('the add data',data)
    console.log(data);
    setLoading(true)
    const response = await dispatch(createTaskAction(datas))
    if(response.payload.success){
      setTasks((pretask:any)=> [...pretask,datas])
      setFilteredTasks((pretask:any)=> [...pretask,datas])
      setLoading(false)
      toast.success('Added successfully!')
    }


  }
  const handleToday = () => {
    console.log('its handle today ');
    
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
  
    setTasks((prev: any) => prev.filter((el: any) => {
      const taskDate = new Date(el.date);
      taskDate.setHours(0, 0, 0, 0); 
      return taskDate.getTime() === today.getTime();
    }));
  };

  
  const handleDelete = async(data:any) =>{
    setLoading(true)
    await dispatch(deleteTaskAction(data))
    setTasks(((pre:any)=> pre.filter((el:any)=>el._id!=data)))
    setFilteredTasks(((pre:any)=> pre.filter((el:any)=>el._id!=data)))
    setLoading(false)
    toast.success('Task deleted successfully!')
  } 
  const handleUpdate = async (datass: any) => {
    setLoading(true);
    const datas = { _id: datass, completionStatus: true ,userId:data._id};
    
    try {
      
      const response = await dispatch(updateTaskAction(datas));
      
      setTasks((prev: any) => prev.map((el: any) => 
        el._id === data._id ? { ...el, completionStatus: true } : el
      ));
      setFilteredTasks((prev: any) => prev.map((el: any) => 
        el._id === data._id ? { ...el, completionStatus: true } : el
      ))
      
      toast.success('Task updated successfully!');
    } catch (error) {
      console.error('Error updating task:', error);
      toast.error('Failed to update task');
    } finally {
      setLoading(false);
    }
  };
  useEffect(()=>{
     const getTask =async ()=>{
      setLoading(true)
      const response= await dispatch(getTaskAction({userId:data._id}))
      console.log('the fretched data',response);
      if(response.payload.success){
        setTasks(response.payload.data)
        setFilteredTasks(response.payload.data)
        setLoading(false)
      }
     }
     getTask()
  },[dispatch])

  return (
    <div className="flex  w-full justify-start min-h-screen  font-Poppins md:p-4 bg-white">
      <Sidebar />
      {isLoading&&<LoadingIndicator/>}
      <div className='flex flex-col w-full'>
      <AddTaskModal isOpen={isOpen} onClose={isClose} onAdd={onAdd}/>
      <TaskManager setOpen={setOpen}/>
      <Task tasks={tasks} handleDelete={handleDelete } handleUpdate={handleUpdate}
      setFilteredTasks={setFilteredTasks}
      filteredTasks={filteredTasks}
      />
      </div>
      <BottomNav />
      
    </div>
  )
}