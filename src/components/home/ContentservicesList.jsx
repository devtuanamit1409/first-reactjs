import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const ContentservicesList = ({ contentServices, dataKHACBIET }) => {
  console.log(contentServices);

  return (
    <>
      {contentServices &&
        contentServices.map((content_services, keyContent) => {
          return (
            <div key={content_services.id} className="my-[30px]">
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
                      <div key={item.id}>
                        <SwiperSlide>
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
                      </div>
                    );
                  })}
                </div>
              </Swiper>
            </div>
          );
        })}
      <div dangerouslySetInnerHTML={{ __html: dataKHACBIET }}></div>
    </>
  );
};

export default ContentservicesList;
