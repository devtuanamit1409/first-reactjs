import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faSquarePhoneFlip } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="bg-[#b44b22]">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <h5 className="text-[28px] uppercase font-bold">
              THÔNG TIN LIÊN HỆ
            </h5>
            <h6>CÔNG TY TNHH XÂY DỰNG – TTNT LOTUS</h6>
            <div className="flex items-center gap-4">
              <img
                src="https://www.lotusarchvn.com/images/icon-facebook.svg"
                alt=""
              />
              <img
                src="https://www.lotusarchvn.com/images/icon-facebook.svg"
                alt=""
              />
              <img
                src="https://www.lotusarchvn.com/images/icon-facebook.svg"
                alt=""
              />
              <img
                src="https://www.lotusarchvn.com/images/icon-facebook.svg"
                alt=""
              />
              <img
                src="https://www.lotusarchvn.com/images/icon-facebook.svg"
                alt=""
              />
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon className="pr-[5px]" icon={faEnvelope} />
              <p>mail</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faSquarePhoneFlip} />
              <p>Hotline</p>
            </div>
            <div>
              <p>thời gian làm việc</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
