import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const ContentservicesList = ({ contentServices }) => {
  return (
    <>
      {/* {contentServices &&
        contentServices.map((content_services, keyContent) => {
          return (
            <div key={content_services.id || keyContent} className="my-[30px]">
              <div className="mb-[10px]">
                <h3 className="text-center">{content_services.title}</h3>
                <p className="text-[#b44b22] text-[20px] font-[500] text-center">
                  {content_services.description}
                </p>
              </div>
              <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <div className="grid grid-cols-4 gap-4">
                  {content_services?.image_detail?.map((item, key) => {
                    return (
                      <SwiperSlide key={item.id || key}>
                        <img
                          className="rounded-tl-[10px] rounded-tr-[10px]"
                          src={
                            import.meta.env.VITE_URL_BE +
                            item?.image?.data?.attributes?.url
                          }
                          alt=""
                          width="100%"
                        />
                        <div className="flex justify-center bg-[#b44b22] rounded-bl-[10px] rounded-br-[10px]">
                          <h4 className="p-[5px]">{item?.name}</h4>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </div>
              </Swiper>
            </div>
          );
        })} */}

      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://lotusarchvn.com/images/tk-chungcu.jpg"
            width="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://lotusarchvn.com/images/tk-chungcu.jpg"
            width="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://lotusarchvn.com/images/tk-chungcu.jpg"
            width="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://lotusarchvn.com/images/tk-chungcu.jpg"
            width="100%"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ContentservicesList;
