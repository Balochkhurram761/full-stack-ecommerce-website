import React, { useState } from "react";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { FaBell } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { CiMenuFries } from "react-icons/ci";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [navbarMobile, setnavbarMobile] = useState(false);
  const handlenavbar = () => {
    setnavbarMobile(!navbarMobile);
  };
  const onclose = () => {
    setnavbarMobile(false);
  };
  return (
    <>
      {" "}
      <div className="back z-10 bg-[#F8F7Fc] w-full relative">
        <div className="navbar flex relative justify-between  gap-6 items-center w-full  px-6 py-2">
          <div className="revenue flex items-center gap-6 ">
            <div className="menubar md:block lg:hidden cursor-pointer text-[20px] outline-none border-none" onClick={handlenavbar}>
              <CiMenuFries />
            </div>
            <div className="totaleran">
              <h1>Total Revenue</h1>
              <p className="font-semibold text-[24px] flex flex-col lg:flex-row gap-1">
                $45,365.00{" "}
                <div className="wrap flex flex-row gap-2">
                  {" "}
                  <span className="text-[14px] text-[red] flex items-center gap-1">
                    <MdOutlineArrowDropDown />
                    $1.294
                  </span>{" "}
                  <span className="text-[14px] text-[green] flex items-center gap-1">
                    <MdOutlineArrowDropUp />
                    $1.294
                  </span>{" "}
                </div>
              </p>
            </div>
          </div>
          {/* <div className="inputs relative flex-grow block w-full max-w-[500px]">
            <input
              type="text"
              className="border-[1px] w-full hidden md:block lg:block outline-none px-6 py-2 text-[#777] rounded-lg"
              placeholder="Search"
            />
            <CiSearch className="absolute top-0 transform hidden md:block lg:block translate-x-1 translate-y-3 text-[18px] text-[#777]" />
          </div> */}

          <div className="wrap  hidden md:block lg:block">
            <div className="message flex items-center gap-5 ">
              <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
              </Badge>

              <Badge badgeContent={4} color="primary">
                <FaBell color="action" className="text-[20px]" />
              </Badge>
              <div className="image">
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Stack>
              </div>
            </div>
          </div>
          <div className="search block md:hidden lg:hidden">
            <div className="flex flex-row gap-3 items-center">
              <div className="image">
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Stack>
              </div>
              <div className="p-2 rounded-full bg-[#BDBDBD] border">
                <CiSearch className="text-[20px] text-[white]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileNavbar onclose={onclose} menu={navbarMobile} />
    </>
  );
};

export default Navbar;
