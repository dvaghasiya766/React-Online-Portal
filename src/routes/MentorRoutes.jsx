import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import MentorLayout from "../layouts/MentorLayout";

const MentorRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return user?.role === "MENTOR" ? (
    <MentorLayout>
      <Outlet />
    </MentorLayout>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default MentorRoutes;
