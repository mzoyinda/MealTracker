import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoute = ({redirectPath = '/sign-in' }) => {
  const user = useSelector((state) => state.user);
  const {userInfo } = user;

  if (!userInfo) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;