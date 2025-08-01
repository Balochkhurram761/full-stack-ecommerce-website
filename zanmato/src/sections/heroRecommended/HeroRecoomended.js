import axios from "axios";
import React, { useEffect, useState } from "react";
const HeroRecoomended = () => {
  const [Productlist, setProuctlist] = useState([]);

  const getproduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/auth/recommended"
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
    <div className="back bg-[#F7FAFC] hidden sm:block md:block  lg:block">
      <div className="herosection  w-[90%] mx-auto">
        <h1 className="font-semibold text-[24px]">Recommended Items</h1>
        <div className="cards grid grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
          {Productlist.map((item, index) => {
            return (
              <div className="card flex  flex-col border-white  border-2 rounded-lg p-1 bg-white">
                <div className="mx-auto">
                  <a href="">
                    <img
                      className="h-[170px]"
                      src={`http://localhost:5000/${item.images[0]}`}
                      alt=""
                    />
                  </a>
                </div>
                <div className="heading flex flex-col p-3 ">
                  <p className="font-medium text-[16px]">${item.price}</p>
                  <a href="">
                    <h1 className="text-[#8B96A5] text-[16px] ">
                      {item.title}
                    </h1>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroRecoomended;
