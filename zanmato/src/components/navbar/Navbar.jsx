import React from "react";
import { Link } from "react-router-dom";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { carts } = useSelector((state) => state.cartSlice);
  const { savedItems } = useSelector((state) => state.cartSlice);

  return (
    <div className="back  hidden lg:block">
      <div className="navbar  flex justify-between items-center w-[90%] mx-auto  p-2">
        <div className="logo">
          <Link to="/">
            {" "}
            <img
              className="h-[40px]"
              src={require("../../assets/assets/Layout/Brand/logo-colored.png")}
              alt=""
            />
          </Link>
        </div>
        <div className="centersection flex w-full md:w-[60%] ">
          <div className="input md:w-[50%] ">
            <input
              type="text"
              className="w-full border-2 rounded-l-md border-[#0D6EFD] py-3 px-2 outline-none roudned-l-md"
              placeholder="Search"
              name=""
              id=""
            />
          </div>
          <div className="drop flex  flex-row w-[21%] px-2 items-center justify-between  border-2  pytext-[16px] border  border-[#0D6EFD] outline-none">
            All Category{" "}
            <img
              className="w-[10px] h-[10px] "
              src={require("../../assets/assets/Layout/Form/input-group/Icon/control/Vector.png")}
              alt=""
            />
          </div>
          <div className="btn">
            <button className="bg-[#0D6EFD] border px-7 py-3  border-2  rounded-r-md text-white text-[16px] border-[#0D6EFD] outline-none">
              Search{" "}
            </button>
          </div>
        </div>
        <div className="rightsection flex gap-4 justify-center items-center">
          <div className="icon flex flex-col items-center justify-center gap-1 ">
            <Link
              to="/login"
              className="flex flex-col items-center justify-center gap-1"
            >
              <img
                className="w-5 h-5"
                src={require("../../assets/assets/Layout/navbar/Vector.png")}
                alt=""
              />
              <h1 className="text-[12px]  text-[#8B96A5]">Profile</h1>
            </Link>
          </div>
          <div className="icon flex flex-col items-center justify-center gap-1">
            <img
              className="w-5 h-5"
              src={require("../../assets/assets/Layout/navbar/vector2.png")}
              alt=""
            />
            <h1 className="text-[12px] text-[#8B96A5]">Message</h1>
          </div>
          <div className="icon flex flex-col items-center gap-1">
            <Link className="flex flex-col items-center gap-1" to="/heartsaved">
              <Badge
                badgeContent={savedItems.length}
                color="primary"
                overlap="circular"
              >
                <img
                  className=""
                  src={require("../../assets/assets/Layout/navbar/vector3.png")}
                  alt=""
                />
              </Badge>
              <h1 className="text-[12px] text-[#8B96A5]">Orders</h1>
            </Link>
          </div>
          <div className="icon flex flex-col items-center gap-1">
            <Link className="flex flex-col items-center gap-1" to="/cart">
              <Badge
                badgeContent={carts.length}
                color="primary"
                overlap="circular"
              >
                <img
                  src={require("../../assets/assets/Layout/navbar/Vector4.png")}
                  alt=""
                />
              </Badge>
              <h1 className="text-[12px] text-[#8B96A5]">My Cart</h1>
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
