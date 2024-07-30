import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { useAppSelector } from '../../hooks/hooke';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

type Props = {}

export const Navbar:React.FC = (props: Props) => {
  const {data}=useAppSelector((state:RootState)=>state.user)
  console.log('the real data',data);
  const navigate = useNavigate()
  return (
    <header className="flex justify-between items-center md:p-0 px-4 py-2 ">
    <input
        type="text"
        placeholder="Search..."
        className={`
                px-4 py-2 
                border border-purple-200 
                bg-white
                rounded-full
                focus:outline-none
                transition-all duration-300 ease-in-out
                hidden md:block
            
            `}

    />
    
    <div className="flex items-center justify-center mr-[2vh] md:hidden">
        <RiMenu2Line className='text-[3vh] text-gray-500' />
    </div>
    {data?(
      <div className="flex items-center justify-center mr-[2vh]">
      <FaUserCircle className='text-[4vh] text-gray-500' />
  </div>
    ):(
      <div className="flex items-center justify-center mr-[2vh]">
      <button onClick={()=>navigate('/login')} className=' px-3 hover:bg-purple-700 py-1 rounded-lg hover:text-white text-purple-700 transition-all duration-300 border border-purple-700'><small>Login</small></button>
  </div>
    )}
    
</header>
  )
}