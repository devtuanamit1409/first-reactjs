import { useParams } from "react-router-dom";
const DetailInteriorDesign = () => {
  const { slug } = useParams();
  console.log(slug);
  return (
    <>
      <h1>Đây là trang chi tiết {slug}</h1>
    </>
  );
};

export default DetailInteriorDesign;
