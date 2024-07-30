import logo from "../assets/logo-new.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // boolean
  //   const isOpen = false;
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <>
      <div className="relative">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <img src={logo} alt="ảnh lỗi" width="200px" />
            </div>
            <div className="hidden lg:block">
              <ul className="flex">
                <li className="mr-[20px] text-main-text font-bold">
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className="mr-[20px]">
                  <Link to="/thiet-ke-noi-that">Thiết kế nội thất</Link>
                </li>
                <li className="mr-[20px]">Dự án tiêu biểu</li>
                <li className="mr-[20px]">Dự án hoàn thiện</li>
                <li className="mr-[20px]">Thước lỗ ban</li>
                <li className="mr-[20px]">Phụ kiện</li>
                <li className="mr-[20px]">Liên hệ</li>
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
