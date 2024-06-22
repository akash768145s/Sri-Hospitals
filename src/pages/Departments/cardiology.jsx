import React from "react";

const doctors = [
  {
    name: "DR. ASHA MAZHILMARAN.",
    degrees: "MD (INTERNAL MEDICINE), DNB., D.M (CARDIOLOGY)",
    title: "CONSULTANT CARDIOLOGIST",
    hours: "CONSULTATION BY APPOINTMENTS",
    days: "",
    image: "/doctor-1@2x.png",
  },
  {
    name: "DR. K. J. PREM KUMAR",
    degrees: "M.D., DM., CEPS (USA)",
    title: "CULTANT CARDIOLOGY & ELECTROPHYSIOLOGYONS",
    hours: "05:00 PM TO 07:00 PM",
    days: "MONDAY – SATURDAY",
    image: "/doctor-1-1@2x.png",
  },
  {
    name: "DR. RAGHURAM MBBS MD.",
    degrees: "MBBS MD. DM.",
    title: "CONSULTANT CARDIOLOGIST",
    hours: "10:00 am to 04:00 pm",
    days: "MONDAY – SATURDAY",
    image: "/doctor-1-1@2x.png",
  },
  {
    name: "DR.A.PERIAKARUPPAN,",
    degrees: "MD, DNB, DM",
    title: "Interventional Radiologist",
    hours: "CONSULTATION BY APPOINTMENTS",
    days: "",
    image: "/doctor-1-1@2x.png",
  },
  {
    name: "DR.JAYARAJ VISWANATHAN.,",
    degrees: "MRCS., FRCR, CCT-IR(UK)",
    title: "Interventional Radiologist",
    hours: "CONSULTATION BY APPOINTMENTS",
    days: "",
    image: "/doctor-1-1@2x.png",
  },
  {
    name: "DR. SESHANK",
    degrees: "MCH (CARDIOTHORACIC)",
    title: "CONSULTANT CARDIOTHORACIC SURGEON",
    hours: "CONSULTATION BY APPOINTMENTS",
    days: "",
    image: "/doctor-1-1@2x.png",
  },
];

const DoctorProfile = ({ name, title, degrees, hours, days, image }) => (
  <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-[31px] box-border relative gap-[11px] min-w-[263px] max-w-full">
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
        <div className="w-full flex flex-col items-start justify-start py-0 px-3.5 box-border max-w-full flex-grow">
          <div className="flex flex-col items-center justify-center py-0 px-10 w-full">
            <div className="flex flex-row items-start justify-end py-0 px-10">
              <b className="w-full relative capitalize inline-block z-[1] text-lg md:text-xl lg:text-2xl">
                <p className="ysabeau m-0">{name}</p>
              </b>
            </div>
            <div className="w-full sans font-medium relative capitalize inline-block z-[1] text-base md:text-lg lg:text-xl text-center mt-2">
              {degrees}
            </div>
          </div>
          <div className="self-stretch sans  flex flex-row items-start justify-center pt-2 pb-2.5 pr-5 pl-[21px] text-base">
            <div className="w-full relative capitalize inline-block shrink-0 z-[1] text-base md:text-sm lg:text-md text-center mt-2">
              {title}
            </div>
          </div>
        </div>
        <div className="self-stretch sans flex flex-col items-center justify-start gap-[12px] text-left text-xl text-steelblue-100">
          <div className="flex flex-row items-start justify-end pr-5 pl-5 box-border">
            <b className="w-full relative capitalize whitespace-pre-wrap z-[1] text-base md:text-lg lg:text-xl">
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

const Cardiology = () => {
  return (
    <div className="w-full relative pt-[5vh] bg-white overflow-hidden flex flex-col items-start justify-start gap-10 leading-[normal] tracking-[normal] text-left text-sm text-dimgray-100 mq450:gap-[23px] mq750:gap-[47px]">
      <div className="self-stretch  flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]"></div>

      <div className="relative w-full h-[247px]">
        <img
          className="w-full h-full absolute !m-[0] top-[0] right-[0] left-[0] max-w-full overflow-hidden shrink-0 object-cover opacity-25"
          alt=""
          src="/rectangle-197@2x.png"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#066aab] opacity-70"></div>
        <section className="absolute top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-center text-left text-[38px] text-white">
          <b className="relative ysabeau uppercase text-center z-[1] text-base md:text-lg lg:text-xl xl:text-2xl">
            {`Department of Cardiology &  Interventional Radiology`}
          </b>
        </section>
      </div>

      <div className="text-center  w-full text-[20px] px-5 container1 mx-auto sans">
        Sri Hospitals brings together a team of highly-skilled cardiologists and
        interventional radiologists in Chennai. We are dedicated to providing
        comprehensive care for your heart and vascular health. We offer, Cardiac
        Catheterization Coronary Angioplasty and Stenting Electrocardiograms
        (ECGs) Echocardiograms (Echos) Peripheral Vascular Interventions, and
        more..
      </div>
      <div className="flex justify-center w-full ">
        <section className="w-[80%] flex justify-center pt-0 pb-[77px] max-w-full text-center text-xl text-black  lg:pb-[50px] lg:box-border mq750:pb-8 mq750:box-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 container1 mx-auto">
            {doctors.map((doctor, index) => (
              <DoctorProfile
                key={index}
                name={doctor.name}
                title={doctor.title}
                hours={doctor.hours}
                days={doctor.days}
                degrees={doctor.degrees}
                image={doctor.image}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cardiology;
