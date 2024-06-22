import React from "react";

const doctors = [
  {
    name: "DR. G. Kuppulakshmi M.D. O & G",
    title: `Consultant Obstetrician & Gynaecologist

`,
    hours: "07:30 Pm – 08:30 Pm",
    days: "Monday – Saturday",
    image: "/doctor-1@2x.png",
  },
];

const DoctorProfile = ({ name, title, hours, days, image }) => (
  <div className="flex flex-col items-start justify-start pt-px px-0 pb-[31px] box-border relative gap-[11px] min-w-[263px] max-w-full">
    <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 rounded-8xl bg-white box-border border-[1px] border-solid border-steelblue-100" />
    <div className="w-full flex justify-center items-end h-[220px] relative rounded-t-8xl rounded-b-none bg-steelblue-100 z-[1]">
      <img
        src={image}
        alt={name}
        className="w-[200px] h-auto object-cover rounded-t-8xl"
      />
    </div>
    <div className="w-full flex flex-row items-start justify-start py-0 px-3.5 box-border max-w-full">
      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
        <div className="flex flex-row items-center w-full justify-end py-0 px-10">
          <b className="text-center ysabeau w-full relative capitalize inline-block z-[1] text-lg md:text-xl lg:text-2xl">
            <p className="">{name}</p>
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-2.5 pr-5 pl-[21px] text-base">
          <div className="w-full sans relative capitalize inline-block shrink-0 z-[1] text-base md:text-lg lg:text-xl">
            {title}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[12px] text-left text-xl text-steelblue-100">
          <div className="flex flex-row items-start justify-end pr-5 pl-5 box-border">
            <b className="w-full sans relative capitalize whitespace-pre-wrap z-[1] text-base md:text-lg lg:text-xl">
              Consultation Hours
            </b>
          </div>
          <div className="flex flex-row sans flex-wrap max-sm:flex-col max-md:flex-col w-full max-lg:flex-col items-center justify-center gap-[24px] z-[1] text-center text-sm text-black">
            <p className="relative capitalize text-center">{days}</p>
            <p className="relative capitalize whitespace-nowrap text-center">
              {hours}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Gyno = () => {
  return (
    <div className="w-full relative pt-[5vh] gap-10 bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-sm text-dimgray-100  mq450:gap-[23px] mq750:gap-[47px]">
      <div className="self-stretch  flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]"></div>

      <div className="relative w-full h-[247px]">
        <img
          className="w-full h-full absolute !m-[0] top-[0] right-[0] left-[0] max-w-full overflow-hidden shrink-0 object-cover opacity-25"
          alt=""
          src="/rectangle-197@2x.png"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#066aab] opacity-70"></div>
        <section className="absolute top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-center text-left text-[38px] text-white ">
          <b className="relative ysabeau max-sm:text-center uppercase z-[1] text-base md:text-lg lg:text-xl xl:text-2xl">
            {`DEPARTMENT OF OBSTETRICS & GYNAECOLOGY`}
          </b>
        </section>
      </div>

      <div className="text-center sans w-full text-[20px] px-5 container1 mx-auto">
        Our team of compassionate OB-GYNs provides comprehensive care for women
        throughout their lives, including normal delivery, LSCS (Lower Segment
        Caesarean Section), high-risk pregnancy management, laparoscopic
        assisted vaginal hysterectomy (LAVH), total laparoscopic hysterectomy
        (TLH), laparoscopic ovarian cystectomy, medical termination of pregnancy
        (MTP), sterilization procedures, urogynaecology surgeries, and
        gynaecology cancer surgeries.
      </div>
      <div className="flex justify-center w-full ">
        <section className="w-full flex justify-center pt-0 pb-[77px] max-w-full text-center text-xl text-black  lg:pb-[50px] lg:box-border mq750:pb-8 mq750:box-border">
          <div className="w-[80%] max-sm:px-5 flex flex-wrap justify-center gap-x-9 gap-y-8 container1 mx-auto">
            {doctors.map((doctor, index) => (
              <DoctorProfile
                key={index}
                name={doctor.name}
                title={doctor.title}
                hours={doctor.hours}
                days={doctor.days}
                image={doctor.image}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gyno;
