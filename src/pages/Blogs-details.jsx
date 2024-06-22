import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import DOMPurify from "dompurify";
const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;

  if (!blog) {
    navigate("/", { replace: true });
    return null;
  }

  return (
    <div className="container mx-auto px-4 md:px-10 py-10 pt-[10vh]">
      <div className="relative">
        <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          {blog.image ? (
            <img
              className="w-full h-full object-cover rounded-xl"
              src={blog.image}
              alt={blog.title}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
              {blog.title}
            </h1>
          </div>
        </div>
        <div className="mt-6 flex justify-end px-10 items-center max-sm:flex-col max-sm:gap-3">
          <div className="flex flex-col items-center">
            <p className="text-md text-black font-bold mb-2 uppercase">
              Created at:
            </p>
            <span className="text-gray-500 text-sm">
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(blog.description),
        }}
        className="mt-6 md:mt-10 text-lg md:text-xl text-gray-700 text-justify blog-description"
      ></div>
    </div>
  );
};

export default BlogDetails;
