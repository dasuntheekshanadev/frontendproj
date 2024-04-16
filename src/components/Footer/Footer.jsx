/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Footer = ({
  className,
  logo = "/img/logo-1.svg",
  hasGraphQl = true,
  hasDiv = true,
  hasGoogleMarketing = true,
  visible = true,
}) => {
  return (
    <div
      className={`flex flex-col w-[1440px] items-center gap-[40px] pt-[40px] pb-[20px] px-[80px] relative bg-[#6b3cc9] ${className}`}
    >
      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[413px] items-start gap-[20px] relative">
          <img className="relative w-[238.89px] h-[36.11px] mt-[-11.11px]" alt="Logo" src={logo} />
          <p className="relative self-stretch [font-family:'Lato',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve
            single objective - your business results.
          </p>
        </div>
        <div className="inline-flex items-start gap-[128px] relative flex-[0_0_auto]">
          <div className="flex w-[197px] flex-col items-start gap-[12px] relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-white text-[21px] tracking-[0] leading-[normal] whitespace-nowrap">
              Our Technologies
            </div>
            <div className="inline-flex flex-[0_0_auto] flex-col items-start gap-[12px] relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Reactjs
              </div>
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Gatsby
              </div>
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Nextjs
              </div>
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Nodejs
              </div>
              {hasGraphQl && (
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                  Graphql
                </div>
              )}

              {hasDiv && (
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                  Laravel
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col w-[197px] items-start gap-[12px] relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-white text-[21px] tracking-[0] leading-[normal] whitespace-nowrap">
              Our Services
            </div>
            <div className="flex self-stretch w-full flex-[0_0_auto] flex-col items-start gap-[12px] relative">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Social Media Marketing
              </div>
              <p className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Web &amp; Mobile App Development
              </p>
              <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Data &amp; Analytics
              </div>
              {hasGoogleMarketing && (
                <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                  Google Marketing Solutions
                </div>
              )}

              {visible && (
                <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                  Search Engine Optimization
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[630px] items-center gap-[8px] relative flex-[0_0_auto]">
        <img className="relative self-stretch w-full h-px mt-[-1.00px] object-cover" alt="Line" src="/img/line-6.svg" />
        <div className="inline-flex items-center justify-center gap-[16px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
            Privacy Policy
          </div>
          <img className="relative w-px h-[16px] object-cover" alt="Line" src="/img/line-7.svg" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
            Terms &amp; Conditions
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  logo: PropTypes.string,
  hasGraphQl: PropTypes.bool,
  hasDiv: PropTypes.bool,
  hasGoogleMarketing: PropTypes.bool,
  visible: PropTypes.bool,
};
