import { useEffect, useState } from 'react'
import './App.css'
import SignUp from './page/auth/Signup'
import Login from './page/auth/Login'
import Home from './page/home/Home'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Tasks } from './page/tasks/tasks'
import { useAppDispatch, useAppSelector } from './hooks/hooke'
import { RootState } from './redux/store'
import { getUserAction } from './redux/store/actions/auth/getUserAction'
import PrivateRoute from './routes/privateRoutes'
import PublicRoute from './routes/publicRoutes'
import Errors from './component/common/error/errors'


function App() {
const {data}=useAppSelector((state:RootState)=>state.user)
const dispatch= useAppDispatch()
 console.log('thsi is are the data',data);
 
 useEffect(()=>{
     const getData = async ()=>{
       await dispatch(getUserAction())
    }
    getData()
 },[dispatch])
 
 return (
   <Routes>
     <Route path="/" element={<PrivateRoute />}>
       <Route path="/" element={<Home />} />
       <Route path="/notes" element={<Tasks />} />
     </Route>
     <Route path="/login" element={<PublicRoute />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/signup" element={<PublicRoute />}>
        <Route index element={<SignUp />} />
      </Route>
      <Route path='*' element={<Errors/>} />
   </Routes>
 );
}

export default App
