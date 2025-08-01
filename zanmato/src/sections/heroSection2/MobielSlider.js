import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";

const MobielSlider = () => {
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
    <div className="back bg-[#F7FAFC] block md:hidden lg:hidden">
      <div className="body w-[95%] sm:w-[90%] mx-auto flex flex-col items-start gap-4 py-4">
        <h1 className="text-[20px] font-semibold max-w-[200px]">
          Consumer electronics and gadgets
        </h1>

        <div className="cards w-full">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2000 }}
            className="mySwiper !pb-10"
          >
            {Productlist.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card bg-white flex flex-col sm:flex-col justify-between items-center gap-4 p-4 rounded-lg shadow border border-gray-200">
                  <div className="image ">
                    <img
                      className=" w-full h-[150px] object-cover"
                      src={`http://localhost:5000/${item.images[0]}`}
                      alt={item.productTitle}
                    />
                  </div>
                  <div className="body">
                    <h1 className="text-[16px] font-semibold">{item.type}</h1>
                    <p className="text-[#8B96A5] text-[13px] max-w-[100px]">
                      From USD {item.price}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button className="text-[16px] font-medium bg-white p-2 rounded-md shadow border border-gray-200">
          Source now
        </button>
      </div>
    </div>
  );
};

export default MobielSlider;
