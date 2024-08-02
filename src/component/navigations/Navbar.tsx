import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from '../../hooks/hooke';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { logoutAction } from '../../redux/store/actions/auth/logoutAction';
import { IoMdLogOut } from "react-icons/io";
import Confirmation from '../common/confirmModal/Confirm';

type Props = {}

export const Navbar: React.FC = (props: Props) => {
  const [isModal,setModal]=useState<boolean>(false)
  const { data } = useAppSelector((state: RootState) => state.user)
  console.log('the real data', data);
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handlelogout = async () => {
    await dispatch(logoutAction())
  }
  const onCancel =()=>{
    setModal( false)
  }
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
      {data ? (
        <div className="flex items-center justify-center mr-[2vh]">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className=" m-1"><FaUserCircle className='text-[4vh] text-gray-500' /></div>

            <ul tabIndex={0} className="dropdown-content menu absolute bg-gray-100 text-black rounded-box z-[1] w-52 p-2 shadow-lg">
              <li onClick={() => setModal(true)} className='text-[red]'><a><IoMdLogOut /> &nbsp; logout</a></li>
            </ul>
          </div>
          {isModal&& <Confirmation onCancel={onCancel} onConfirm={handlelogout} message={'Are you sure to logout?'}/>}
         
        </div>
      ) : (
        <div className="flex items-center justify-center mr-[2vh]">
          <button onClick={() => navigate('/login')} className=' px-3 hover:bg-purple-700 py-1 rounded-lg hover:text-white text-purple-700 transition-all duration-300 border border-purple-700'><small>Login</small></button>
        </div>
      )}

    </header>
  )
}