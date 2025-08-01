import React from 'react';

const HeroSection1 = () => {
  return (
    <div className="bg-[#F7FAFC] py-10">
      <div className="relative w-[95%] lg:w-[90%] mx-auto">
       
        <div className="w-full">
          <img
            className="w-full object-cover rounded-md"
            src={require('../../assets/assets/Image/backgrounds/Group 982.png')}
            alt="background"
          />
        </div>

       
        <div className="absolute top-[-20px] left-0 w-full h-full flex justify-between items-start px-6 py-7 sm:py-10 md:py-10 lg:py-10">
          
        
          <div className="text-white sm:max-w-[340px] md:max-w-[370px] lg:max-w-[420px] space-y-4 translate-x-6">
            <h1 className="text-[20px] sm:text-[28px] md:text-[32px] lg:text-[32px] font-semibold sm:leading-10 leading-7">
              An easy way to send requests to all suppliers
            </h1>
            <p className="leading-6  text-[14px] hidden md:hidden lg:block ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
            </p>
            <button className="bg-blue-600 w-[130px] block md:block lg:hidden text-white  py-2 rounded-md hover:bg-blue-700 transition">
              Send inquiry
            </button>
          </div>

         
          <div className="bg-white text-black p-5 rounded-md hidden shadow-lg md:hidden w-[320px] lg:block  space-y-4">
            <h2 className="font-semibold text-lg">Send quote to suppliers</h2>

            <div>
              <label className="block mb-1 text-sm font-medium border border-gray-300  p-2 text-gray-600">What item you need?</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows="3"
                placeholder="Type more details"
              ></textarea>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Quantity"
              />
              <div className="flex items-center gap-1 px-3 border border-gray-300 rounded-md">
                Pcs
                <img
                  className="w-3"
                  src={require('../../assets/assets/Layout/Form/input-group/Icon/control/Vector.png')}
                  alt="dropdown"
                />
              </div>
            </div>

            <button className="bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700 transition">
              Send inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
