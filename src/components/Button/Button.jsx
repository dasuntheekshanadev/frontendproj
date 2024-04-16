/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Button = ({ className, text = "GET FREE CONSULTATION" }) => {
  return (
    <button
      className={`all-[unset] box-border inline-flex items-start gap-[8px] px-[20px] py-[12px] relative bg-[#f28d35] rounded-[4px] ${className}`}
    >
      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-white text-[14px] tracking-[-0.28px] leading-[14px] whitespace-nowrap">
        {text}
      </div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};
