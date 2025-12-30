import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { userDataContext } from "../context/UserContext";

const ProtectedRoute = () => {
  const { userData, loading } = useContext(userDataContext);

  // 1. Wait for the API to finish before making a decision
  if (loading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>; 
  }

  // 2. Only redirect if loading is finished and there is no user
  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;