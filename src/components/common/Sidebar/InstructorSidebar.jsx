import React from "react";
import { NavLink } from "react-router-dom";
import "./InstructorSidebar.css";

const InstructorSidebar = () => {
  const navItems = [
    { path: "/instructor/dashboard", icon: "speedometer2", label: "Dashboard" },
    {
      path: "/instructor/courses",
      icon: "journal-bookmark",
      label: "My Courses",
    },
    { path: "/instructor/students", icon: "people", label: "Students" },
    {
      path: "/instructor/assignments",
      icon: "journal-check",
      label: "Assignments",
    },
    { path: "/instructor/grades", icon: "clipboard-data", label: "Grades" },
    { path: "/instructor/resources", icon: "folder", label: "Resources" },
  ];

  return (
    <aside className="instructor-sidebar">
      <div className="sidebar-header">
        <img
          src="/assets/images/logo-instructor.png"
          alt="Instructor Portal"
          className="sidebar-logo"
        />
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <i className={`bi bi-${item.icon}`}></i>
                <span className="nav-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default InstructorSidebar;
