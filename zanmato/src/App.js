import React from "react";
import { Route, Routes } from "react-router-dom";

// Layouts
import MainLayout from "./components/mainlayout/MainLayout";
import { AdminLayouts } from "./dashboard/layouts/adminlayouts";

// Pages
import Home from "./pages/Home";
import Login from "./components/login/Login";
import Cart from "./components/cart/cart";
import Dashboard from "./dashboard/pages/Dashboard";
import Product from "./dashboard/pages/product";

// Auth
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import SavedHeart from "./components/heart/Heart";
import Category from "./pages/Category";
import ProductUiDesc from "./components/productUiDesc/ProductUiDesc";

const App = () => {
  return (
    <Routes>
      {/* ✅ USER-FACING ROUTES WRAPPED IN MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="heartsaved" element={<SavedHeart />} />
        <Route path="/:products" element={<Category/>} />
        <Route path="/:products/:id" element={<ProductUiDesc/>} />
      </Route>

      {/* ✅ ADMIN ROUTES WRAPPED IN AdminLayouts */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminLayouts />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Product />} />
      </Route>
    </Routes>
  );
};

export default App;
