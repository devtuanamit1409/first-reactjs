import ListBanner from "../components/home/ListBanner";
import { useEffect, useState } from "react";
import enpoint from "../enums/endpoint.js";
import axios from "axios";
import Meta from "../components/layouts/Meta";
const Home = () => {
  const [banner, setBanner] = useState([]);
  const [seo, setSeo] = useState([]);
  const token = import.meta.env.VITE_TOKEN;
  const searchData = {
    populate: ["slide_banner.image", "seo.avatar"].toString(),
  };
  const searchParmas = new URLSearchParams(searchData).toString();
  const getHomedata = async () => {
    try {
      const response = await axios.get(`${enpoint.HOME}?${searchParmas}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      setBanner(response.data?.data?.attributes?.slide_banner);
      setSeo(response.data?.data?.attributes?.seo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHomedata();
  }, []);

  return (
    <>
      <Meta
        title={seo?.title || "Trang chủ"}
        description={seo?.description || "Mô tả"}
        avatar={seo?.avatar?.data?.attributes?.url || "/"}
      />
      <div className="pt-[80px]">
        <ListBanner banner={banner} />
      </div>
    </>
  );
};

export default Home;
