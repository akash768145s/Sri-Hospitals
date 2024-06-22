"use client";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [showMega, setShowMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentImage, setCurrentImage] = useState("/Department.jpg");

  const handleShowDrop = () => {
    setShowDrop(!showDrop);
  };

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        nav {
          position: fixed;
          z-index: 99;
          width: 100%;
       
          background: #ffffff;
        }
        nav .wrapper {
          position: relative;
          max-width: 1300px;
          padding: 0px 30px;
          height: 70px;
          line-height: 70px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .wrapper .logo a {
          color: #f2f2f2;
          font-size: 30px;
          font-weight: 600;
          text-decoration: none;
        }
        .wrapper .nav-links {
          display: inline-flex;
        }
        .nav-links li {
          list-style-type: none;
        }
        .nav-links li a {
          color: #000000;
          text-decoration: none;
          font-size: 18px;
          font-weight: bold;
          padding: 9px 15px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }
        .nav-links li a:hover {
          background: #64aeeb;
          color: #ffffff;
        }
        .nav-links .mobile-item {
          display: none;
        }
        .nav-links .drop-menu {
          position: absolute;
          background: #242526;
          width: 180px;
          line-height: 45px;
          top: 85px;
          opacity: 0;
          visibility: hidden;
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }
        .nav-links li:hover .drop-menu,
        .nav-links li:hover .mega-box {
          transition: all 0.3s ease;
          top: 70px;
          opacity: 1;
          visibility: visible;
        }
        .drop-menu li a {
          width: 100%;
          display: block;
          padding: 0 0 0 15px;
          font-weight: 400;
          border-radius: 0px;
        }
        .mega-box {
          position: absolute;
          left: 0;
          width: 100%;
          padding: 0 30px;
          top: 85px;
          opacity: 0;
          visibility: hidden;
        }
        .mega-box .content {
          background: #242526;
          padding: 25px 20px;
          display: flex;
          width: 100%;
          justify-content: space-between;
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }
        .mega-box .content .row {
          width: calc(25% - 30px);
          line-height: 45px;
        }
        .content .row .image-container {
          width: 250px;
          height: 250px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .content .row .image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .content .row header {
          color: #f2f2f2;
          font-size: 20px;
          font-weight: 500;
        }
        .content .row .mega-links {
          margin-left: -40px;
          border-left: 1px solid rgba(255, 255, 255, 0.09);
        }
        .row .mega-links li {
          padding: 0 20px;
        }
        .row .mega-links li a {
          padding: 0;
          color: #d9d9d9;
          font-size: 17px;
          display: block;
        }
        .row .mega-links li a:hover {
          color: #f2f2f2;
        }
        .wrapper .btn {
          color: #fff;
          font-size: 20px;
          cursor: pointer;
          display: none;
        }
        .wrapper .btn.close-btn {
          position: absolute;
          right: 30px;
          top: 10px;
        }

        @media screen and (max-width: 970px) {
          .wrapper .btn {
            display: block;
          }
          .wrapper .nav-links {
            position: fixed;
            height: 100vh;
            width: 100%;
            max-width: 350px;
            top: 0;
            left: -100%;
            background: #242526;
            display: block;
            padding: 50px 10px;
            line-height: 50px;
            overflow-y: auto;
            box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.18);
            transition: all 0.3s ease;
          }
          ::-webkit-scrollbar {
            width: 10px;
          }
          ::-webkit-scrollbar-track {
            background: #242526;
          }
          ::-webkit-scrollbar-thumb {
            background: #3a3b3c;
          }
          #menu-btn:checked ~ .nav-links {
            left: 0%;
          }
          #menu-btn:checked ~ .btn.menu-btn {
            display: none;
          }
          #close-btn:checked ~ .btn.menu-btn {
            display: block;
          }
          .nav-links li {
            margin: 15px 10px;
          }
          .nav-links .drop-menu {
            position: static;
            opacity: 1;
            top: 65px;
            visibility: visible;
            padding-left: 20px;
            width: 100%;
            max-height: 0px;
            overflow: hidden;
            box-shadow: none;
            transition: all 0.3s ease;
          }
          #showDrop:checked ~ .drop-menu,
          #showMega:checked ~ .mega-box {
            max-height: 100%;
          }
          .nav-links .desktop-item {
            display: none;
          }
          .nav-links .mobile-item {
            display: block;
            color: #f2f2f2;
            font-size: 20px;
            font-weight: 500;
            padding-left: 20px;
            cursor: pointer;
            border-radius: 5px;
            transition: all 0.3s ease;
          }
          .nav-links .mobile-item:hover {
            background: #3a3b3c;
          }
          .drop-menu li {
            margin: 0;
          }
          .drop-menu li a {
            border-radius: 5px;
            font-size: 18px;
          }
          .mega-box {
            position: static;
            top: 65px;
            opacity: 1;
            visibility: visible;
            padding: 0 20px;
            max-height: 0px;
            overflow: hidden;
            transition: all 0.3s ease;
          }
          .mega-box .content {
            box-shadow: none;
            flex-direction: column;
            padding: 20px 20px 0 20px;
          }
          .mega-box .content .row {
            width: 100%;
            margin-bottom: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          }
          .mega-box .content .row:nth-child(1),
          .mega-box .content .row:nth-child(2) {
            border-top: 0px;
          }
          .content .row .mega-links {
            border-left: 0px;
            padding-left: 15px;
          }
          .row .mega-links li {
            margin: 0;
          }
          .content .row header {
            font-size: 19px;
          }
        }
        nav input {
          display: none;
        }

        .body-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          text-align: center;
          padding: 0 30px;
        }
        .body-text div {
          font-size: 45px;
          font-weight: 600;
        }
        .navbar-logo {
          width: 106px;
          height: 80px;
          margin-right: 20px;
        }
        .nav-links {
          list-style-type: none;
        }
        .icon-wrapper {
          display: flex;
          align-items: center;
          gap: 20px;
        }
      `}</style>
      <nav style={{ height: scrolled ? "60px" : "90px" }}>
        <div className="wrapper">
          <img
            src="/logo.png"
            alt="Logo"
            className="navbar-logo"
            style={{ width: "271px", height: "69px" }}
          />
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times"></i>
            </label>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="#" className="desktop-item">
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
                    <div className="image-container">
                      <img
                        src={currentImage}
                        alt="Department"
                        className="image"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li
                        onMouseEnter={() =>
                          handleMouseEnter("icons/Pulmanology.png")
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/otcare">Orthopedics</a>
                      </li>
                      <li
                        onMouseEnter={() =>
                          handleMouseEnter("icons/handsurgery.png")
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">Pediatrics</a>
                      </li>
                      <li
                        onMouseEnter={() =>
                          handleMouseEnter("icons/traumacare.png")
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">Cardiology</a>
                      </li>
                      <li
                        onMouseEnter={() =>
                          handleMouseEnter("icons/Pulmanology.png")
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">Radiology</a>
                      </li>
                      <li
                        onMouseEnter={() =>
                          handleMouseEnter("img/Cosmetology.jpg")
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">Cosmetology</a>
                      </li>
                      <li
                        onMouseEnter={() =>
                          handleMouseEnter("img/Dermatology.jpg")
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">Dermatology</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li
                        onMouseEnter={() =>
                          handleMouseEnter("img/Diabetology.jpg")
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">Diabetology</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter("img/ENT.jpg")}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">ENT</a>
                      </li>
                      <li
                        onMouseEnter={() =>
                          handleMouseEnter("img/SportsInjury.jpg")
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">Sports Injury</a>
                      </li>
                      <li
                        onMouseEnter={() =>
                          handleMouseEnter("img/Gynaecology.jpg")
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">Gynaecology</a>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter("img/Urology.jpg")}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">Urology</a>
                      </li>
                      <li
                        onMouseEnter={() =>
                          handleMouseEnter("img/Radiology.jpg")
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">Radiology</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li
                        onMouseEnter={() =>
                          handleMouseEnter("img/Oncology.jpg")
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">Oncology</a>
                      </li>
                      <li
                        onMouseEnter={() =>
                          handleMouseEnter("img/GeneralMedicine.jpg")
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">General Medicine</a>
                      </li>
                      <li
                        onMouseEnter={() =>
                          handleMouseEnter("img/OphthalmicSurgery.jpg")
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">Ophthalmic Surgery</a>
                      </li>
                      <li
                        onMouseEnter={() =>
                          handleMouseEnter("img/Neurosurgery.jpg")
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">Neurosurgery</a>
                      </li>
                      <li
                        onMouseEnter={() =>
                          handleMouseEnter("img/Nephrology.jpg")
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">Nephrology</a>
                      </li>
                      <li
                        onMouseEnter={() =>
                          handleMouseEnter("img/Psychiatry.jpg")
                        }
                          onMouseLeave={handleMouseLeave}
                      >
                        <a href="#">Psychiatry</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/facilities" className="desktop-item">
                Facilities
              </a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
          </ul>
          <div className="icon-wrapper">
            <div className="flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border">
              <img
                className="w-[22px] h-[22px] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/magnifying-glass@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
              <img
                className="w-[22px] h-[22px] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/facebook-app-symbol@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
              <img
                className="w-[22px] h-[22px] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/google@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-5 pb-0 pr-[34px] pl-0">
              <img
                className="w-[22px] h-[22px] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/whatsapp@2x.png"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
