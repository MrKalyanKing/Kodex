import React from 'react';
import { Navigate } from 'react-router-dom';
import { useBlogs } from '../context/BlogContext';

const ProtectedRoute = ({ children, roleRequired }) => {
  const { user } = useBlogs();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (roleRequired && user.role !== roleRequired) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
