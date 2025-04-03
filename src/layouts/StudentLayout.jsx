import React from "react";
import StudentSidebar from "../components/common/Sidebar/StudentSidebar";
import StudentHeader from "../components/common/Header/StudentHeader";
import "./StudentLayout.css";

const StudentLayout = ({ children }) => {
  return (
    <div className="student-layout">
      <StudentSidebar />
      <div className="main-content">
        <StudentHeader />
        <div className="content-container">{children}</div>
      </div>
    </div>
  );
};

export default StudentLayout;
