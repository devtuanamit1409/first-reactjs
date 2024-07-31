import { useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Flex } from "antd";

const DetailInteriorDesign = () => {
  const { slug } = useParams();
  const token = import.meta.env.VITE_TOKEN;
  const [data, setData] = useState([]);
  const [image, setImage] = useState(null);
  const searchData = {
    populate: ["seo.avatar", "banner.seo.avatar", "banner.image"].toString(),
  };
  const searchParams = new URLSearchParams(searchData).toString();
  const getData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_URL_BE}/api/bai-viets/2?${searchParams}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const resData = await res.data;
      setData(resData);
      setImage(resData.data.attributes.seo.avatar.data.attributes.url);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data?.data?.attributes?.seo?.avatar?.data?.attributes?.url);

  return (
    <>
      <Seo />
      <h1 className="flex justify-center text-[32px] text-[#4920ff] font-bold">
        {slug}
      </h1>
      {data && (
        <img
          src={`${import.meta.env.VITE_URL_BE}${image}`}
          alt={data?.data?.attributes?.seo?.title}
        />
      )}
      <Flex gap="small" wrap>
        <Button autoInsertSpace={false} size="large" type="primary">
          Primary Button
        </Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
    </>
  );
};

export default DetailInteriorDesign;
