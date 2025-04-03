import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import "./AdminHeader.css";

const AdminHeader = () => {
  const { logout } = useAuth();

  return (
    <header className="admin-header">
      <div className="admin-header-content">
        <div className="admin-header-title">Admin Dashboard</div>
        <button className="admin-logout-button" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
