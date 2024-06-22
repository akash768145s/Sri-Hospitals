import React from "react";
import "../../styles/department.css";
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

const Departments = () => {
  return (
    <div className="h-full w-full bgimage flex flex-col justify-between py-10 pt-[10vh] max-lg:pt-[10vh] max-md:pt-[10vh]">
      <div className="flex justify-center items-center   content flex-col container1 mx-auto">
        <p className="text-[34px] ysabeau md:text-[28px] text-white font-semibold pt-10 max-sm:pt-16 ">
          Departments
        </p>
        <div className="w-full md:w-[80%]">
          <p className="text-white text-[22px] sans max-sm:text-[12px] md:text-[18px] px-2 pt-10 text-center md:text-left">
            Explore our specialized departments dedicated to providing
            high-quality healthcare services. Each department is equipped with
            state-of-the-art facilities and staffed by experienced
            professionals, ensuring comprehensive care for every patient.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sans justify-center gap-10 pt-28 md:pt-20 container1 mx-auto">
        <DepartmentItem img={fracture} title="TRAUMA CARE" />
        <DepartmentItem img={baby} title="PEDIATRIC & NEWBORN" />
        <DepartmentItem img={cardio} title="Cardiology" />
        <DepartmentItem img={hand} title="Hand Surgery" />
        <DepartmentItem img={derma} title="DERMATOLOGY" />
        <DepartmentItem img={handDepart} title="DIABETOLOGY" />
        <DepartmentItem img={ent} title="eNT" />
        <DepartmentItem img={oral} title="Oral" />
        <DepartmentItem img={sports} title="Sports Injury" />
        <DepartmentItem img={gyno} title="Obstetrics & Gynaecology" />
        <DepartmentItem img={urology} title="Urology" />
        <DepartmentItem img={radiolog} title="Radiology" />
        <DepartmentItem img={oncology} title="Oncology" />
        <DepartmentItem img={Ophthalmic} title="Ophthalmic Surgery" />
        <DepartmentItem img={neurosurgery} title="Neurosurgery" />
        <DepartmentItem img={Nephrology} title="Nephrology" />
        <DepartmentItem img={psychiatry} title="Psychiatry" />
        <DepartmentItem img={pulmonology} title="Pulmonology" />
        <DepartmentItem
          img={vascular}
          title="Vascular & Endovascular Surgery"
        />
        <DepartmentItem
          img={laparoscopy}
          title="General & Laparoscopic Surgery"
        />
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
        <p className="text-[#0A2D49] ysabeau text-[15px] md:text-[12px] font-semibold uppercase text-center px-2">
          {title}
        </p>
      </div>
    </a>
  );
};

export default Departments;
