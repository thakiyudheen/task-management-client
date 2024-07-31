import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const PublicRoute: React.FC = () => {
   const {data}= useSelector((state:RootState)=> state.user)

  return !data ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;
