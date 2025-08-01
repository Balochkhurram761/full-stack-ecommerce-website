import React from "react";
import { Link } from "react-router-dom"; // Link used for navigation instead of <a>
import { RxDashboard } from "react-icons/rx";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { GrHelpBook } from "react-icons/gr";
import { IoBagOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { FaHeadphonesSimple } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="div hidden lg:block">
      <div className="sidebar w-[250px]   h-[100vh] bg-white border-[1px] rounded-l-3xl  flex  flex-col  px-5 py-7 gap-7">
        <div className="img mx-auto ">
          <img
            src={require("../../../assets/assets/socail/Group (1).png")}
            alt=""
          />
        </div>

        <div className="navlinks">
          <ul className="flex leading-[50px] flex-col text-[#777] font-medium text-[16px]">
            <li>
              <Link to="/admin/dashboard" className="flex  items-center gap-2">
                <RxDashboard className="text-[20px]" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/products" className="flex  items-center gap-2">
                <IoBagOutline className="text-[20px]" />
                Products
              </Link>
            </li>
            <li>
              <Link to="/admin/customers" className="flex  items-center gap-2">
                {" "}
                <CiUser className="text-[20px]" />
                Customer
              </Link>
            </li>
            <li>
              <Link to="/admin/orders" className="flex  items-center gap-2">
                <MdOutlineProductionQuantityLimits className="text-[20px]" />
                Order
              </Link>
            </li>
            <li>
              <Link to="/admin/orders" className="flex items-center gap-2">
                <CiDeliveryTruck className="text-[20px]" />
                Shipping
              </Link>
            </li>
            <li>
              <Link to="/admin/orders" className="flex items-center gap-2">
                <MdOutlinePayment className="text-[20px]" />
                payments
              </Link>
            </li>

            <li>
              <Link to="/admin/help" className="flex  items-center gap-2">
                <GrHelpBook className="text-[20px]" />
                setting
              </Link>
            </li>
          </ul>
        </div>
        <div className="customersupport flex flex-col gap-3 font-semibold text-[16px]">
          <h1>Customer Support</h1>
          <p className="text-[#777] text-[13px]">
            Ask you query , place requests or important issues. Our support team
            will contact 24/7 to you.{" "}
          </p>
          <button className="flex  items-center gap-2 bg-[#C3DFFA] text-[#1A6BBA] justify-center p-3 rounded-lg">
            <FaHeadphonesSimple />
            Connect now
          </button>
        </div>
        <div className="term text-[#777] text-[13px] flex flex-col gap-1">
          <a href="">Terms & Services</a>
          <a href="">Privacy policy</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
