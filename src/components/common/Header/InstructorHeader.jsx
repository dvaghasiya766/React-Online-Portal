import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import "./InstructorHeader.css";

const InstructorHeader = () => {
  const { user, logout } = useAuth();

  return (
    <header className="instructor-header">
      <div className="header-content">
        <div className="header-title">
          <h2>Instructor Portal</h2>
        </div>
        <div className="header-actions">
          <div className="user-info">
            <span>Welcome, {user?.firstName || "Instructor"}</span>
          </div>
          <button onClick={logout} className="logout-btn">
            <i className="bi bi-box-arrow-right"></i> Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default InstructorHeader;
