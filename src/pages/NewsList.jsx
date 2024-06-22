// src/components/NewsList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/get_news`
        );
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const truncateDescription = (description, limit) => {
    if (description.length <= limit) return description;
    return description.substring(0, limit) + "...";
  };

  const [expandedNews, setExpandedNews] = useState({});

  const toggleReadMore = (id) => {
    setExpandedNews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full pt-[10vh] pb-10">
      <div className="w-full">
        <div className="relative h-[30vh] sm:h-[50vh] w-full">
          <img
            src="/rectangle-209@2x.png"
            alt="facilities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FFFFFF] bg-opacity-90 flex items-center justify-start px-4 sm:px-6 lg:px-40">
            <div className="flex flex-col items-center sm:items-start justify-center gap-y-6">
              <h1 className="m-0 text-xl font-bold text-[#14609D]  relative uppercase inline-block z-[2] text-center sm:text-left sm:text-2xl md:text-3xl lg:text-4xl">
                More News
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 sm:px-6 lg:px-40">
          {news.map((newsItem) => (
            <div
              key={newsItem._id}
              className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-300 ${
                expandedNews[newsItem._id] ? "h-auto" : "h-40 overflow-hidden"
              }`}
            >
              <h2 className="text-xl font-bold mb-4">{newsItem.title}</h2>
              <p>
                {expandedNews[newsItem._id]
                  ? newsItem.description
                  : truncateDescription(newsItem.description, 100)}
              </p>
              {newsItem.description.length > 100 && (
                <div className="flex justify-start">
                 
                  <Link to={`/news/${newsItem._id}`} className="text-blue-500">
                    Full Details
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
