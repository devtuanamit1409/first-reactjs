import { useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { useState, useEffect } from "react";
import axios from "axios";

const DetailInteriorDesign = () => {
  const { slug } = useParams();
  const token =
    "95da257ea041b4d78432a71330eca5ee77eaac7c4fc5e0030cd2dac010aad2b024f4f978a42cac0305b88b0fc2856671251a3c9047e92e6a9da8084908d67a77fe7be88bc0cbedd0c572515965d58916682255f24c13ec971efda545c8b2989e1ab58d74b97d6bb924aaede0142533aa094011d4e21c8002db230734645fc2f2";
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:1337/api/bai-viets`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const resData = await res.data;
      setData(resData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <>
      <Seo />
      <h1 className="flex justify-center text-[32px] text-[#4920ff] font-bold">
        {slug}
      </h1>
    </>
  );
};

export default DetailInteriorDesign;
