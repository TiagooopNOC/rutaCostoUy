import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";

const Layout = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <main>
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
