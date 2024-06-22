import React from "react";
import patientCare from "../../assets/patientCare.jpg";
import hospital from "../../assets/hospital.png";
import stethoscope from "../../assets/stethoscope.png";
import protection from "../../assets/protection.png";

const PatientCare = () => {
  return (
    <div className="w-full lg:bg-[#F6FBFF]">
      <div className="flex justify-center items-center w-full md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-evenly max-sm:flex-col items-center justify-center container1 mx-auto py-10 h-full">
          <div className="lg:mr-12 mb-8 lg:mb-0 lg:max-w-[45%]">
            <img
              className="w-full lg:w-auto h-auto max-sm:px-10"
              src={patientCare}
              alt=""
            />
          </div>
          <div className="lg:w-1/2 lg:ml-12 flex flex-col justify-center items-start mt-8 lg:mt-0 lg:max-w-[55%]">
            <div className="text-center lg:text-left">
              <p className="text-lg ysabeau lg:text-4xl font-semibold ">
                International{" "}
                <span className="text-[#71C043] ysabeau">Patient Care</span>
              </p>
              <p className="text-sm sans text-justify lg:text-base text-[#707070] mt-3  max-sm:px-10">
                At our hospital, we are dedicated to providing exceptional
                medical care to patients from all around the world. We
                understand the unique needs and expectations of international
                patients and strive to exceed them in every aspect of their
                healthcare journey.
              </p>
            </div>
            <div className="mt-8 max-sm:px-3 sans">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white flex justify-center items-center mr-4">
                  <img
                    className="w-8 h-8 lg:w-10 lg:h-10"
                    src={stethoscope}
                    alt=""
                  />
                </div>
                <p className="text-xs lg:text-sm capitalize">
                  Highly-renowned and experienced doctors
                </p>
              </div>
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white flex justify-center items-center mr-4">
                  <img
                    className="w-8 h-8 lg:w-10 lg:h-10"
                    src={hospital}
                    alt=""
                  />
                </div>
                <p className="text-xs lg:text-sm capitalize">
                  First-rate medical equipment and infrastructure facilities
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white flex justify-center items-center mr-4">
                  <img
                    className="w-8 h-8 lg:w-10 lg:h-10"
                    src={protection}
                    alt=""
                  />
                </div>
                <p className="text-xs lg:text-sm capitalize">
                  Best Standard of Care for You and Your Family
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCare;
