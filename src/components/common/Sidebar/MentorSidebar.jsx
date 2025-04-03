import React from "react";
import { NavLink } from "react-router-dom";
import "./MentorSidebar.css";

const MentorSidebar = () => {
  return (
    <aside className="mentor-sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/mentor/dashboard" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/mentor/students" activeClassName="active">
              My Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/mentor/sessions" activeClassName="active">
              Sessions
            </NavLink>
          </li>
          <li>
            <NavLink to="/mentor/resources" activeClassName="active">
              Resources
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default MentorSidebar;
