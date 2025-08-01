import React from "react";
import { footerSections } from "../../constants/footerData";

const Footer = () => {
  return (
    <div className="mainfooter">
      <div className="footer w-[90%] p-3  mx-auto  grid gap-y-5 grid-cols-1 sm:grid-cols-2   md:grid-cols-3  sm:gap-20 lg:grid-cols-7 md:gap-10 lg:gap-2 justity-items-start  Lg:justify-items-start Lg:justify-items-start lg:justify-items-start">
        <div className="section flex flex-col gap-3 sm:col-span-1 lg:col-span-2  ">
          <div className="logo w-[100%]">
            <img
              src={require("../../assets/assets/Layout/Brand/logo-colored.png")}
              alt=""
            />
          </div>
          <h1 className="text-[#505050] text-[16px] capitalize max-w-[460px] sm:max-w-[300px] md:max-w-[300px] lg:max-w-[300px]">
            Best information about the company gies here but now lorem ipsum is
          </h1>
          <div className="social flex gap-2 ">
            <a href="">
              <img
                src={require("../../assets/assets/socail/facebook3.png")}
                alt=""
              />
            </a>
            <a href="">
              <img
                src={require("../../assets/assets/socail/twitter3.png")}
                alt=""
              />
            </a>
            <a href="">
              <img
                src={require("../../assets/assets/socail/linkedin3.png")}
                alt=""
              />
            </a>
            <a href="">
              <img
                src={require("../../assets/assets/socail/instagram3.png")}
                alt=""
              />
            </a>
            <a href="">
              <img
                src={require("../../assets/assets/socail/youtube3.png")}
                alt=""
              />
            </a>
          </div>
        </div>

        {footerSections.map((item, index) => {
          return (
            <div className="section flex  flex-col gap-2">
              <h1 className=" capitalize font-semibold text-[18px] ">
                {item.title}
              </h1>
              {item.links.map((link, i) => {
                return (
                  <div className="link flex flex-col gap-2  text-[16px] text-[#8B96A5] capitalize">
                    <a href="">{link}</a>
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="section flex  flex-col gap-2">
          <h1 className=" capitalize font-medium text-[18px] ">get app</h1>

          <div className="link flex flex-col gap-2  text-[16px] text-[#8B96A5] capitalize w-[100%]">
            <a href="">
              {" "}
              <img
                src={require("../../assets/assets/Layout/Misc/Group.png")}
                alt=""
              />
            </a>
            <a href="">
              {" "}
              <img
                src={require("../../assets/assets/Layout/Misc/market-button.png")}
                alt=""
              />
            </a>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="back bg-[#DEE2E7]">
        <div className="footer2 p-4 flex justify-between w-[90%] mx-auto text-[17px] gap-4 sm:gap-2 md:gap-1 lg:gap-1 text-[#606060] flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap">
          <p className="">© 2023 Ecommerce. </p>
          <div className="drop flex  justify-center cursor-pointer items-center gap-1 ">
            <div className="logo flex gap-3">
              <img
                src={require("../../assets/assets/Layout1/Image/flags/US@2x.png")}
                alt=""
              />{" "}
              English{" "}
            </div>
            <img
              src={require("../../assets/assets/Layout/Form/input-group/Icon/control/Vector2.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
