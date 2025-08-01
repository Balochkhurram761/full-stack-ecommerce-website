import React from "react";

const DiscountOffer = () => {
  return (
    <div className="bg w">
      <div className="img flex ">
        <img
          src={require("../../assets/assets/payment/Rectangle 177.png")}
          className=""
          alt=""
        />
        <img
          className=""
          src={require("../../assets/assets/payment/Rectangle 176.png")}
          alt=""
        />
      </div>
      <div className="mainbody">
        <div className="body">
          <h1 className="text-[24px] font-semibold">
            Super discount on more than 100 USD
          </h1>
          <p className="text-[#FFFFFF]">
            Have you ever finally just write dummy info
          </p>
        </div>
        <button className="bg-[#FF9017] font-medium">Show now</button>
      </div>
    </div>
  );
};

export default DiscountOffer;
