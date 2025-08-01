import React from "react";
import { extraService } from "../../constants/extraService";

const HeroServices = () => {
  return (
    <div className="back  bg-[#F7FAFC]">
      <div className="hero w-[90%] flex flex-col gap-5 mx-auto p-3 ">
        <h1 className="font-semibold text-[24px]">Our Extra Services</h1>
        <div className="cards grid grid-cols-1 gap-2   sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
          {extraService.map((item, index) => {
            return (
              <div className="card flex flex-col gap-3 bg-white rounded ">
                <div className="image relative ">
                  <img className="w-full" src={item.image} alt="" />
                  <img
                    className="absolute bg-[#D1E7FF]  border-white border-2  rounded-full bottom-[-20px]   p-3 right-4"
                    src={item.icon}
                    alt=""
                  />
                </div>
                <div className="head p-4">
                  <h1 className="text-[16px] font-medium max-w-[280px]">
                    {item.title}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroServices;
