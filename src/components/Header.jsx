import logo from "../assets/logo-new.jpg";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import enpoint from "../enums/endpoint";
import axios from "axios";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // boolean
  const [data, setData] = useState([]);
  const token = import.meta.env.VITE_TOKEN;
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  const searchData = {
    populate: ["menu.submenu"].toString(),
  };
  const searchParmas = new URLSearchParams(searchData).toString();
  const getHeader = async () => {
    try {
      const response = await axios.get(`${enpoint.HEADER}?${searchParmas}`, {
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
    getHeader();
  }, []);
  // console.log(data);
  return (
    <>
      <div className="relative mb-[10px]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <img src={logo} alt="ảnh lỗi" width="200px" />
            </div>
            <div className="hidden lg:block">
              <ul className="flex list-header">
                {data &&
                  data?.data?.attributes?.menu?.map((item) => {
                    return (
                      <>
                        <li>
                          <NavLink
                            className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "active" : ""
                            }
                            to={item.link}
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      </>
                    );
                  })}
              </ul>
            </div>
            <div className="lg:hidden" onClick={() => handleClick()}>
              <img
                src="https://www.svgrepo.com/show/509382/menu.svg"
                width="50px"
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } w-[70%] bg-[#ff0000] h-screen fixed top-0 left-0`}
        ></div>
      </div>
    </>
  );
};

export default Header;

// => return ( không return quá 1 thẻ div)
// hook
// useState để quản lý trạng thái của biến

// câu lệnh rẻ nhánh ,
