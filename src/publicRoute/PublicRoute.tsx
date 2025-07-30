import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = Cookies.get("token");
  return token ? <Navigate to="/" replace /> : <>{children}</>;
};

export default PublicRoute;
