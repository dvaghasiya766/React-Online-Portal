import React from "react";
import AdminSidebar from "../components/common/Sidebar/AdminSidebar";
import AdminHeader from "../components/common/Header/AdminHeader";
import "./AdminLayout.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-main-content">
        <AdminHeader />
        <div className="admin-content-container">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
