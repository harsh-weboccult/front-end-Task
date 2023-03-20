import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const Wrapper = () => {
  return (
    <>
      <Navbar />

      <div className="row g-0">
        <div className="col-4 left"></div>
        <div className="col-6 right">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Wrapper;
