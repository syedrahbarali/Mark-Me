import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <main className="px-4">
        <Outlet />
      </main>
      {/* <Fooeter /> */}
    </div>
  );
};

export default Layout;
