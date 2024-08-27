// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
const ListPartner = ({ dataListpartner }) => {
  return (
    <>
      <div className="my-[30px]">
        <h3 className="text-center">{dataListpartner.title}</h3>
        <div className="flex justify-center py-[20px]">
          <Swiper
            className="w-[95%]"
            slidesPerView={4}
            freeMode={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Autoplay]}
          >
            {dataListpartner.img_partner &&
              dataListpartner.img_partner.map((item, key) => {
                const UrlimgPartner = item.image?.data?.attributes?.url;
                return (
                  <SwiperSlide key={key} className="flex justify-center">
                    <img
                      className="w-[200px]"
                      src={import.meta.env.VITE_URL_BE + UrlimgPartner}
                      alt=""
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ListPartner;
