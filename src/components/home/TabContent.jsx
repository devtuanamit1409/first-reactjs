import { Tabs } from "antd";
import { Link } from "react-router-dom";
import TabSkeleton from "../loading/TabSkeleton";
const TabContent = ({ tabContent, titleContent, bannerBaogia }) => {
  const onChange = (key) => {};
  return (
    <>
      <div className="flex justify-center">
        <h3>{titleContent}</h3>
      </div>
      <div className="my-[20px] ">
        {tabContent.length > 0 ? (
          <div className="flex justify-center">
            <Tabs
              onChange={onChange}
              type="card"
              items={tabContent?.map((value, key) => {
                const id = String(key + 1);
                return {
                  label: (
                    <div>
                      <div className="flex justify-center">
                        <img
                          src={
                            import.meta.env.VITE_URL_BE +
                            value.logo?.data?.attributes?.url
                          }
                          alt=""
                        />
                      </div>
                      <div className="flex justify-center">{value.title}</div>
                    </div>
                  ),
                  key: id,
                  children: (
                    <div className="grid grid-cols-3 gap-4">
                      {titleContent &&
                        value.images?.map((image, index) => {
                          return (
                            <div className="box-item" key={index}>
                              <img
                                className="h-[400px] md:h-[400px] w-[550px] md:w-[550px] rounded-[10px] "
                                src={
                                  import.meta.env.VITE_URL_BE +
                                  image?.image?.data?.attributes?.url
                                }
                                alt={image?.alt}
                                width="100%"
                                height="100%"
                              />
                            </div>
                          );
                        })}
                    </div>
                  ),
                };
              })}
            />
          </div>
        ) : (
          <TabSkeleton />
        )}
      </div>
      <div>
        <Link to={bannerBaogia?.link || "/"}>
          <img
            src={
              import.meta.env.VITE_URL_BE +
              bannerBaogia?.image?.data?.attributes?.url
            }
            alt={bannerBaogia?.alt}
            width="100%"
          />
        </Link>
      </div>
    </>
  );
};

export default TabContent;
