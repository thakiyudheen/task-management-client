import { useEffect, useState } from 'react'
import './App.css'
import SignUp from './page/auth/Signup'
import Login from './page/auth/Login'
import Home from './page/home/Home'
import { Navigate, Route, Routes } from 'react-router-dom';
import TaskManager from './component/tasks/calentder'
import { Tasks } from './page/tasks/tasks'
import { useAppDispatch, useAppSelector } from './hooks/hooke'
import { RootState } from './redux/store'
import { getUserAction } from './redux/store/actions/auth/getUserAction'

function App() {
const {data}=useAppSelector((state:RootState)=>state.user)
const dispatch= useAppDispatch()
 console.log('thsi is are the data',data);
 
 useEffect(()=>{
     const getData = async ()=>{
       await dispatch(getUserAction())
    }
 },[dispatch])
 
  return (
  
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/notes" element={<Tasks/>} />
      </Routes>

  )
}

export default App
