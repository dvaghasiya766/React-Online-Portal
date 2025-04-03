import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    // Implement login logic without navigation
    // Return success/failure instead
    return {
      success: true,
      user: {
        /* user data */
      },
    };
  };

  const logout = () => {
    setUser(null);
    // Don't navigate here - let components handle it
  };

  const register = async (userData) => {
    // Implement registration logic
    return {
      success: true,
      user: {
        /* user data */
      },
    };
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
