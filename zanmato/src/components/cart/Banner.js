import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-[200px] rounded-lg">
      <img
        src={require("../../assets/assets/socail/Rectangle 176.png")}
        alt="Banner"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-3 pl-12">
        <div className="body">
          <h1 className="text-white text-xl sm:text-3xl font-semibold">
            Super discount on more than 100 USD
          </h1>
          <p className="text-white mt-2 max-w-lg">
            Have you ever finally just write dummy info
          </p>
        </div>
        <button className="mt-4 px-6 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition-all w-fit">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
