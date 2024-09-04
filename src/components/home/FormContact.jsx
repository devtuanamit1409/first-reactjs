import enpoint from "../../enums/endpoint";
import axios from "axios";
import { useEffect, useState } from "react";

const FormContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const token = import.meta.env.VITE_TOKEN;
  const data = {
    data: {
      name: name,
      phone: phone,
    },
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(enpoint.CONTACT, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="">
        <h1 className="text-center">Form liên hệ</h1>
        <div className="flex justify-center">
          <div>
            <label htmlFor="name">Họ và tên</label> <br />
            <input
              placeholder="Họ tên"
              name="name"
              className="border border-solid border-black"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="phone">Phone</label> <br />
            <input
              placeholder="Số điện thoại"
              name="phone"
              id="phone"
              className="border border-solid border-black"
              onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={() => handleSubmit()}>Gửi</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContact;
