import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../main/Main";
import { Login } from "../loginPage/Login";
import { SignUp } from "../signUpPage/SignUp";
import AdminPenal from "../adminPanal/AdminPenal";
import Home from "../homePage/Home";
import { Navbar } from "../navbar/Navbar";
import { Private } from "../privatePage/Private";
import CategoryDetails from "../categoryDetailsPage/CategoryDetails";
import { AddToCartPage } from "../addToCartPage/AddToCartPage";
import { CheckOutPage } from "../checkOutPage/CheckOutPage";
import { PendingOrderPage } from "../pendingOrderPage/PendingOrderPage";
import { CompleteOrders } from "../completeOrders/CompleteOrders";
export const RoutesComponents = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<SignUp />} />

        <Route path="/adminLog" element={<AdminPenal />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/:code" element={<CategoryDetails />} />
        <Route path="/cart/:id" element={<AddToCartPage />} />
        <Route path="/cart" element={<CheckOutPage />} />
        <Route path="/pendingOrders" element={<PendingOrderPage />} />
        <Route path="/completeOrders" element={<CompleteOrders />} />
      </Routes>
    </>
  );
};
