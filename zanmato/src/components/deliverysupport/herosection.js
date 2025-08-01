import React from "react";

const Herosection = () => {
  return (
    <div className="cards grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 bg-[#F5F5F5] w-[100%] px-3 py-7 ">
      <div className="card flex items-center gap-3 ">
        <div className="img border-[1px] bg-gray-300 p-3 rounded-full">
          <img
            src={require("../../assets/assets/payment/🔹Icon Color (1).png")}
            alt=""
          />
        </div>
        <div className="cardbody">
          <h1>Scure payment</h1>
          <p className="text-[#A9ACB0]">Have you ever finally just</p>
        </div>
      </div>
      <div className="card flex items-center gap-3 ">
        <div className="img border-[1px] bg-gray-300 p-3 rounded-full">
          <img
            src={require("../../assets/assets/payment/🔹Icon Color.png")}
            alt=""
          />
        </div>
        <div className="cardbody">
          <h1>Customer Support</h1>
          <p className="text-[#A9ACB0]">Have you ever finally just</p>
        </div>
      </div>
      <div className="card flex items-center gap-3 ">
        <div className="img border-[1px] bg-gray-300 p-3 rounded-full">
          <img
            src={require("../../assets/assets/payment/🔹 Icon Color.png")}
            alt=""
          />
        </div>
        <div className="cardbody">
          <h1>Fee delivery</h1>
          <p className="text-[#A9ACB0]">Have you ever finally just</p>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
