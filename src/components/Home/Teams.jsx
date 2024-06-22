import React, { useState } from "react";
import parthiban from "../../assets/parthiban.jpeg";
import jeyapaul from "../../assets/jeyapaul.jpeg";
import sivakumar from "../../assets/sivakumar.jpeg";
import thirumalavalavan from "../../assets/thirumalavalavan.jpeg";

const Teams = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const doctors = [
    {
      name: "Dr. J. PARTHIBAN",
      image: parthiban,
      qualifications: [
        "MBBS",
        "D.Ortho.",
        "FAO(SWISS)",
        "FELLOWSHIP IN SPINE (JAPAN)",
        "FOOT & ANKLE FELLOW (SWISS & US)",
      ],
      expertise:
        "Senior Consultant Foot & Ankle Surgeon CO - Opted Member of Indian Foot & Ankle Society Past - Joint Secretary of Indian Foot and Ankle Society",
      experience:
        "A well-known name in the field of orthopedics, Dr. J. Parthiban completed his MBBS in 1998, followed by D. Ortho from Sri Ramachandra Medical College and Research Institute, Chennai. Dr. Parthiban is well-trained in the management of complicated trauma and familiar with all AO procedures.",
    },
    {
      name: "DR. M.P. JEYAPAUL",
      image: jeyapaul,
      qualifications: ["M.B.B.S.", "D.C.H.", " M.D. (Pediatrics)", " FIA"],
      expertise: "",
      experience:
        "A veteran in the field of pediatrics Dr. M.P. Jeyapaul has completed 35 years of Government service in various faculties. The former director and superintendent Institute of Child Health and Hospital for Children, Egmore, Dr. Jeyapaul was a professor of pediatrics at Madras Medical College at the time of retirement.",
    },
    {
      name: "DR. A. SIVAKUMAR",
      image: sivakumar,
      qualifications: ["M.S. General Surgery, M.Ch. Plastic Surgery"],
      expertise: "",
      experience: `Senior Consultant Plastic, Cosmetic & Reconstructive Surgeon Dr. A. Sivakumar, a plastic surgeon in Chennai, is the Director of Desire Aesthetics at Chennai. The Center for Cosmetic Surgery was established to provide patients with both the art and science of plastic surgery.`,
    },
    {
      name: "Dr.THIRUMALVALAVAN",
      image: thirumalavalavan,
      qualifications: [
        `MBBS., MD (Internal Medicine)., D.M (Nephrology) Consultant Physician, Diabetologist, Intensivist & Nephrologist`,
      ],
      expertise: "",
      experience: `Dr. Thirumalvalavan is a nephrologist with 28 years of experience in the field. He earned his MBBS in 1996 and went on to complete his MD in General Medicine in 2004, both from The Tamil Nadu Dr. M.G.R. Medical University. In 2011, he obtained his DM in Nephrology from Stanley Medical College & Hospital, Chennai. Dr. Thirumalvalavan is a member of the Indian Medical Association (IMA). His expertise extends beyond nephrology, encompassing procedures like sigmoidoscopy, kidney transplants, and lithotripsy. He also specializes in adult nephrology.`,
    },
  ];

  const handleHover = (index) => {
    setExpandedIndex(index);
  };

  const handleLeave = () => {
    setExpandedIndex(null);
  };

  return (
    <div id="team" className="pt-10 py-20 w-full h-full container1 mx-auto">
      <div className="flex justify-center flex-col items-center max-md:h-full">
        <div className="flex flex-col justify-center items-start">
          <p className="text-[34px] font-semibold ysabeau">Core Team</p>
          <div className="w-24 h-1.5 mt-5 mb-10 mx-auto rounded-3xl bg-[#066aab]">
            <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
            <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
            <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
            <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
            <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
          </div>
        </div>
        <div className="pt-3 text-[#707070] text-[16px] w-[60%]">
          <p className="text-center sans">
            Meet our dedicated team of medical professionals who bring decades
            of expertise and compassion to every patient interaction. Learn more
            about their qualifications and experience below.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center pt-5">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="relative group w-[500px] h-[500px] m-4 overflow-hidden cursor-pointer"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleLeave}
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-x-0 bottom-0 bg-[#0A2D49] ${
                expandedIndex === index
                  ? "h-auto transition-all duration-300 ease-in-out"
                  : "h-[25%] transition-all duration-300 ease-in-out"
              } flex items-start justify-center`}
              style={{ overflow: "hidden" }}
            >
              <div className="text-center p-4">
                <p className="text-xl font-bold text-white ysabeau">
                  {doctor.name}
                </p>
                <div className="flex gap-4 flex-col pt-4 sans">
                  <p className="text-sm text-white px-4 text-center">
                    {doctor.qualifications.join(", ")}
                  </p>
                  {expandedIndex === index && (
                    <>
                      <p className="text-sm text-white px-4 sans text-center">
                        {doctor.expertise}
                      </p>
                      <p className="text-md text-white capitalize font-light sans px-4 text-center">
                        {doctor.experience}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
