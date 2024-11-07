import React from "react";
import Nav from "./navBar/Nav";
import Footer from "./Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
export default function Root() {
  const locHome = useLocation();
  return (
    <div className={` ${locHome.pathname === "/" ? "m-3" : ""}`}>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
}
