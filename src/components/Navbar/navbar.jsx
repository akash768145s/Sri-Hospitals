"use client";
import { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useLocation, Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGoogle, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import fracture from "../../assets/fracture.png";
import baby from "../../assets/baby.png";
import cardio from "../../assets/cardio.png";
import derma from "../../assets/derma.png";
import ent from "../../assets/ent.png";
import oral from "../../assets/oral.png";
import handDepart from "../../assets/hand-depart.png";
import hand from "../../assets/hand.png";
import sports from "../../assets/sports.png";
import gyno from "../../assets/gyno.png";
import urology from "../../assets/urology.png";
import radiolog from "../../assets/radiolog.png";
import oncology from "../../assets/oncology.png";
import Ophthalmic from "../../assets/opthalmic.png";
import neurosurgery from "../../assets/neurosurgery.png";
import Nephrology from "../../assets/Nephrology.png";
import psychiatry from "../../assets/psychiatry.png";
import pulmonology from "../../assets/pulmonology.png";
import vascular from "../../assets/vascular.png";
import laparoscopy from "../../assets/laparoscopy.png";

const Navbar = () => {
  const location = useLocation();
  const [showDrop, setShowDrop] = useState(false);
  const [showMega, setShowMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentImage, setCurrentImage] = useState("/Department.jpg");
  const [activeLink, setActiveLink] = useState("");

  const handleShowMega = () => {
    setShowMega(!showMega);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  const handleMouseLeave = () => {
    setCurrentImage("/Department.jpg");
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update activeLink based on the current path
    switch (location.pathname) {
      case "/":
        setActiveLink("HOME");
        break;
      case "/departments":
        setActiveLink("DEPARTMENT");
        break;
        break;
      case "/facilities":
        setActiveLink("FACILITIES");
        break;
      case "/blogs":
        setActiveLink("BLOGS");
        break;
      case "/careers":
        setActiveLink("CAREERS");
        break;
      case "/contactus":
        setActiveLink("CONTACT");
        break;
      default:
        setActiveLink("");
    }
  }, [location.pathname]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav style={{ height: scrolled ? "80px" : "90px" }}>
        <div
          className={`${
            scrolled ? "wrapper1" : "wrapper"
          } container1 mx-auto ysabeau`}
        >
          <img
            src={scrolled ? "/logo2.png" : "/logo.png"}
            alt="Logo"
            className="navbar-logo"
            style={{
              width: scrolled ? "90px" : "221px",
              height: scrolled ? "70px" : "69px",
            }}
          />
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links max-xl:hidden">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times"></i>
            </label>
            <li>
              <a
                href="/"
                style={{ fontSize: scrolled ? "14px" : "" }}
                className={activeLink === "HOME" ? "active-link" : ""}
                onClick={() => handleLinkClick("HOME")}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/departments"
                style={{ fontSize: scrolled ? "14px" : "" }}
                className={activeLink === "DEPARTMENT" ? "active-link" : ""}
                onClick={() => handleLinkClick("DEPARTMENT")}
              >
                Departments
              </a>
              <input type="checkbox" id="showMega" onChange={handleShowMega} />
              <label htmlFor="showMega" className="mobile-item">
                Mega Menu
              </label>
              <div
                className="mega-box"
                style={{ maxHeight: showMega ? "100%" : "0" }}
              >
                <div className="content">
                  <div className="row">
                    <div
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      }}
                      className="image-container "
                    >
                      <img
                        src={currentImage}
                        alt="Department"
                        className=" h-[100px] w-[100px]"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li
                        onMouseEnter={() => handleMouseEnter(fracture)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/trauma-care">Orthopedics</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(baby)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/pediatric-newborn">Pediatrics</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(cardio)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/cardiology">Cardiology</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(radiolog)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/radiology">Radiology</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(hand)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/hand-surgery">Cosmetology</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(derma)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/dermatology">Dermatology</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(oral)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/oral">Oral</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li
                        onMouseEnter={() => handleMouseEnter(handDepart)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/diabetology">Diabetology</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(ent)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/ent">ENT</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(sports)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/sports-injury">Sports Injury</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(gyno)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/obstetrics-gynaecology">
                          Gynaecology
                        </a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(urology)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/urology">Urology</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(pulmonology)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/pulmonology">Pulmonology</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(vascular)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/vascular-endovascular-surgery">
                          Vascular & Endovascular
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li
                        onMouseEnter={() => handleMouseEnter(oncology)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/oncology">Oncology</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(Ophthalmic)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/ophthalmology">Ophthalmology</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(neurosurgery)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/neurosurgery">Neuro Surgery</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(Nephrology)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/nephrology">Nephrology</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(psychiatry)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/psychiatry">Psychiatry</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(laparoscopy)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/laparoscopic-surgery">
                          Laparoscopic Surgery
                        </a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter(oncology)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/departments/radiology">Radiology</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a
                href="/facilities"
                style={{ fontSize: scrolled ? "14px" : "" }}
                className={activeLink === "FACILITIES" ? "active-link" : ""}
                onClick={() => handleLinkClick("FACILITIES")}
              >
                Facilities
              </a>
            </li>
            <li>
              <a
                href="/blogs"
                style={{ fontSize: scrolled ? "14px" : "" }}
                className={activeLink === "BLOGS" ? "active-link" : ""}
                onClick={() => handleLinkClick("BLOGS")}
              >
                Blogs
              </a>
            </li>
            <li>
              <Link
                to="/contactus"
                style={{ fontSize: scrolled ? "14px" : "" }}
                className={activeLink === "CONTACT" ? "active-link" : ""}
                onClick={() => handleLinkClick("CONTACT")}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
          {/* <div className="icon-wrapper max-sm:hidden max-md:hidden">
            {isIconVisible ? (
              <div className="flex flex-col items-start justify-start px-0 pb-0 box-border">
                <img
                  className="w-[22px] h-[22px] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt="Search Icon"
                  src="/magnifying-glass@2x.png"
                  onClick={handleIconClick} // Toggle visibility on click
                  style={{ cursor: "pointer" }}
                />
              </div>
            ) : (
              <div className="flex flex-col bg-black items-start justify-start px-0 pb-0 box-border">
                <input
                  type="text"
                  className="border border-black p-2 text-white" // Adjust styling as per your design
                  placeholder="Search..."
                />
              </div>
            )}
          </div> */}

          <div className="flex gap-10 justify-end items-center max-sm:hidden max-md:hidden">
            {" "}
            <a target="_blank" href="https://www.facebook.com/SriHospitals/">
              <div className="flex flex-col items-start justify-start  px-0 pb-0">
                <img
                  className="w-[2=2px] h-[22px] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/facebook-app-symbol@2x.png"
                />
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/sri.hospitals/">
              {" "}
              <div className="flex flex-col items-start justify-start  px-0 pb-0">
                <FaInstagram size={25} />
              </div>
            </a>
            <div className="flex flex-col items-start justify-start  pb-0 pr-[34px] pl-0">
              <img
                className="w-[22px] h-[22px] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/whatsapp@2x.png"
              />
            </div>
          </div>
          <div className="xl:hidden flex items-center max-sm:px-10">
            {isMenuOpen ? (
              <IoMdClose size={30} onClick={() => setIsMenuOpen(false)} />
            ) : (
              <IoMdMenu size={30} onClick={() => setIsMenuOpen(true)} />
            )}
          </div>
          {isMenuOpen && (
            <div
              className={`${
                scrolled ? "top-[7vh] max-xl:top-[10vh]" : "top-[15vh] "
              } xl:hidden  bg-white w-full absolute left-0 py-4 shadow-lg z-50`}
            >
              <ul className="flex flex-col items-center justify-center">
                <li>
                  <a
                    exact
                    href="/"
                    onClick={() => handleLinkClick("HOME")}
                    className={activeLink === "HOME" ? "active-link" : ""}
                  >
                    HOME
                  </a>
                </li>

                <li>
                  <a
                    href="/departments"
                    onClick={() => handleLinkClick("DEPARTMENT")}
                    className={activeLink === "DEPARTMENT" ? "active-link" : ""}
                  >
                    DEPARTMENT
                  </a>
                </li>
                <li>
                  <a
                    href="/facilities"
                    onClick={() => handleLinkClick("FACILITIES")}
                    className={activeLink === "FACILITIES" ? "active-link" : ""}
                  >
                    FACILITIES
                  </a>
                </li>
                <li>
                  <a
                    href="/blogs"
                    onClick={() => handleLinkClick("BLOGS")}
                    className={activeLink === "BLOGS" ? "active-link" : ""}
                  >
                    BLOGS
                  </a>
                </li>

                <div className="flex gap-6 justify-center items-center lg:hidden">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/SriHospitals/"
                  >
                    <TiSocialFacebook size={25} />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/sri.hospitals/"
                  >
                    <FaInstagram size={18} />
                  </a>

                  <FaWhatsapp size={18} />
                </div>
              </ul>
            </div>
          )}
        </div>
        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fas fa-bars"></i>
        </label>
      </nav>
    </>
  );
};

export default Navbar;
