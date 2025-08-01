import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    user = null;
  }

  // If user not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If role is required and user doesn't match
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" replace />; // redirect unauthorized users to home
    // OR: show message instead:
    // return (
    //   <div className="text-center mt-10 text-red-500 text-lg font-bold">
    //     Only {requiredRole} can access this page
    //   </div>
    // );
  }

  // All good
  return children;
};

export default ProtectedRoute;
