import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";

const Section5Slider = () => {
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
    <div className="back bg-[#F7FAFC] block sm:hidden md:hidden lg:hidden">
      <div className="body w-[95%] sm:w-[90%] mx-auto flex flex-col items-start gap-4 py-4">
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
                <div className="card w-full  h-full bg-white flex flex-col sm:flex-col justify-center items-center gap-4 p-4 rounded-lg shadow border border-gray-200">
                  <div className="image ">
                    <img
                      className="h-[120px] object-cover"
                      src={`http://localhost:5000/${item.images[0]}`}
                      alt={item.productTitle}
                    />
                  </div>
                  <div className="body flex flex-col gap-2 items-center">
                    <h1 className="text-[16px] font-medium">
                      {item.productTitle}
                    </h1>
                    <p className=" text-[13px] border-2 border-[#EB001B] rounded-full p-1 px-2  text-[#EB001B] max-w-[50px]">
                      {item.off}%
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Section5Slider;
