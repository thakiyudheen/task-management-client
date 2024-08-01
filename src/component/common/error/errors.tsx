import React from 'react'
import Errors1 from '../../../assets/404/error404.svg'
import { useNavigate } from 'react-router-dom'

type Props = {}

function Errors ({}: Props) {
    const navigate= useNavigate()
  return (
    <div className='flex justify-center flex-col h-screen items-center bg-white'><img className='md:w-[20%] w-[50%]' src={Errors1} alt="" />
 
      <button onClick={()=>navigate('/')} className='bg-gradient-to-t to-purple-600 from-purple-800 px-4 py-2 text-white rounded-lg shadow-lg'>Back to home</button>
    </div>
  )
}

export default Errors