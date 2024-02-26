import React from "react";
import { Navigate } from "react-router-dom";

export const Private = ({ children }) => {
  const userData = localStorage.getItem("Users");
  const user = JSON.parse(userData);

  return user ? children : <Navigate to="/" />;
};
