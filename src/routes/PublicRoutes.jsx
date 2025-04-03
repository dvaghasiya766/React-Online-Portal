import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Login from "../pages/auth/Login"; // Relative path
import Register from "../pages/auth/Register";

const PublicRoutes = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={`/${user.role.toLowerCase()}/dashboard`} replace />;
  }

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </MainLayout>
  );
};

export default PublicRoutes;
