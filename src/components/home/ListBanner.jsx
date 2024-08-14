import { useEffect, useState } from "react";
import enpoint from "../../enums/endpoint";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const ListBanner = ({ banner }) => {
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
          {banner &&
            banner.map((item, key) => {
              return (
                <SwiperSlide key={key}>
                  <a href={item.link || "/not-found-404"}>
                    <img
                      className="my-[20px]"
                      src={
                        import.meta.env.VITE_URL_BE +
                        item.image?.data?.attributes?.url
                      }
                      alt={item.alt}
                      width="100%"
                    />
                  </a>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

export default ListBanner;
