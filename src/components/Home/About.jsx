import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "../../styles/about.css";

const About = () => {
  const [moreDetails, setMoreDetails] = useState(false);
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

  const latestBlog = blogs.length > 0 ? blogs[0] : null; // Get the latest blog

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 50) {
      return words.slice(0, 50).join(" ") + "...";
    }
    return description;
  };

  return (
    <div
      id="about"
      className="w-full min-h-full bg-[#F7F7F7] flex justify-center items-center py-12"
    >
      <div className="w-full container mx-auto h-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 p-4">
        <div className="flex flex-col gap-6 md:gap-10 w-full md:w-1/2">
          <div>
            <p className="font-bold text-sm md:text-base uppercase ysabeau">
              Our Mission
            </p>
            <p className="text-xs md:text-sm text-justify sans">
              To be a dynamic center for medical excellence that always serves
              patients with commitment, care, and compassion. To surpass patient
              expectations through exceptional service and to deliver impressive
              clinical outcomes. To be a world-class trauma care center that
              believes in putting the patient’s well-being at the forefront.
            </p>
          </div>
          <div>
            <p className="font-bold text-sm md:text-base uppercase ysabeau">
              Our Vision
            </p>
            <p className="text-xs md:text-sm text-justify sans">
              To be an ethical, efficient, and empathetic institution that
              impacts our patients' lives positively. To bring in innovative and
              successful treatments that deliver the best outcomes for our
              patients. To be a true leader that has the welfare of the
              community we serve at its heart.
            </p>
          </div>
          {moreDetails && (
            <div>
              <p className="font-bold text-sm md:text-base uppercase ysabeau">
                Quality Policy
              </p>
              <p className="text-xs md:text-sm text-justify sans">
                We constantly seek to enhance the knowledge of our medical and
                nursing personnel. We actively encourage them to update
                themselves about innovative medical practices and also
                incorporate the most cutting-edge technology available. Trust us
                to provide you with exceptional care and medical advice.
              </p>
            </div>
          )}
          <div>
            <button
              onClick={() => setMoreDetails(!moreDetails)}
              className="bg-[#00AEEF] ysabeau px-4 py-2 md:px-5 md:py-3 flex items-center text-white uppercase text-xs md:text-sm font-bold rounded-md transition duration-300 hover:bg-blue-600"
            >
              {moreDetails ? "Back" : "More Details"}{" "}
              {moreDetails ? (
                <FaArrowLeftLong className="ml-2" />
              ) : (
                <FaArrowRightLong className="ml-2" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2 gap-4 md:gap-8">
          <p className="ysabeau text-lg md:text-2xl font-normal text-blue-600 uppercase">
            Latest News
          </p>
          {loading ? (
            <p className="ysabeau">Loading...</p>
          ) : latestBlog ? (
            <div className="flex justify-center w-full">
              <div
                key={latestBlog._id}
                className="bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden flex flex-col w-full max-w-sm"
              >
                {latestBlog.image ? (
                  <img
                    className="w-full h-40 md:h-52 object-cover"
                    alt={latestBlog.title}
                    src={latestBlog.image}
                  />
                ) : (
                  <div className="w-full h-40 md:h-52 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 ysabeau">No Image</span>
                  </div>
                )}
                <div className="p-4">
                  <p className="ysabeau text-sm font-bold capitalize text-gray-700 mb-2">
                    {latestBlog.title}
                  </p>
                  <div className="flex justify-between items-center">
                    <Link
                      className="text-blue-600 text-xs md:text-sm"
                      to={`/blog/${latestBlog._id}`}
                      state={{ blog: latestBlog }}
                    >
                      Read More
                    </Link>
                    <FaArrowRightLong className="text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="ysabeau capitalize">No blogs found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
