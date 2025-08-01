import React, { useEffect, useState } from "react";
import axios from "axios";

const HeroSection2 = () => {
  const [Productlist, setProuctlist] = useState([]);

  const getproduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/auth/getdeal"
      );
      setProuctlist(response.data.ProductUser);
    } catch (error) {
      console.log("server Error");
    }
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <div className="back bg-[#F7FAFC] py-5 hidden sm:hidden md:block">
      <div className="herosection flex flex-col lg:flex-row w-[90%] mx-auto cursor-pointer">
        <div className="leftsection w lg:w-[30%] relative">
          <div className="log w-full h-full">
            <img
              className="w-full h-full hidden md:hidden lg:block lg:object-cover min-h-[300px]"
              src={require("../../assets/assets/Image/backgrounds/image 98.png")}
              alt=""
            />
          </div>
          <div className="body relative md:relative lg:absolute top-0 left-0 p-5 flex flex-col items-start gap-2">
            <h1 className="text-[20px] font-semibold max-w-[200px]">
              Consumer electronics and gadgets
            </h1>
            <button className="text-[16px] hidden md:hidden lg:block font-medium border-white bg-white p-2 border-1 rounded-md outline-none">
              Source now
            </button>
          </div>
        </div>

        <div className="rightsection flex flex-col gap-2 w-[100%]">
          <div className="w-full h-full">
            <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-full">
              {Productlist.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="card bg-white flex gap-9 p-4 border-1 border-gray-50"
                  >
                    <div className="body">
                      <h1 className="text-[16px]">{item.type}</h1>
                      <p className="text-[#8B96A5] text-[13px] max-w-[50px]">
                        From USD {item.price}
                      </p>
                    </div>
                    <div className="image  flex items-center">
                      <img
                        className="w-[77.96px] h-[77.08px] object-cover"
                        src={`http://localhost:5000/${item.images[0]}`}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button className="text-[16px] block md:block lg:hidden w-[20%] font-medium border-white bg-white p-2 border-1 rounded-md outline-none">
            Source now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
