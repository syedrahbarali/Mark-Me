import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="w-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
