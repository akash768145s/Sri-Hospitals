import React from "react";
import "../../styles/hero.css";
import "../../styles/fonts.css";
import serviceHours from "../../assets/service-hours.png";
import doctor from "../../assets/doctor.png";
import "../../styles/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <div className="h-screen w-full pt-[10vh]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={{
          hideOnClick: true,
          enabled: false, // Hides the navigation arrows
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: null, // Hides the pagination bullets
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-full w-full bgimage flex flex-col lg:flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center p-4 content">
              <div>
                <img
                  className="h-[100px] w-[120px] lg:h-[144px] lg:w-[173px]"
                  src={serviceHours}
                  alt="service hours"
                />
              </div>
              <ul className="ysabeau text-[24px] lg:text-[60px] text-center">
                <li>We Care</li>
                <li className="text-[#C3ED11]">WE Heal</li>
                <li>WE Lead</li>
              </ul>
            </div>
            <div className="h-[50vh] lg:h-full flex justify-center items-center content">
              <img
                className="h-full w-auto max-lg:py-3"
                src={doctor}
                alt="doctor"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full bgimage1 flex flex-col">
            <div className="flex pt-[15vh] justify-end items-center px-4 lg:px-14 h-[20%]">
              <div className="w-[50%] md:w-[30%] lg:w-[15%] content">
                <img
                  src={serviceHours}
                  className="w-full h-auto"
                  alt="service hours"
                />
              </div>
            </div>
            <div className="flex justify-center items-center px-4 lg:px-0 h-[60%]">
              <p className="content ysabeau text-[#348C00] text-[6vw] md:text-[4vw] lg:text-[3vw] font-bold text-center">
                Exceptional Cardiac Care Close To Your Heart
              </p>
            </div>
            <div className="container content h-[20%]">
              <div className="flex flex-col md:flex-row justify-between items-end px-4 lg:px-14 w-full">
                <p className="content ysabeau font-bold text-md md:text-lg lg:text-xl tracking-wider text-black">
                  Consultant: Dr. Rahuram
                </p>
                <p className="content ysabeau font-bold text-md md:text-lg lg:text-xl tracking-wider text-black">
                  Timing: 10:00 am - 04:00 pm.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full bgimage3 flex flex-col lg:flex-row justify-center items-center">
            <div className="flex justify-center justify-evenly w-full items-center p-4 content h-full">
              <div>
                <img
                  className="h-[100px] w-[120px] lg:h-[244px] lg:w-[273px]"
                  src={serviceHours}
                  alt="service hours"
                />
              </div>
              <div className="h-full flex flex-col  lg:flex-row gap-14 lg:gap-10 justify-evenly items-center">
                <div className="h-[150px] w-[150px] lg:h-[300px] lg:w-[300px] rounded-full spherebg2"></div>
                <div className="h-[150px] w-[150px] lg:h-[300px] lg:w-[300px] rounded-full spherebg1"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full bgimage4 flex justify-center items-center">
            <div className="content h-auto w-full mix-blend-multiply flex justify-center items-center">
              <img src="/hex.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
