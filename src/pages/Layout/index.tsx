import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

function Layout(): JSX.Element {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Layout;
