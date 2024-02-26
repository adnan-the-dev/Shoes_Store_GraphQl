import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../main/Main";
import { Login } from "../loginPage/Login";
import { SignUp } from "../signUpPage/SignUp";
import AdminPenal from "../adminPanal/AdminPenal";
import Home from "../homePage/Home";
import { Navbar } from "../navbar/Navbar";
import {Private} from "../privatePage/Private";
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

        <Route
          path="/home"
          element={
            // <Private>
              <Home />
            // </Private>
          }
        />
        {/* <Route path="/adminLog" element={<AdminPenal />} />
        <Route
          path="/home"
          element={
            <Private>
              <Home />
            </Private>
          }
        />
        <Route
          path="/products/:code"
          element={
            <Private>
              <CategoryDetails />
            </Private>
          }
        />
        <Route
          path="/cart/:id"
          element={
            <Private>
              <AddToCartPage />
            </Private>
          }
        />
        <Route
          path="/cart"
          element={
            <Private>
              <CheckOutPage />
            </Private>
          }
        />
        <Route
          path="/pendingOrders"
          element={
            <Private>
              <PendingOrderPage />
            </Private>
          }
        />
        <Route
          path="/completeOrders"
          element={
            <Private>
              <CompleteOrders />
            </Private>
          }
        /> */}
      </Routes>
    </>
  );
};
