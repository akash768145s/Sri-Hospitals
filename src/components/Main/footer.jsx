
import React from "react";

const Footer = () => {


    return (
      <>
        <footer className="self-stretch h-[594px] bg-deepskyblue-200 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[59.5px] pb-[122px] pr-[87px] pl-[130px] box-border gap-[67.6px] max-w-full text-left text-base text-white lg:h-auto mq450:gap-[17px] mq450:pl-5 mq450:pr-5 mq450:box-border mq825:gap-[34px] mq825:pt-[39px] mq825:pb-[79px] mq825:pr-[43px] mq825:pl-[65px] mq825:box-border">
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-px box-border max-w-full shrink-0">
            <div className="w-[1180.4px] flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[74px] pl-0 box-border gap-[196px] min-w-[431px] max-w-full mq450:gap-[49px] mq825:gap-[98px] mq825:pr-[37px] mq825:box-border mq825:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[40px] max-w-full mq825:gap-[20px]">
                    <b className="w-[233px] relative tracking-[2.25px] leading-[24px] flex items-center">
                      ABOUT SRI HOSPITALS
                    </b>
                    <p className="m-0 self-stretch relative text-sm leading-[26px]">
                      <span className="block">{`We at Sri Hospitals aim at providing the best care to our patients with orthopaedic care bring the core strength. Our qualified team of doctors is supported by competent staff. With quality infrastructure and the latest medical technology our goal is to make every patient who comes to us believe in our motto `}</span>
                      <span className="block">We care, We Heal, We Lead.</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[30.5px] px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[85px]">
                  <img
                    className="w-[22px] h-[22px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/bytesizelocation.svg"
                  />
                  <div className="flex flex-col items-start justify-start gap-[68px]">
                    <img
                      className="w-[22px] h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/icoutlineemail.svg"
                    />
                    <img
                      className="w-[22px] h-[22px] relative"
                      loading="lazy"
                      alt=""
                      src="/call.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[455.4px] flex flex-row items-end justify-start [row-gap:20px] max-w-full mq825:flex-wrap">
                <div className="flex-1 flex flex-col items-end justify-start gap-[140.2px] min-w-[198px] mq450:gap-[70px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px] shrink-0 [debug_commit:bf4bc93]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8.5px]">
                      <b className="relative capitalize font-semibold inline-block min-w-[63px]">
                        Address
                      </b>
                      <p className="m-0 relative capitalize ">
                        <span className="block">
                          32/07, Varadharaja Perumal Koil Street,
                        </span>
                        <span className="block">
                          Tondiarpet, Chennai, tN , India – 600081.
                        </span>
                      </p>
                    </div>
                    <div className="w-[249px] flex flex-col items-start justify-start gap-[8px] text-center">
                      <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                        <b className="relative capitalize font-semibold inline-block min-w-[62px]">
                          Email Id
                        </b>
                      </div>
                      <p className="m-0 self-stretch relative capitalize  text-left">
                        <span className="block whitespace-pre-wrap">
                          admin@srihospitals.in srihospitals@yahoo.com
                        </span>
                      </p>
                    </div>
                    <div className="w-[140px] flex flex-col items-start justify-start gap-[12px]">
                      <b className="relative capitalize font-semibold inline-block min-w-[118px]">
                        Phone Number
                      </b>
                      <div className="self-stretch relative text-mid capitalize ">
                        <p className="m-0">+91 88257 27230</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-end py-0 px-10">
                    <img
                      className="h-[21.6px] w-[23.9px] relative shrink-0 [debug_commit:bf4bc93]"
                      loading="lazy"
                      alt=""
                      src="/facebookblack.svg"
                    />
                  </div>
                </div>
                <div className="w-[151.7px] flex flex-row items-start justify-between gap-[20px] ml-[-0.3px] mq450:ml-0">
                  <img
                    className="h-[18px] w-[23.9px] relative"
                    loading="lazy"
                    alt=""
                    src="/twitterblack.svg"
                  />
                  <img
                    className="h-[18.9px] w-[23.9px] relative min-h-[19px]"
                    loading="lazy"
                    alt=""
                    src="/vimeoblack.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0">
                    <img
                      className="w-[23.9px] h-[15.3px] relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/youtubeblack@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1179.7px] box-border flex flex-row items-start justify-between pt-[17px] px-0 pb-[18px] gap-[20px] max-w-full text-smi-6  border-t-[0.9px] border-solid border-white mq825:flex-wrap">
            <div className="relative shrink-0 [debug_commit:bf4bc93]">
              © 2023 All rights reserved
            </div>
            <div className="relative whitespace-pre-wrap text-right shrink-0 [debug_commit:bf4bc93]">
              Terms of Service Privacy Policy
            </div>
          </div>
        </footer>
      </>
    );
}

export default Footer;


