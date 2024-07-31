import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../redux/store';


const PrivateRoute: React.FC = () => {
  const {data}= useSelector((state:RootState)=> state.user)

  return data ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
