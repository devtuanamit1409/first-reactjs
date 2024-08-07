import axios from "axios";
import { useState, useEffect } from "react";
import enpoint from "../enums/endpoint";
import { Tabs } from "antd";
import { Link } from "react-router-dom";

const ContentMain = () => {
  const [data, setData] = useState([]);
  const token = import.meta.env.VITE_TOKEN;
  const searchData = {
    populate: [
      "tab_content.logo",
      "banner_baogia.image",
      "content_services.image_detail.image",
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
  console.log(data);

  return (
    <>
      <div className="flex justify-center">
        <h3>{data && data?.data?.attributes?.title_home}</h3>
      </div>
      <div>
        <Tabs
          onChange={onChange}
          type="card"
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
              label: `Tab ${id}`,
              key: id,
              children: `Content of Tab Pane ${id}`,
            };
          })}
        />
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
      <div>
        {data &&
          data?.data?.attributes?.content_services?.map((content_services) => {
            return (
              <>
                <div>
                  <h3>{content_services.title}</h3>
                  <p className="text-[#b44b22] text-[15px]">
                    {content_services.description}
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {data?.data?.attributes?.content_services &&
                    content_services?.image_detail?.map((item) => {
                      return (
                        <>
                          <div>
                            <img
                              src={
                                import.meta.env.VITE_URL_BE +
                                item?.image?.data?.attributes?.url
                              }
                              alt=""
                              width="100%"
                            />
                            <div className="flex bg-[#b44b22] justify-center">
                              <h4 className="p-[5px] ">{item?.name}</h4>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default ContentMain;
