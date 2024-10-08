import logo from "/src/assets/images/logo-new.jpg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import enpoint from "../../enums/endpoint";
import axios from "axios";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // boolean
  const [data, setData] = useState([]);
  const [subMenu, setSubMenu] = useState(false);
  const token = import.meta.env.VITE_TOKEN;
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const getHeader = async () => {
    try {
      const response = await axios.get(`${enpoint.DANH_MUC_CHA}`, {
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

  const onOpenSubMenu = () => {
    setSubMenu(true);
  };

  const onCloseSubMenu = () => {
    setSubMenu(false);
  };
  console.log("Danh mục cha", data);
  return (
    <>
      <div className="fixed z-50 bg-[#fff] w-full py-[10px] border-b-[1px] border-[#ff0000]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <img src={logo} alt="ảnh lỗi" width="200px" />
            </div>
            <div className="hidden lg:block">
              <ul className="flex list-header">
                {data &&
                  data?.data?.map((item, key) => {
                    return (
                      <li
                        className="list-none relative group"
                        key={key}
                        onMouseEnter={() => onOpenSubMenu()}
                      >
                        <NavLink
                          className={({ isActive, isPending }) =>
                            `${
                              isPending ? "pending" : isActive ? "active" : ""
                            } text-[#b44b22]`
                          }
                          to={item?.attributes?.slug}
                        >
                          {item?.attributes?.title}
                        </NavLink>
                        <ul
                          onMouseLeave={() => onCloseSubMenu()}
                          className={`submenu ${
                            subMenu ? "" : "hidden"
                          } group-hover:block`}
                        >
                          <li className="">Thiết kế dự án 1</li>
                          <li className="">Thiết kế dự án 2</li>
                          <li className="">Thiết kế dự án 3</li>
                          <li className="">Thiết kế dự án 4</li>
                        </ul>
                      </li>
                    );
                  })}
              </ul>
              {/* <ul
                onMouseLeave={() => onCloseSubMenu()}
                className={`submenu ${subMenu ? "" : "hidden"}`}
              >
                <li>Thiết kế dự án </li>
                <li>Thiết kế dự án</li>
                <li>Thiết kế dự án</li>
                <li>Thiết kế dự án</li>
              </ul> */}
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
