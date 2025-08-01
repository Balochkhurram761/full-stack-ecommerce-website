import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import MobileNavbar from "../mobileNavbar/MobileNavbar";
import HeroSection from "../../sections/heroNewletter/HeroSection";
import Header from "../header/Header";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <Header />
      <Outlet />
    
      <Footer />
    </>
  );
};

export default MainLayout;
