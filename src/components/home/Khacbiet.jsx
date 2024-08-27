import "../../assets/styles/home/khacbiet.css";
const Khacbiet = ({ dataKHACBIET }) => {
  const ImgKhacbiet = dataKHACBIET.img_khacbiet?.data?.attributes?.url;
  return (
    <>
      <div className="py-[10px]">
        <h3 className="text-center">{dataKHACBIET.title}</h3>
        <p className="my-[20px] text-[16px] text-[#00bbb4] text-center">
          {dataKHACBIET.description}
        </p>
        <div
          className="flex justify-center"
          dangerouslySetInnerHTML={{ __html: dataKHACBIET.content_khacbiet }}
        ></div>
      </div>
      <div className="flex justify-center">
        <img src={import.meta.env.VITE_URL_BE + ImgKhacbiet} alt="" />
      </div>
    </>
  );
};

export default Khacbiet;
