// src/components/NewsDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";

const NewsDetail = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/latest_news/${id}`
        );
        setNewsItem(response.data);
      } catch (error) {
        console.error("Error fetching news item:", error);
      }
    };

    fetchNewsItem();
  }, [id]);

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-[10vh] w-full">
      <div className="relative h-[30vh] sm:h-[50vh] w-full">
        <img
          src="/rectangle-209@2x.png"
          alt="facilities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#FFFFFF] bg-opacity-90 flex items-center justify-start px-4 sm:px-6 lg:px-40">
          <div className="flex flex-col items-center sm:items-start justify-center gap-y-6">
            <h1 className="m-0 text-xl font-bold text-[#14609D] font-sans relative uppercase inline-block z-[2] text-center sm:text-left sm:text-2xl md:text-3xl lg:text-4xl">
              {newsItem.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-40 mt-8 mb-10"></div>
    </div>
  );
};

export default NewsDetail;
