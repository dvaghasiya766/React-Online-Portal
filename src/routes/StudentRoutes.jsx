import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import StudentLayout from '../layouts/StudentLayout';

const StudentRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return user?.role === 'STUDENT' ? (
    <StudentLayout>
      <Outlet />
    </StudentLayout>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default StudentRoutes;
