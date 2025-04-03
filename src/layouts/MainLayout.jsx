import React from "react";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer"; // Fixed import path
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
