import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogs = () => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_API_URL}/get_blogs`)
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden text-left text-xs text-darkslategray-400  pb-10 pt-[10vh]">
      <div className="relative h-[30vh] max-sm:h-[45vh] sm:h-[50vh] w-full">
        <img
          src="/rectangle-209@2x.png"
          alt="facilities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#066aab] bg-opacity-90 flex items-center justify-center px-4 sm:px-6 lg:px-40">
          <div className="flex flex-col items-center justify-center gap-y-6 text-center sm:text-left">
            <h1 className="m-0 relative uppercase font-normal inline-block z-[2] text-6xl max-sm:text-2xl max-lg:text-6xl">
              <span className="font-bold ysabeau text-white container1 mx-auto">
                Blogs
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-10">
        <b className="block mt-6 md:mt-10 ysabeau text-2xl md:text-[23px] capitalize text-darkslategray-600 pb-2">
          Recent
        </b>
        {loading ? (
          <div className="flex justify-center items-center h-[15vh]">
            <img
              src="/logo2.png"
              className="h-auto w-[100px] animate-bounce"
              alt="loading"
            />
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center sans mt-6 md:mt-10 text-lg text-gray-700">
            No blogs found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-10">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white shadow-lg border border-gray-200 h-auto rounded-md overflow-hidden hover:cursor-pointer hover:scale-95 transition-transform relative"
              >
                <Link to={`/blog/${blog._id}`} state={{ blog }}>
                  {blog.image ? (
                    <div className="relative">
                      <img
                        className="w-full h-[300px] object-cover"
                        alt={blog.title}
                        src={blog.image}
                      />
                      <div className="absolute bottom-0  left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <div className="flex flex-wrap gap-2 mb-2"></div>
                        <h2 className="text-lg ysabeau md:text-xl font-semibold">
                          {blog.title}
                        </h2>
                        <p className="text-xs sans mt-1">
                          {formatDate(blog.createdAt)}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-40 md:h-52 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 sans">No Image</span>
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
