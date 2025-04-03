import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import StudentRoutes from "./StudentRoutes";
import MentorRoutes from "./MentorRoutes";
import InstructorRoutes from "./InstructorRoutes";
import AdminRoutes from "./AdminRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes />} />
      <Route path="/student/*" element={<StudentRoutes />} />
      <Route path="/mentor/*" element={<MentorRoutes />} />
      <Route path="/instructor/*" element={<InstructorRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
