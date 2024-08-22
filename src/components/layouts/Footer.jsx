import { useEffect, useState } from "react";
import enpoint from "../../enums/endpoint";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
const Footer = () => {
  const [titleFooter1, setTitlefooter1] = useState([]);
  const [titleFooter2, setTitlefooter2] = useState([]);
  const [titleFooter3, setTitlefooter3] = useState([]);
  const [nameComany, setNamecomany] = useState([]);
  const [listSocial, setListsocial] = useState([]);
  const [mail, setMail] = useState([]);
  const [hotline, setHotline] = useState([]);
  const [workingTime, setWorkingtime] = useState([]);
  const token = import.meta.env.VITE_TOKEN;
  const searchData = {
    populate: [
      "thong_tin_lien_he.list_social.avatar.title",
      "thong_tin_lien_he.mail",
      "thong_tin_lien_he.hotline",
      "ho_tro_khach_hang",
      "thong_tin_xuong",
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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFooter();
  }, []);
  return (
    <>
      <div className="flex justify-center bg-[#b44b22] text-[#fff]">
        <div className="grid grid-cols-12 gap-4 w-[95%]">
          <div className="col-span-4">
            <h5 className="text-[22px] font-[600] uppercase">{titleFooter1}</h5>
            <h6 className="uppercase font-[600]">{nameComany}</h6>
            <div className="flex items-center gap-2">
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
            <div className="flex items-center">
              <FontAwesomeIcon className="pr-[5px]" icon={faEnvelope} />
              {mail &&
                mail.map((item, key) => {
                  return (
                    <p key={key} className="text-[16px]">
                      {item.mail}
                    </p>
                  );
                })}
            </div>

            {hotline &&
              hotline.map((item, key) => {
                return (
                  <div key={key} className="flex items-center">
                    <FontAwesomeIcon className="pr-[5px]" icon={faPhone} />
                    <p className="text-[16px]">{item.hotline}</p>;
                  </div>
                );
              })}
            <div className="flex items-center">
              <FontAwesomeIcon className="pr-[5px]" icon={faClock} />
              <p className="text-[16px]">{workingTime}</p>
            </div>
          </div>
          <div className="col-span-4">
            <h5 className="text-[22px] uppercase font-[600]">{titleFooter2}</h5>
            {/* dangerouslySetInnerHTML={{ __html: data.data.attributes.ho_tro_khach_hang.support_service }} */}
            <div>as</div>
            <div>as</div>
          </div>
          <div className="col-span-4">
            <h5 className="text-[22px] font-[600] uppercase">{titleFooter3}</h5>
            <img
              src="https://www.lotusarchvn.com/images/xuongfooter.jpg"
              alt=""
              height="150px"
            />
            <h6 className="uppercase font-[600]">{nameComany}</h6>
            <div>
              <p>Dia chi 1</p>
              <p>Giay phep</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
