import { useState, useEffect } from "react";
import axios from "axios";
import enpoint from "../enums/endpoint";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";

const token = import.meta.env.VITE_TOKEN;

const Blog = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  // const page = params.get("page") || 1;

  const [dataBlog, setDataBlog] = useState([]);
  const type = "Tin tức";
  const [pazeSize, setPageSize] = useState(1);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const getBlog = async () => {
    try {
      const response = await axios.get(
        `${enpoint.BAI_VIETS}?filters[type][$eq]=${type}&pagination[pageSize]=${pazeSize}&pagination[page]=${page}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      setDataBlog(response.data);
      setTotal(response.data?.meta?.pagination?.total);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlog();
  }, [page]);

  return (
    <>
      <div className="pt-[110px]">
        {dataBlog &&
          dataBlog?.data?.map((value, key) => {
            return (
              <>
                <div key={value.id}>
                  <h1>{value?.attributes?.title}</h1>
                </div>
              </>
            );
          })}
        <Pagination
          defaultPageSize={pazeSize}
          defaultCurrent={page}
          total={total}
          onChange={(page) => {
            // window.location.href = `/tin-tuc?page=${page}`;
            // navigate(`/tin-tuc?page=${page}`);
            setPage(page);
          }}
        />
      </div>
    </>
  );
};
export default Blog;
