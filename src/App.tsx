import { useState } from 'react'
import './App.css'
import SignUp from './page/auth/Signup'
import Login from './page/auth/Login'
import Home from './page/home/Home'
import { Navigate, Route, Routes } from 'react-router-dom';
import TaskManager from './component/tasks/calentder'
import { Tasks } from './page/tasks/tasks'

function App() {


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
