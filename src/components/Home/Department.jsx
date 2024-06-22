import React from "react";
import "../../styles/department.css";
import fracture from "../../assets/fracture.png";
import baby from "../../assets/baby.png";
import cardio from "../../assets/cardio.png";
import derma from "../../assets/derma.png";
import ent from "../../assets/ent.png";
import handDepart from "../../assets/hand-depart.png";
import hand from "../../assets/hand.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Department = () => {
  return (
    <div className="h-full w-full bgimage flex flex-col justify-between py-10">
      <div className="flex justify-center items-center h-[20vh] pt-10 content flex-col container1 mx-auto">
        <p className="text-[34px] ysabeau font-semibold text-white">
          Departments
        </p>
        <div className="w-24 h-1.5 mt-5 mb-10 mx-auto rounded-3xl bg-[#066aab] ">
          <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
          <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
          <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
          <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
          <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
        </div>
        <div className="w-full md:w-[80%] container1 mx-auto">
          <p className="text-white text-[22px] sans max-sm:text-[12px] max-md:text-[15px] px-2  text-center md:text-left">
            Explore our specialized departments dedicated to providing
            high-quality healthcare services. Each department is equipped with
            state-of-the-art facilities and staffed by experienced
            professionals, ensuring comprehensive care for every patient.
          </p>
        </div>
      </div>
      <div className="flex ysabeau flex-wrap justify-center gap-10 pt-28 md:pt-20 container1 mx-auto">
        <DepartmentItem img={fracture} title="TRAUMA CARE" />
        <DepartmentItem img={baby} title="PEDIATRIC & NEWBORN" />
        <DepartmentItem img={cardio} title="Cardiology" />
        <DepartmentItem img={hand} title="Hand Surgery" />
        <DepartmentItem img={derma} title="DERMATOLOGY" />
        <DepartmentItem img={handDepart} title="DIABETOLOGY" />
        <DepartmentItem img={ent} title="eNT" />
      </div>
      <div className="flex justify-center content pt-10">
        <a
          href="/departments"
          className="px-5 ysabeau py-3 rounded-md  flex justify-center items-center gap-2 text-white font-bold"
        >
          EXPLORE ALL{" "}
          <span>
            <FaArrowRightLong />
          </span>
        </a>
      </div>
    </div>
  );
};

const DepartmentItem = ({ img, title }) => {
  const path = title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");
  return (
    <a
      href={`/departments/${path}`}
      className="h-[255px] w-[223px] md:h-[200px] md:w-[180px] bg-white content hover:scale-95 cursor-pointer"
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    >
      <div className="h-full w-full flex justify-center items-center flex-col gap-5 md:gap-3">
        <img
          className="h-[60px] w-[60px] md:h-[50px] md:w-[50px]"
          src={img}
          alt=""
        />
        <p className="text-[#0A2D49] text-[15px] md:text-[12px] font-semibold uppercase text-center px-2">
          {title}
        </p>
      </div>
    </a>
  );
};

export default Department;
