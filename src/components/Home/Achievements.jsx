import React from "react";
import arrow from "../../assets/arrow.png";

const Achievements = () => {
  return (
    <div className="h-full w-full relative bg-awards flex flex-col justify-start items-center">
      <div className="absolute inset-0 bg-white opacity-95"></div>

      <div className="h-[20vh] w-full bg-[#14609D] sans flex items-center justify-center content">
        <p className="text-white ysabeau text-[5vw] md:text-[30px] uppercase text-center">
          Awards and Achievements
        </p>
      </div>
      <div className="w-full flex container1 mx-auto justify-center items-center h-[80%] py-8 lg:px-10">
        <div className="h-auto   content space-y-6 text-black grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 justify-items-center items-center">
          <div className="w-full p-4">
            <div className="flex gap-4 items-start ">
              <img className="h-5 w-5" src={arrow} alt="Arrow icon" />
              <p className="text-start">
                <span className="font-bold">
                  Times Healthcare Achievers Award 2020 – Dr. J. Parthiban,
                </span>{" "}
                Doctor Rising Star in Orthopedics
              </p>
            </div>
          </div>
          <div className="w-full p-4">
            <div className="flex gap-4 items-start ">
              <img className="h-5 w-5" src={arrow} alt="Arrow icon" />
              <p className="text-start mb-4">
                <span className="font-bold">
                  Times Healthcare Achievers Award 2020 has
                </span>{" "}
                recognized SRI HOSPITALS for their contribution to
              </p>
            </div>
          </div>
          <div className="w-full p-4">
            <div className="flex gap-4 items-start ">
              <img className="h-5 w-5" src={arrow} alt="Arrow icon" />
              <p className="text-start">
                <span className="font-bold">Orthopedics Healthcare</span> and
                for creating a remarkable impact on society for the year of 2022
              </p>
            </div>
          </div>
          <div className="w-full p-4">
            <div className="flex gap-4 items-start ">
              <img className="h-5 w-5" src={arrow} alt="Arrow icon" />
              <p className="text-start">
                <span className="font-bold">Orthopedics Healthcare</span> and
                for creating a remarkable impact on society for the year 2023
              </p>
            </div>
          </div>
          <div className="w-full p-4">
            <div className="flex gap-4 items-start ">
              <img className="h-5 w-5" src={arrow} alt="Arrow icon" />
              <p className="text-start">
                Honored by{" "}
                <span className="font-bold">
                  Times Healthcare Achievers Award
                </span>{" "}
                for the contribution to
              </p>
            </div>
          </div>
          <div className="w-full p-4">
            <div className="flex gap-4 items-start ">
              <img className="h-5 w-5" src={arrow} alt="Arrow icon" />
              <p className="text-start">
                <span className="font-bold">
                  Times Healthcare Achievers Award 2020 -
                </span>{" "}
                Best Emerging Orthopedic Hospital
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
