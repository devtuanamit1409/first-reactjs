import React from "react";
import { useEffect, useState } from "react";
import enpoint from "../enums/endpoint";
import axios from "axios";

const ListBanner = () => {
  const [data, setData] = useState([]);
  const token = import.meta.env.VITE_TOKEN;
  const searchData = {
    populate: ["slide_banner.image"].toString(),
  };

  const searchParmas = new URLSearchParams(searchData).toString();

  const getListBanner = async () => {
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
  useEffect(() => {
    getListBanner();
  }, []);
  console.log(data);
  return (
    <>
      <div>
        <img src="" alt="" width="" />
      </div>
    </>
  );
};

export default ListBanner;
