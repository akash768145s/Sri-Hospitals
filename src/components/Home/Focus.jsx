import React from "react";
import serviceHours from "../../assets/service-hours.png";
import ir from "../../assets/ir.png";
import healthcare from "../../assets/healthcare.png";
import cardiac from "../../assets/cardiac.png";

const Focus = () => {
  return (
    <div className="h-full w-full">
      <div
        className="relative h-full grid items-center bg-cover bg-center"
        style={{ backgroundImage: `url(/rectangle-197@2x.png)` }}
      >
        <div className="absolute inset-0 bg-[#a6ce39] opacity-85"></div>
        <div className="relative h-full w-full text-white">
          <div className="h-auto py- w-full">
            <div className="flex justify-end w-full px-6 py-6 relative container1 mx-auto ">
              <div className="flex justify-center items-center w-full flex-col pt-10">
                <div className="flex flex-col justify-center items-start text-xs font-inter font-semibold">
                  <p className="text-[34px] font-normal ysabeau">SRI CARES</p>
                  <div className="w-24 h-1.5 mt-5 mb-10 mx-auto rounded-3xl bg-[#066aab]">
                    <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
                    <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
                    <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
                    <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
                    <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
                  </div>
                </div>
                <div className="pt-2 flex justify-center items-center w-[80%] max-sm:w-full">
                  <p className="sans text-center text-white font-medium">
                    With quality infrastructure and the latest medical
                    technology, our goal is to make every patient who comes to
                    us believe in our motto: We care, We Heal, We Lead. From
                    orthopedics to pediatric care, Sri Hospitals offers a wide
                    range of treatments to patients of all age groups. This
                    medical institution is also a 24/7 accident and emergency
                    hospital in Tondiarpet, Chennai. Trust us to treat you with
                    compassion, empathy, and care.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-[2rem] w-full px-10">
              <div className="h-[450px] w-[290px] shadow-sm bg-[#066aab]  bg-opacity-80 rounded-md flex flex-col justify-evenly items-center p-6">
                <img className="h-[93px] w-[112px]" src={serviceHours} alt="" />
                <div>
                  <p className="ysabeau text-center text-[18px] font-bold text-white">
                    Orthopedics & Trauma Care
                  </p>
                </div>
                <div className="w-[221px] text-[14px] text-white">
                  <p className="sans text-center">
                    At Sri Hospitals, we offer exceptional care for severe
                    injuries to the joints, bones, and soft tissue. We treat a
                    wide range of injuries, from hairline fractures to
                    life-threatening accidents.
                  </p>
                </div>
                <a href="/departments/trauma-care">
                  <button className="bg-[#00AEEF] px-6 py-2 rounded-md ">
                    <p className="text-xs  text-white font-bold">Explore</p>
                  </button>
                </a>
              </div>

              <div className="h-[450px] w-[290px] shadow-sm bg-[#066aab] bg-opacity-80 rounded-md flex flex-col justify-evenly items-center p-6">
                <img className="h-[93px] w-[112px]" src={cardiac} alt="" />
                <div>
                  <p className="ysabeau text-center text-[18px] font-bold text-white">
                    Cardiology
                  </p>
                </div>
                <div className="w-[221px] text-[14px] text-white">
                  <p className=" sans text-center">
                    Our cardiology department is equipped with cutting-edge
                    technology for diligent diagnosis and evidence-based
                    treatment for multiple cardiac problems. Our cardiac
                    consultants are highly trained, committed, and
                    knowledgeable.
                  </p>
                </div>
                <a href="/departments/cardiology">
                  <button className="bg-[#00AEEF] px-6 py-2 rounded-md">
                    <p className="text-xs text-white font-bold">Explore</p>
                  </button>
                </a>
              </div>

              <div className="h-[450px] w-[290px] shadow-sm bg-[#066aab] bg-opacity-80 rounded-md flex flex-col justify-evenly items-center p-6">
                <img className="h-[93px] w-[112px]" src={ir} alt="" />
                <div>
                  <p className="ysabeau text-center text-[18px] font-bold text-white">
                    Interventional <br /> Radiology
                  </p>
                </div>
                <div className="w-[221px] text-[14px] text-white">
                  <p className="sans text-center">
                    Our interventional radiology care department is equipped
                    with artificial intelligence for minimally invasive,
                    image-guided diagnosis and treatment of various diseases.
                    These treatments are less risky, and the recovery time is
                    faster.
                  </p>
                </div>
                <a href="/departments/radiology">
                  <button className="bg-[#00AEEF] px-6 py-2 rounded-md">
                    <p className="text-xs text-white font-bold">Explore</p>
                  </button>
                </a>
              </div>

              <div className="h-[450px] w-[290px] shadow-sm bg-[#066aab] bg-opacity-80 rounded-md flex flex-col justify-evenly items-center p-6">
                <img className="h-[93px] w-[112px]" src={healthcare} alt="" />
                <div>
                  <p className="ysabeau text-center text-[18px] font-bold text-white">
                    New Born & <br /> Pediatric Care
                  </p>
                </div>
                <div className="w-[221px] text-[14px] text-white">
                  <p className="sans text-center">
                    We cater to the unique needs of infants, children, and
                    adolescents. Our pediatric department includes a wide range
                    of services, from routine check-ups and immunizations to the
                    diagnosis and treatment of complex medical conditions.
                  </p>
                </div>
                <a href="/departments/pediatric-newborn">
                  <button className="bg-[#00AEEF] px-6 py-2 rounded-md">
                    <p className="text-xs text-white font-bold">Explore</p>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-end flex-col items-center h-auto py-12">
            <div className="flex flex-col justify-center items-start">
              <p className="ysabeau text-[34px] font-semibold uppercase tracking-wider text-center">
                About sri Hospitals
              </p>
              <div className="w-24 h-1.5 mt-5 mb-10 mx-auto rounded-3xl bg-[#066aab]">
                <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
                <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
                <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
                <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
                <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
              </div>
            </div>
            <div className="pt-3 text-white text-[16px] flex justify-center max-sm:px-10">
              <p className="sans text-center w-[80%] px-10 font-medium max-sm:w-full max-sm:px-3">
                We at Sri Hospitals aim to provide the best care to our
                patients, with orthopedic care being our core strength. The
                qualified team of doctors is supported by competent staff. With
                quality infrastructure and the latest medical technology our
                goal is to make every patient who comes to us believe in our
                motto We care, We Heal, We Lead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;
