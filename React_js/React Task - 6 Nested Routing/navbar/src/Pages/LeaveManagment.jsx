import React from "react";
import { Outlet } from "react-router-dom";

const LeaveManagment = () => {
  return (
    <>
      <h1>Leave ManageMent</h1>
      <Outlet />
    </>
  );
};

export default LeaveManagment;
