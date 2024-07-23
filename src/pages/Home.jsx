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

  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   try {
  //     const res = await axios.get(
  //       `https://data-code-reactjs-default-rtdb.firebaseio.com/toDolist.json`
  //     );

  //     const reqData = await res.data;
  //     setData(reqData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <Seo title={title} />
      {/* <div>
        <h3 className="container mt-[50px] italic font-[500]">
          <Link to="/to-do-list">To Do List</Link>
        </h3>
      </div> */}
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
