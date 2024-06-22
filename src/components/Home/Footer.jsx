import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaVimeo,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      id="footer"
      className="h-[30%] flex flex-col justify-between bg-[#00AEEF] text-white md:px-10 lg:px-10"
    >
      <main className="container1 mx-auto pt-10 max-sm:px-10 ">
        <section className="flex flex-col md:flex-row gap-10 justify-between items-start">
          <div className="md:w-2/3 w-full">
            <h1 className="text-xl font-bold mb-4 ysabeau">
              ABOUT SRI HOSPITALS
            </h1>
            <p className="leading-relaxed text-sm sans">
              We at Sri Hospitals aim to provide the best care to our patients,
              with orthopedic care being our core strength. Our qualified team
              of doctors is supported by competent staff. With quality
              infrastructure and the latest medical technology, our goal is to
              make every patient who comes to us believe in our motto: We care,
              We Heal, We Lead.
            </p>
          </div>
          <div className="flex flex-col gap-10 md:w-1/3">
            <div className="flex gap-4 items-center">
              <div className="text-2xl">
                <FaLocationDot size={20} />
              </div>
              <div>
                <h2 className="ysabeau font-semibold">Address</h2>
                <p className="text-sm sans">
                  32/07, Varadharaja Perumal Koil Street, Tondiarpet, Chennai,
                  TN, India - 600081.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10 md:w-1/3">
              <div className="flex gap-4 items-center">
                <div>
                  <MdOutlineMailOutline size={20} />
                </div>
                <div>
                  <h2 className="ysabeau font-semibold">Email ID</h2>
                  <p className="text-sm sans">Admin@SriHospitals.in</p>
                  <p className="text-sm sans">SriHospitals@Yahoo.com</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 w-full">
              <div className="flex gap-4 items-center">
                <div>
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  {" "}
                  <h2 className="ysabeau font-semibold">Phone Number</h2>
                  <p className="text-sm sans">+91 88257 27230</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#00AEEF] py-4">
        <div className="container1 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 sans max-sm:px-0 mb-4 md:mb-0">
            <a href="/" className="text-sm">
              Home
            </a>
            <a href="/departments" className="text-sm">
              Departments
            </a>
            <a href="/facilities" className="text-sm">
              Facilities
            </a>
            <a href="/blogs" className="text-sm">
              Blogs
            </a>
          </div>
          <div className="flex space-x-4 pr-10 mt-4 md:mt-0">
            <a
              target="_blank"
              href="https://www.facebook.com/SriHospitals/"
              className="text-xl"
            >
              <FaFacebookSquare size={20} />
            </a>
            <a
              target="_blank"
              href="https://x.com/SriHospitals?t=aTVsOs7l-RPjniNM8kQzAg&s=08"
              className="text-xl"
            >
              <FaTwitter size={20} />
            </a>
            <a href="/" className="text-xl">
              <FaVimeo size={20} />
            </a>
            <a href="/" className="text-xl">
              <FaYoutube size={23} />
            </a>
          </div>
        </div>
        <div className="container1 mx-auto mt-10 bg-white h-[1px]"></div>
        <div className="container1 sans mx-auto flex px-10 flex-col md:flex-row justify-between items-center mt-4">
          <div className="text-sm">© 2023 All rights reserved</div>
          <div className="flex space-x-4">
            <a href="/" className="text-sm">
              Terms of Service
            </a>
            <a href="/" className="text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
