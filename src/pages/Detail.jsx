import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import enpoint from "../enums/endpoint";
import Meta from "../components/layouts/Meta";
const Detail = () => {
  const { slug } = useParams();
  const [seo, setSeo] = useState([]);
  const [data, setData] = useState([]);
  const token = import.meta.env.VITE_TOKEN;
  const searchData = {
    populate: ["danh_muc_con", "seo.avatar"].toString(),
  };
  const searchParmas = new URLSearchParams(searchData).toString();
  const getDetailData = async () => {
    try {
      const response = await axios.get(
        `${enpoint.BAI_VIETS}?${searchParmas}&filters[slug][$eq]=${slug}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      setData(response.data);
      setSeo(response.data?.data[0]?.attributes?.seo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetailData();
  }, [slug]);
  console.log("seo", seo);

  return (
    <>
      <Meta
        title={seo?.title}
        description={seo?.description}
        avatar={seo?.avatar?.data?.attributes?.url}
      />
    </>
  );
};

export default Detail;
