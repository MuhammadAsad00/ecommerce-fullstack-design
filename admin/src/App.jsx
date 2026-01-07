import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AdminLayout from "../src/component/AdminLayout";
import UserManagement from "../src/component/UserManagement";
import ProductManagement from "../src/component/ProductManagement";
import ProductAdd from "../src/component/ProductAdd";
import EditProduct from "../src/component/EditProduct";
import OrderManagement from "../src/component/OrderManagement";
import { adminDataContext } from "./context/AdminContext";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  const { adminData } = useContext(adminDataContext);

  return (
    <>
     <Toaster position="top-right"/>
    <Routes>
      {/* Login Page → if already logged in, redirect to admin */}
      <Route
        path="/login"
        element={!adminData ? <Login /> : <Navigate to="/" replace />}
      />

      {/* Protected Admin Routes */}
      <Route
        path="/"
        element={adminData ? <AdminLayout /> : <Navigate to="/login" replace />}
      >
        <Route index element={<Home />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="products" element={<ProductManagement />} />
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="adproduct" element={<ProductAdd />} />
        <Route path="products/:id/edit" element={<EditProduct />} />
        <Route path="orders" element={<OrderManagement />} />
      </Route>

      {/* Fallback: redirect everything else */}
      <Route
        path="*"
        element={<Navigate to={adminData ? "/" : "/login"} replace />}
      />
    </Routes>
    </>
  );
};

export default App;
