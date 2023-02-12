import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../pages/Layout";
import LoginPage from "../pages/LoginPage";
import SignUp from "../pages/SignUp";

function Routers(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route index element={<LoginPage />} />
            <Route path="/cadastrar" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
