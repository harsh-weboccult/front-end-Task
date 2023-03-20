import React from "react";
import { Outlet } from "react-router-dom";

const Payroll = () => {
  return (
    <>
      <h1>Payroll</h1>
      <Outlet />
    </>
  );
};

export default Payroll;
