/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TopNavigation = ({ className, logo = "/img/logo-1.svg" }) => {
  return (
    <div
      className={`flex w-[1440px] items-center justify-between px-[80px] py-[26px] relative bg-[#6b3cc9] ${className}`}
    >
      <img className="relative w-[238.89px] h-[36.11px] mt-[-11.11px]" alt="Logo" src={logo} />
      <div className="inline-flex items-start gap-[28px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-body-1 font-[number:var(--body-1-font-weight)] text-white text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
          SERVICES
        </div>
        <div className="relative w-fit mt-[-1.00px] font-body-1 font-[number:var(--body-1-font-weight)] text-white text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
          ABOUT US
        </div>
        <div className="relative w-fit mt-[-1.00px] font-body-1 font-[number:var(--body-1-font-weight)] text-white text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
          CONTACT US
        </div>
        <div className="relative w-fit mt-[-1.00px] font-body-1 font-[number:var(--body-1-font-weight)] text-white text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
          CAREERS
        </div>
      </div>
    </div>
  );
};

TopNavigation.propTypes = {
  logo: PropTypes.string,
};
