import axios from "axios";
import { useState, useEffect } from "react";
import enpoint from "../enums/endpoint";
import { Tabs } from "antd";
import { Link } from "react-router-dom";
import "../assets/styles/home/tab.css";
// import TabSkeleton from "./loading/TabSkeleton";

const ContentMain = () => {
  const [data, setData] = useState([]);
  const [tabData, setTabData] = useState([]);
  const token = import.meta.env.VITE_TOKEN;
  const dataKHACBIET = data?.data?.attributes?.khacbiet;
  const searchData = {
    populate: [
      "tab_content.logo",
      "banner_baogia.image",
      "content_services.image_detail.image",
      "tab_content.images.image",
    ].toString(),
  };
  const searchParmas = new URLSearchParams(searchData).toString();
  const getContentMain = async () => {
    try {
      const response = await axios.get(`${enpoint.HOME}?${searchParmas}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      setData(response.data);
      setTabData(response.data?.data?.attributes?.tab_content);
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (key) => {
    console.log(key);
  };
  useEffect(() => {
    getContentMain();
  }, []);
  console.log(tabData);

  return (
    <>
      <div className="flex justify-center">
        <h3>{data && data?.data?.attributes?.title_home}</h3>
      </div>
      <div className="my-[20px] ">
        <Tabs
          onChange={onChange}
          type="card"
          items={
            data &&
            data?.data?.attributes?.tab_content?.map((item, key) => {
              const id = key + 1;
              return {
                label: (
                  <div>
                    <div className="flex justify-center">
                      <img
                        src={
                          import.meta.env.VITE_URL_BE +
                          item?.logo?.data?.attributes?.url
                        }
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center">{item.title}</div>
                  </div>
                ),
                key: id,
                children: (
                  <div className="grid grid-cols-3 gap-4">
                    {data?.data?.attributes?.title_home &&
                      item.images?.map((image, index) => {
                        return (
                          <div className="box-item" key={index}>
                            <img
                              className="h-[250px] md:h-[400px] rounded-[10px] "
                              src={
                                import.meta.env.VITE_URL_BE +
                                image?.image?.data?.attributes?.url
                              }
                              alt={image?.alt}
                              width="100%"
                            />
                          </div>
                        );
                      })}
                  </div>
                ),
              };
            })
          }
        />
        {/* {tabData.length > 0 ? (
          <div className="flex justify-center">
            <Tabs
              onChange={onChange}
              type="card"
              items={tabData?.map((value, key) => {
                const id = String(key + 1);
                return {
                  label: value?.title,
                  key: id,
                  children: `Content of Tab Pane ${id}`,
                };
              })}
            />
          </div>
        ) : (
          <TabSkeleton />
        )} */}
      </div>
      <div>
        <Link
          to={
            import.meta.env.VITE_URL_FE +
            data?.data?.attributes?.banner_baogia?.link
          }
        >
          <img
            src={
              import.meta.env.VITE_URL_BE +
              data?.data?.attributes?.banner_baogia?.image?.data?.attributes
                ?.url
            }
            alt={data?.data?.attributes?.banner_baogia?.alt}
            width="100%"
          />
        </Link>
      </div>
      {data &&
        data?.data?.attributes?.content_services?.map(
          (content_services, key) => {
            return (
              <div key={key} className="my-[30px]">
                <div className="mb-[10px]">
                  <h3 className="text-center">{content_services.title}</h3>
                  <p className="text-[#b44b22] text-[20px] font-[500] text-center">
                    {content_services.description}
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {data?.data?.attributes?.content_services &&
                    content_services?.image_detail?.map((item, key) => {
                      return (
                        <div key={key}>
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
                        </div>
                      );
                    })}
                </div>
                <div className="flex justify-center mt-[30px]">
                  <div className="bg-[#b44b22] w-[15px] h-[15px] rounded-[50%]"></div>
                </div>
              </div>
            );
          }
        )}
      <div dangerouslySetInnerHTML={{ __html: dataKHACBIET }}></div>
    </>
  );
};

export default ContentMain;
