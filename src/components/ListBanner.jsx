import React from "react";
import { useEffect, useState } from "react";
import enpoint from "../enums/endpoint";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ListBanner = () => {
  const [data, setData] = useState([]);
  const token = import.meta.env.VITE_TOKEN;
  const searchData = {
    populate: ["slide_banner.image"].toString(),
  };
  const searchParmas = new URLSearchParams(searchData).toString();
  const getListBanner = async () => {
    try {
      const response = await axios.get(`${enpoint.HOME}?${searchParmas}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getListBanner();
  }, []);
  // console.log(data);
  // console.log(data?.data?.attributes?.slide_banner);
  return (
    <>
      <div className="border-t-[1px] border-[#d08000]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data &&
            data?.data?.attributes?.slide_banner?.map((item) => {
              return (
                <>
                  <SwiperSlide>
                    <img
                      className="my-[20px]"
                      src={
                        import.meta.env.VITE_URL_BE +
                        item.image?.data?.attributes?.url
                      }
                      alt={item.alt}
                      width="100%"
                    />
                  </SwiperSlide>
                </>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

export default ListBanner;
