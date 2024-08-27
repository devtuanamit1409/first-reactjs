import "../../assets/styles/home/tabShareexp.css";
const TabShareExp = ({ tabShareexp }) => {
  const UrlimgShareexp =
    tabShareexp.img_share_exp?.image?.data?.attributes?.url;
  const AltimgShareexp =
    tabShareexp.img_share_exp?.image?.data?.attributes?.alternativeText;
  return (
    <>
      <div>
        <h3 className="text-center !font-[500]">{tabShareexp.title}</h3>
      </div>
      <div className="flex justify-center py-[20px]">
        <div className="grid grid-cols-3 gap-[30px] w-[95%]">
          <div className="col-span-2">
            <img
              className="h-[300px] w-[100%]"
              src={import.meta.env.VITE_URL_BE + UrlimgShareexp}
              alt={tabShareexp.img_share_exp?.alt || AltimgShareexp}
            />
          </div>
          <div className="col-span-1">
            <div>
              <h4>
                30 ý tưởng trang trí phòng khách nhỏ đẹp, hiện đại dẫn đầu xu
                hướng năm 2022
              </h4>
              <p>10-11-2022</p>
            </div>
            <div>
              <h4>
                Top 30+ mẫu đèn ngủ treo tường đẹp hiện đại đem lại sự lý tưởng
                cho phòng ngủ
              </h4>
              <p>10-11-2022</p>
            </div>
            <div>
              <h4>
                Top các mẫu tủ áo cánh kính tiện nghi và sang trọng nhất thị
                trường hiện nay
              </h4>
              <p>10-11-2022</p>
            </div>
            <div>
              <h4>
                Mẫu tủ rượu phòng bếp đẹp, sang trọng được nhiều gia chủ yêu
                thích nhất năm 2022
              </h4>
              <p>10-11-2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabShareExp;
