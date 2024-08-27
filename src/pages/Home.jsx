import { useEffect, useState } from "react";
import enpoint from "../enums/endpoint.js";
import axios from "axios";
import Meta from "../components/layouts/Meta";
import "../assets/styles/home/tab.css";
import ListBanner from "../components/home/ListBanner";
import TabContent from "../components/home/TabContent.jsx";
import ContentservicesList from "../components/home/ContentservicesList.jsx";
import Khacbiet from "../components/home/Khacbiet.jsx";
import ListPartner from "../components/home/ListPartner.jsx";
import TabShareExp from "../components/home/TabShareExp.jsx";
import FormContact from "../components/home/FormContact.jsx";
const Home = () => {
  const [banner, setBanner] = useState([]);
  const [tabContent, setTabContent] = useState([]);
  const [seo, setSeo] = useState([]);
  const [titleContent, setTitlecontent] = useState([]);
  const [bannerBaogia, setBannerbaoGia] = useState([]);
  const [contentServices, setContentservices] = useState([]);
  const [dataKHACBIET, setDataKHACBIET] = useState([]);
  const [dataListpartner, setDatalistPartner] = useState([]);
  const [tabShareexp, setTabshareExp] = useState([]);
  const [formContact, setFormcontact] = useState([]);
  const token = import.meta.env.VITE_TOKEN;
  const searchData = {
    populate: [
      "slide_banner.image",
      "seo.avatar",
      "tab_content.logo",
      "banner_baogia.image",
      "content_services.image_detail.image",
      "tab_content.images.image",
      "tab_khacbiet.img_khacbiet",
      "list_partner.img_partner.image",
      "tab_share_exp.img_share_exp.image",
      "image_lien_he.image",
    ].toString(),
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
      setTabContent(response.data?.data?.attributes?.tab_content);
      setTitlecontent(response.data?.data?.attributes?.title_home);
      setBannerbaoGia(response.data?.data?.attributes?.banner_baogia);
      setContentservices(response.data?.data?.attributes?.content_services);
      setDataKHACBIET(response.data?.data?.attributes?.tab_khacbiet);
      setDatalistPartner(response.data?.data?.attributes?.list_partner);
      setTabshareExp(response.data?.data?.attributes?.tab_share_exp);
      setFormcontact(response.data?.data?.attributes?.image_lien_he);
      console.log(response.data?.data?.attributes?.image_lien_he);
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
      <TabContent
        tabContent={tabContent}
        titleContent={titleContent}
        bannerBaogia={bannerBaogia}
      />
      <ContentservicesList contentServices={contentServices} />
      <Khacbiet dataKHACBIET={dataKHACBIET} />
      <ListPartner dataListpartner={dataListpartner} />
      <TabShareExp tabShareexp={tabShareexp} />
      <FormContact formContact={formContact} />
    </>
  );
};

export default Home;
