import { useEffect, useState } from "react";
import enpoint from "../../enums/endpoint";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/styles/home/footer.css";
import {
  faEnvelope,
  faPhone,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
const Footer = () => {
  const [titleFooter1, setTitlefooter1] = useState([]);
  const [titleFooter2, setTitlefooter2] = useState([]);
  const [titleFooter3, setTitlefooter3] = useState([]);
  const [customerSupport, setCustomersupport] = useState([]);
  const [verifyRegistration, setVerifyregistration] = useState([]);
  const [nameComany, setNamecomany] = useState([]);
  const [listSocial, setListsocial] = useState([]);
  const [mail, setMail] = useState([]);
  const [hotline, setHotline] = useState([]);
  const [workingTime, setWorkingtime] = useState([]);
  const [infoWorkshop, setInfoworkshop] = useState([]);
  const [urlImgworkshop, setUrlimgWorkshop] = useState([]);
  const [altImgworkshop, setAltimgWorkshop] = useState([]);
  const token = import.meta.env.VITE_TOKEN;
  const searchData = {
    populate: [
      "thong_tin_lien_he.list_social.avatar",
      "thong_tin_lien_he.mail",
      "thong_tin_lien_he.hotline",
      "ho_tro_khach_hang.info_support",
      "thong_tin_xuong.anh_xuong.image",
      "thong_tin_xuong.anh_xuong.alt",
      "thong_tin_xuong.verify_registration",
    ].toString(),
  };
  const searchParmas = new URLSearchParams(searchData).toString();
  const getFooter = async () => {
    try {
      const response = await axios.get(`${enpoint.FOOTER}?${searchParmas}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      console.log(response.data);
      setTitlefooter1(
        response.data?.data?.attributes?.thong_tin_lien_he?.title_footer_1
      );
      setTitlefooter2(
        response.data?.data?.attributes?.ho_tro_khach_hang?.title_footer_2
      );
      setTitlefooter3(
        response.data?.data?.attributes?.thong_tin_xuong?.title_footer_3
      );
      setNamecomany(
        response.data?.data?.attributes?.thong_tin_lien_he?.name_comany
      );
      setListsocial(
        response.data?.data?.attributes?.thong_tin_lien_he?.list_social
      );
      setMail(response.data?.data?.attributes?.thong_tin_lien_he?.mail);
      setHotline(response.data?.data?.attributes?.thong_tin_lien_he?.hotline);
      setWorkingtime(
        response.data?.data.attributes?.thong_tin_lien_he?.thoi_gian_lam_viec
      );
      setCustomersupport(response.data?.data?.attributes?.ho_tro_khach_hang);
      setInfoworkshop(response.data?.data?.attributes?.thong_tin_xuong);
      setUrlimgWorkshop(
        response.data?.data?.attributes?.thong_tin_xuong?.anh_xuong?.data
          ?.attributes?.url
      );
      setVerifyregistration(
        response.data?.data?.attributes?.thong_tin_xuong?.verify_registration
          ?.data?.attributes
      );
      setAltimgWorkshop(
        response.data?.data?.attributes?.thong_tin_xuong?.anh_xuong?.data
          ?.attributes?.alternativeText
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFooter();
  }, []);
  console.log(listSocial);

  return (
    <>
      <div className="flex justify-center bg-[#b44b22] text-[#fff]">
        <div className="grid grid-cols-12 gap-4 w-[95%]">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-[22px] font-[600] uppercase pt-[20px] pb-[5px]">
              {titleFooter1}
            </h5>
            <h6 className="uppercase font-[600] py-[5px]">{nameComany}</h6>
            <div className="flex items-center gap-2 py-[5px]">
              {listSocial &&
                listSocial.map((item, key) => {
                  return (
                    <a key={key} href={item.url}>
                      <img
                        src={
                          import.meta.env.VITE_URL_BE +
                          item.avatar?.data?.attributes?.url
                        }
                        alt={item.title}
                        width="30px"
                      />
                    </a>
                  );
                })}
            </div>
            {mail &&
              mail.map((item, key) => {
                return (
                  <div key={key} className="flex items-center py-[5px]">
                    <FontAwesomeIcon className="pr-[5px]" icon={faEnvelope} />
                    <p className="text-[16px]">{item.mail}</p>
                  </div>
                );
              })}
            {hotline &&
              hotline.map((item, key) => {
                return (
                  <div key={key} className="flex items-center py-[5px]">
                    <FontAwesomeIcon className="pr-[5px]" icon={faPhone} />
                    <p className="text-[16px]">{item.hotline}</p>
                  </div>
                );
              })}
            <div className="flex items-center pt-[5px]">
              <FontAwesomeIcon className="pr-[5px]" icon={faClock} />
              <p className="text-[16px]">{workingTime}</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-[22px] uppercase font-[600] pt-[20px] pb-[5px]">
              {titleFooter2}
            </h5>
            <div>
              <ul className="list-footer">
                {customerSupport.info_support &&
                  customerSupport.info_support.map((item, key) => {
                    return (
                      <li key={key} className="flex items-center py-[5px]">
                        <FontAwesomeIcon
                          className="pr-[5px]"
                          icon={faHandPointRight}
                        />
                        {item.title_support}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div
              className="pt-[10px]"
              dangerouslySetInnerHTML={{
                __html: customerSupport.maps,
              }}
            ></div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-[22px] font-[600] uppercase pt-[20px] pb-[5px]">
              {titleFooter3}
            </h5>
            <img
              className="h-[150px] w-[auto] py-[5px]"
              src={import.meta.env.VITE_URL_BE + urlImgworkshop}
              alt={altImgworkshop}
            />
            <h6 className="text-[20px] uppercase font-[600] py-[5px]">
              {nameComany}
            </h6>
            <div
              className="text-[16px] py-[5px]"
              dangerouslySetInnerHTML={{
                __html: infoWorkshop.company_information,
              }}
            ></div>
            <img
              width={200}
              src={import.meta.env.VITE_URL_BE + verifyRegistration.url}
              alt={verifyRegistration.alternativeText}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
