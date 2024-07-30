import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const Home = ({ title }) => {
  // const [result, setResult] = useState(0);
  // const [number1, setNumber1] = useState(0);

  // const math = (operator) => {
  //   switch (operator) {
  //     case "+":
  //       setResult(parseInt(number1) + parseInt(number2));
  //       break;
  //     case "-":
  //       setResult(parseInt(number1) - parseInt(number2));
  //       break;
  //     case "*":
  //       setResult(parseInt(number1) * parseInt(number2));
  //       break;
  //     case "/":
  //       setResult(parseInt(number1) / parseInt(number2));
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const [data, setData] = useState([]);
  const token =
    "5b82143efa09118ffe1e66d2a694458862dc4cb2142da80466f60b4cf89369b7225b6991e4480aa8186086a7cd19d17523e2229af397d816dde2478f6fad2b328658bf93a76054f0d3e5a574b425ce14d1d567a9765b3e00549de2d7de4facc10eedd9d576660466aa03825c76ee3c5b84e1ea5a64477eee61f956d10c944afd";
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:1337/api/bai-viets`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const reqData = await res.data;
      setData(reqData);
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
      <Seo title={title} />
      <div>
        <h3 className="container mt-[50px] italic font-[500]">
          <Link to="/to-do-list">To Do List</Link>
        </h3>
      </div>
      {/* <div>
        <div className="flex justify-center">
          <input
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
            type="number"
            placeholder="Nhập số thứ nhất"
            className="border border-solid border-[#000] p-2"
          />
          <input
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
            type="number"
            className="border border-solid border-[#000] p-2"
            placeholder="Nhập số thứ hai"
          />
          <span>
            Kết quả:{" "}
            <strong className="text-[#ff0000] text-[32px]">
              {result.toFixed(2)}
            </strong>
          </span>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => math("+")}
            className="bg-[#ffff00] text-[#000] py-2 px-4 mr-2"
          >
            +
          </button>
          <button
            onClick={() => math("-")}
            className="bg-[#ffff00] text-[#000] py-2 px-4 mr-2"
          >
            -
          </button>
          <button
            onClick={() => math("*")}
            className="bg-[#ffff00] text-[#000] py-2 px-4 mr-2"
          >
            *
          </button>
          <button
            onClick={() => math("/")}
            className="bg-[#ffff00] text-[#000] py-2 px-4 mr-2"
          >
            /
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Home;
