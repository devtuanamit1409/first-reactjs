import axios from "axios";
import { useState, useEffect } from "react";
import enpoint from "../enums/endpoint";
import { Tabs } from "antd";

const ContentMain = () => {
  const [data, setData] = useState([]);
  const token = import.meta.env.VITE_TOKEN;
  const searchData = {
    populate: ["tab_content.logo", "title_home"].toString(),
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
      <div className="flex justify-center text-[26px] font-[500] text-[#b44b22]">
        <h3>{data && data?.data?.attributes?.title_home}</h3>
      </div>
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
    </>
  );
};

export default ContentMain;
