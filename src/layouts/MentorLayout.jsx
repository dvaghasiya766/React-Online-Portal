import React from "react";
import MentorSidebar from "../components/common/Sidebar/MentorSidebar";
import MentorHeader from "../components/common/Header/MentorHeader";
import "./MentorLayout.css";

const MentorLayout = ({ children }) => {
  return (
    <div className="mentor-layout">
      <MentorSidebar />
      <div className="mentor-main-content">
        <MentorHeader />
        <div className="mentor-content-container">{children}</div>
      </div>
    </div>
  );
};

export default MentorLayout;
