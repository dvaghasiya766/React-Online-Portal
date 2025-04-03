import React from "react";
import InstructorSidebar from "../components/common/Sidebar/InstructorSidebar";
import InstructorHeader from "../components/common/Header/InstructorHeader";
import "./InstructorLayout.css";

const InstructorLayout = ({ children }) => {
  return (
    <div className="instructor-layout">
      <InstructorSidebar />
      <div className="instructor-main-content">
        <InstructorHeader />
        <main className="instructor-content">{children}</main>
      </div>
    </div>
  );
};

export default InstructorLayout;
