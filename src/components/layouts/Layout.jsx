import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="w-screen ">
      <Navbar />
      <main className="px-4 md:p-0 w-full h-[calc(100vh-64px)] mt-[64px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
