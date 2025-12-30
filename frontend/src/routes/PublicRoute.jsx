import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { userDataContext } from "../context/UserContext";

const PublicRoute = () => {
  const { userData, loading } = useContext(userDataContext);

  if (loading) return null; // Or a spinner

  // If already logged in, redirect to home
  if (userData) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;