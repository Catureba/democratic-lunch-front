import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SignUp from "../pages/SignUp";

export interface RoutersProps {}

export const Routers: React.FC<RoutersProps> = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrar" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
