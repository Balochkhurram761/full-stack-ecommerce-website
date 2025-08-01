import React, { useEffect, useState } from "react";
import axios from "axios";
import Section5Slider from "./SliderSection5";
const HeroSection5 = () => {
  const [Productlist, setProuctlist] = useState([]);

  const getproduct = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/getoff");
      setProuctlist(response.data.ProductUser);
    } catch (error) {
      console.log("server Error");
    }
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <div className="back py-3  bg-[#F7FAFC]">
      <div className="herosection grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 w-[90%] mx-auto cursor-pointer">
        <div className="section1 border-2  bg-white   flex gap-3 items-center sm:items-center md:items-center lg:items-center justify-between sm:justify-center md:justify-center lg:justify-center  flex-col sm:flex-col md:flex-col lg:flex-col px-4 py-8">
          <div className="body">
            <h1 className="font-semibold text-[20px]">Deals and offers</h1>
            <p className="text-[16px] text-[#8B96A5]">Hygiene equipments</p>
          </div>
          <div className="flex font-bold gap-2 text-white">
            <div className="days flex flex-col items-center justify-center rounded-md bg-[#606060] px-3 py-1">
              04 <span className="text-[12px] font-normal">Days</span>
            </div>
            <div className="hours flex flex-col  items-center justify-center rounded-md bg-[#606060] px-3 py-1">
              13 <span className="text-[12px] font-normal">Hours </span>
            </div>
            <div className="min flex flex-col  items-center justify-center rounded-md bg-[#606060] px-3 py-1">
              43 <span className="text-[12px] font-normal">Min</span>
            </div>
            <div className="sec flex flex-col  items-center justify-center rounded-md bg-[#606060] px-3 py-1">
              56 <span className="text-[12px] font-normal">Sec</span>
            </div>
          </div>
        </div>
        <div className="section2 hidden sm:block md:block lg:block col-span-3 ">
          <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-full">
            {Productlist.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card border-2 bg-white flex flex-col justify-center items-center gap-9 p-4 border-1 border-gray-50"
                >
                  <div className="image  flex items-center">
                    <img
                      className="max-w-[140] h-[140px] object-cover"
                      src={`http://localhost:5000/${item.images[0]}`}
                      alt=""
                    />
                  </div>
                  <div className="body flex items-center flex-col gap-2 ">
                    <h1 className="text-[16px] font-medium">{item.type}</h1>
                    <p className=" text-[13px] border-2 border-[#EB001B] rounded-full p-1 px-2  text-[#EB001B] max-w-[50px]">
                      -{item.off}%
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Section5Slider />
      </div>
    </div>
  );
};

export default HeroSection5;
