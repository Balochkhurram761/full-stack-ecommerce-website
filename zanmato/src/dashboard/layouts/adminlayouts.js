import React from "react";
import Sliderbar from "../component/sliderbar/Sliderbar";
import Navbar from "../component/navbar/navbar";
import { Outlet } from "react-router-dom";

export const AdminLayouts = () => {
  return (
    <div className="flex w-full">
      <Sliderbar />

      <div className="main w-full ">
        <Navbar />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
