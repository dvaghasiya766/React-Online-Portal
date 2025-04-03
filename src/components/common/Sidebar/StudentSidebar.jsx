import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./StudentSidebar.css";

const StudentSidebar = () => {
  const navItems = [
    { path: "/student/dashboard", icon: "house-door", label: "Home" },
    { path: "/student/courses", icon: "journal-bookmark", label: "My Courses" },
    {
      path: "/student/all-courses",
      icon: "database",
      label: "Available Courses",
    },
    { path: "/student/practice", icon: "journal-text", label: "Practice" },
    {
      path: "/student/discussion",
      icon: "chat-left-text",
      label: "Discussion",
    },
    {
      path: "/student/assignments",
      icon: "clipboard-check",
      label: "Assignments",
    },
    { path: "/student/profile", icon: "person-circle", label: "Profile" },
  ];

  return (
    <aside className="student-sidebar" aria-label="Student navigation">
      <div className="sidebar-header">
        <img
          src="/assets/images/logo.png"
          alt="Nxt Wave"
          className="sidebar-logo"
          loading="lazy"
        />
      </div>
      <nav className="sidebar-nav">
        <ul role="menu">
          {navItems.map((item) => (
            <li key={item.path} role="none">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                role="menuitem"
                end
              >
                <span className="nav-icon" aria-hidden="true">
                  <i className={`bi bi-${item.icon}`}></i>
                </span>
                <span className="nav-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button
          className="help-button"
          aria-label="Get help"
          onClick={() => {
            /* Add help functionality */
          }}
        >
          <span className="help-icon" aria-hidden="true">
            <i className="bi bi-question-circle"></i>
          </span>
          <span className="help-label">Help</span>
        </button>
      </div>
    </aside>
  );
};

StudentSidebar.propTypes = {
  // Add any props validation if needed
};

export default StudentSidebar;
