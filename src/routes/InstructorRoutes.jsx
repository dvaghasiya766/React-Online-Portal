import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import InstructorLayout from "../layouts/InstructorLayout";

const InstructorRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) return <div className="loading-spinner">Loading...</div>;

  return user?.role === "INSTRUCTOR" ? (
    <InstructorLayout>
      <Outlet />
    </InstructorLayout>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default InstructorRoutes;
