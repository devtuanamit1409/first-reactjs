import Seo from "../components/Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const TodoClick = () => {
  const [valueTodo, setValuetoDo] = useState([]);

  const [defaultTodo, setDefaulttoDo] = useState([]);
  const addTodo = () => {
    setValuetoDo([...valueTodo, defaultTodo]);
    setDefaulttoDo("");
  };
  const delTodo = (key) => {
    const newTodos = valueTodo.filter((_, i) => i !== key); // danh sách todo còn lại khi được xóa xong
    setValuetoDo(newTodos);
  };
  console.log(valueTodo);
  return (
    <>
      <Seo />
      <div className="container">
        <h1 className="flex justify-center text-[50px] font-bold m-[20px]">
          TO DO LIST
        </h1>
        <div className="flex justify-center bg-[#d0ff00f5] w-[100%] h-[100vh]">
          <div className="flex flex-col">
            <div className="flex items-center bg-[#fff]  px-[20px] py-[5px] h-[50px] mt-[50px] rounded-[10px]">
              <input
                className="focus:outline-none font-bold "
                type="text"
                placeholder="Nhập nội dung ghi chú"
                value={defaultTodo}
                onChange={(e) => setDefaulttoDo(e.target.value)}
              />
              <button
                className="ml-[20px] bg-[#f00] text-[#fff] p-[5px] font-bold rounded-[5px]"
                onClick={() => addTodo()}
              >
                Thêm
              </button>
            </div>
            {valueTodo.length > 0 &&
              valueTodo.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="flex justify-between items-center bg-[#fff] px-[20px] py-[10px] font-bold h-[50px] rounded-[10px]"
                  >
                    <span>{item}</span>
                    <FontAwesomeIcon
                      onClick={() => delTodo(key)}
                      icon={faTrashCan}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default TodoClick;
