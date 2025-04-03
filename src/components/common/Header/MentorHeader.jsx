import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import "./MentorHeader.css";

const MentorHeader = () => {
  const { user, logout } = useAuth();

  return (
    <header className="mentor-header">
      <div className="mentor-header-content">
        <h2>Mentor Dashboard</h2>
        <div className="mentor-user-info">
          <span>Welcome, {user?.firstName || "Mentor"}</span>
          <button onClick={logout} className="mentor-logout-btn">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default MentorHeader;
