import React, { useState } from "react";
import service from "../assets/service-hours.png";
import facilities from "../assets/facilities.png";
import cnc from "../assets/cnc.png";
const FacilityCard = ({ imageSrc, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[292px] max-w-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <></>
      ) : (
        <div className="absolute h-auto w-full top-[81.08%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-8xl bg-steelblue-100 z-[1]">
          {" "}
          <div className="absolute w-full h-full justify-center items-center  flex  text-3xl capitalize font-black text-left px-10 pt-3 min-w-[122px] z-[2] mq450:text-lg">
            <p className="text-center font-bold ysabeau">{title}</p>
          </div>
        </div>
      )}

      <div className="self-stretch h-[465px] relative shrink-0">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xl max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={imageSrc}
        />
        {isHovered && (
          <div className="absolute h-full w-full top-0 left-0 bg-steelblue-100 opacity-90 rounded-8xl flex items-center justify-center z-10">
            <div className="text-white text-center p-4">
              <h2 className="text-3xl font-bold ysabeau">{title}</h2>
              <p className="mt-2 text-base capitalize">{description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Facilities = () => {
  return (
    <div className="w-full h-full relative bg-white overflow-hidden flex pt-[10vh] flex-col items-start justify-start gap-[57px] leading-normal tracking-normal text-left text-xs text-dimgray-100  mq750:gap-[28px] mq1050:h-auto">
      <div className="relative h-[30vh] max-sm:h-[45vh] sm:h-[50vh] w-full ">
        <img
          src={facilities}
          alt="facilities"
          className="w-full h-full object-cover"
        />
        <div className="absolute max-sm:pt-10  inset-0 bg-[#066aab] bg-opacity-90 flex items-center justify-center px-4 sm:px-6 lg:px-40">
          <div className="flex flex-col items-center justify-center gap-y-6 text-center sm:text-left">
            <img
              className="w-[80px] h-[80px] sm:w-[109px] sm:h-[106px] relative object-cover z-[2]"
              loading="lazy"
              alt=""
              src={service}
            />
            <h1 className="m-0 relative  uppercase font-normal inline-block z-[2] text-6xl max-sm:text-2xl max-lg:text-6xl">
              <b className="font-bold ysabeau text-white container1 mx-auto">
                State-of-the-art equipment and <br /> infrastructure
              </b>
            </h1>
          </div>
        </div>
      </div>

      <main className="self-stretch container1 mx-auto flex flex-row items-start justify-center pt-0 pb-10 pr-5 pl-7 box-border max-w-full shrink-0 text-center text-11xl text-white  lg:pb-[91px] mq750:pb-[59px]">
        <div className="w-full flex  flex-row flex-wrap items-start justify-start gap-[118px] max-w-full mq750:gap-[29px] mq1050:gap-[59px] ">
          <FacilityCard
            imageSrc="/rectangle-294@2x.png"
            title="Fracture, Accident & Emergency Services"
            description="Get expert care for bone breaks, injuries, and sudden medical emergencies with Sri Hospital’s fracture, accident, and emergency services."
          />
          <FacilityCard
            imageSrc="/rectangle-300@2x.png"
            title="CT Scan – 50 Slice"
            description="Our CT Scan offers high-resolution imaging for a detailed examination of your body."
          />
          <FacilityCard
            imageSrc="/rectangle-302@2x.png"
            title="Digital X-ray"
            description="Our Facilities offers fast and clear digital x-rays to visualize bones and soft tissues."
          />
          <FacilityCard
            imageSrc="/rectangle-302-1@2x.png"
            title="ICU"
            description="state of the art icu with 24hrs intensivist on duty sri offers specialized care for critically ill patients with round-the-clock intensivist supervision."
          />
          <FacilityCard
            imageSrc="/rectangle-302-2@2x.png"
            title="Immunization Clinic"
            description="We offer advanced surgical suites designed to minimize infection risk"
          />
          <FacilityCard
            imageSrc="/rectangle-302-3@2x.png"
            title="Spinal Rehabilitation"
            description="we provide specialized therapy to address spinal cord injuries and disorders."
          />
          <FacilityCard
            imageSrc="/rectangle-302-4@2x.png"
            title="Sports Injury Clinic"
            description="with sri, you can get expert treatment and rehabilitation for sports-related injuries."
          />
          <FacilityCard
            imageSrc={cnc}
            title="Coronary Care Unit"
            description="We have a dedicated unit for monitoring and treating heart-related conditions.."
          />
          <FacilityCard
            imageSrc="/rectangle-297@2x.png"
            title="Sri Cath Lab"
            description="Our state-of-the-art cath lab is equipped to offer advanced procedures for diagnosing and treating heart problems."
          />
          <FacilityCard
            imageSrc="/rectangle-305@2x.png"
            title="Laboratory Services"
            description="Our advanced lab facilities offer comprehensive testing to support accurate diagnosis and treatment haemodialysis unit."
          />
          <FacilityCard
            imageSrc="/rectangle-302-6@2x.png"
            title="Pharmacy"
            description="With sri, you'll have convenient access to essential medications to support your recovery."
          />
          <FacilityCard
            imageSrc="/rectangle-311@2x.png"
            title="Ambulance Service"
            description="we offer prompt and professional medical transport in critical situtations."
          />
          <FacilityCard
            imageSrc="/rectangle-302-7@2x.png"
            title="Modular Operation"
            description="We offer advanced surgical suites designed to minimize infection risk."
          />
          <FacilityCard
            imageSrc="/rectangle-302-8@2x.png"
            title="Physiotherapy & Fitness"
            description="Regain strength, mobility, and function after injury or surgery with Sri’s physiotherapy unit."
          />
          <FacilityCard
            imageSrc="/rectangle-302-9@2x.png"
            title="Ultrasound"
            description="We offer non-invasive imaging to examine internal organs and blood flow"
          />
        </div>
      </main>
    </div>
  );
};

export default Facilities;
