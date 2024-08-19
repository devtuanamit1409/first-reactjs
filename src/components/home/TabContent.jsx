import { Tabs } from "antd";
const TabContent = ({ tabContent }) => {
  console.log(tabContent);

  return (
    <>
      {/* <div className="flex justify-center">
<h3>{tabContent && data?.data?.attributes?.title_home}</h3> 
      </div>
      <div className="my-[20px] ">
        <Tabs
          onChange={onChange}
          type="card"
          items={
            tabContent &&
            tabContent.map((item, key) => {
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
         {tabData.length > 0 ? (
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
        )} 
      </div> */}
    </>
  );
};

export default TabContent;
