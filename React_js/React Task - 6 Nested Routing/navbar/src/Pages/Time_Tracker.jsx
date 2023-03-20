import React from "react";
import { Outlet } from "react-router-dom";
const Time_Tracker = () => {
  return (
    <>
      <h1>Time-Trakker</h1>
      <Outlet />
    </>
  );
};

export default Time_Tracker;
