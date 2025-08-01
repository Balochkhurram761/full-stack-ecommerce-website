import React from "react";
import { CiMail } from "react-icons/ci";

const HeroSection = () => {
  return (
    <div className="back bg-[#EFF2F4]">
      <div className="hero  p-6  w-[90%] mx-auto flex gap-5 justify-center items-center flex-col  ">
        <div className="heading flex flex-col items-center  ">
          <h1 className="font-semibold text-[20px] ">
            Subscribe on our newsletter
          </h1>
          <p className="text-[#606060] text-[16px] font-normal max-w-[550px]">
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>
        </div>
        <div className="inputs flex flex-col sm:flex-row gap-2 items-center">
          <div className="relative w-[280px] sm:w-[320px]">
            <CiMail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
