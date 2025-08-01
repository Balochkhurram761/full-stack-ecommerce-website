import React from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="back hidden lg:block">
      <div className="header w-[90%] mx-auto flex justify-between py-5">
        <div className="section1 flex  ">
          <ul className="flex  gap-6  ">
            <li>
              <Link
                className="text-[16px] font-medium flex gap-2 items-center"
                to="/products"
              >
                <IoMenu className="text-[24px]" />
                All Category
              </Link>
            </li>
            <li>
              <a className="text-[16px] font-medium" href="">
                Hot Offers
              </a>
            </li>
            <li>
              <a className="text-[16px] font-medium" href="">
                Gift boxes
              </a>
            </li>
            <li>
              <a className="text-[16px] font-medium" href="">
                Projects
              </a>
            </li>
            <li>
              <a className="text-[16px] font-medium" href="">
                Menu Items
              </a>
            </li>
            <li>
              <a
                className="text-[16px] font-medium flex gap-1 items-center"
                href=""
              >
                Help
                <img
                  className="w-full h-full"
                  src={require("../../assets/assets/Layout/Form/input-group/Icon/control/Vector.png")}
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="section2 flex items-center justify-center gap-10 text-[16px] font-medium ">
          <div className="drop flex gap-2 items-center ">
            English, USD{" "}
            <img
              className=""
              src={require("../../assets/assets/Layout/Form/input-group/Icon/control/Vector.png")}
              alt=""
            />
          </div>
          <div className="drop flex items-center gap-2 ">
            Ship to{" "}
            <img
              className="w-[22px] h-[16px]"
              src={require("../../assets/assets/Layout1/Image/flags/AE@2x.png")}
              alt=""
            />{" "}
            <img
              className=""
              src={require("../../assets/assets/Layout/Form/input-group/Icon/control/Vector.png")}
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
