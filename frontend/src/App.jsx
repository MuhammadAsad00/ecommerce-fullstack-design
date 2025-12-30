import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductDetailsPage from "./pages/ProductsDetailsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./components/layout/Layout.jsx";
import PublicRoute from "./routes/PublicRoute.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />

          {/* PUBLIC ONLY: If logged in, users CANNOT reach these */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            {/* You can add /register here later */}
          </Route>

          {/* PROTECTED: If NOT logged in, users CANNOT reach these */}
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<CartPage />} />
            {/* You can add /profile or /checkout here later */}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
