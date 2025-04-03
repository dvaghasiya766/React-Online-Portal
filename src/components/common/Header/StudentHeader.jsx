import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import "./StudentHeader.css";

const StudentHeader = () => {
  const { user, logout } = useAuth();

  return (
    <header className="student-header">
      <div className="header-content">
        <div className="search-bar">
          <input type="text" placeholder="Search courses..." />
          <button className="search-button">
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div className="user-actions">
          <div className="user-info">
            <span className="welcome-message">
              Welcome, {user?.firstName || "Student"}!
            </span>
          </div>
          <button className="logout-button" onClick={logout}>
            <i className="bi bi-box-arrow-right"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default StudentHeader;
