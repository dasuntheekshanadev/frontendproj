/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const Faqs = ({
  property1,
  className,
  text = "What is Webflow and why is it the best website builder?",
  text1 = "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`w-[761px] flex flex-col items-start gap-[13px] p-[24px] rounded-[7px] bg-[#fdfdfd] relative ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="w-full flex self-stretch items-center gap-[40px] flex-[0_0_auto] relative">
        <p
          className={`[font-family:'Inter',Helvetica] mt-[-1.00px] tracking-[0] text-[22px] flex-1 font-medium leading-[28px] relative ${
            state.property1 === "default" ? "text-black" : "text-[#6b3cc9]"
          }`}
        >
          {text}
        </p>
        <img
          className="self-stretch mr-[-1.00px] flex-[0_0_auto] relative"
          alt="Frame"
          src={state.property1 === "default" ? "/img/frame-35622.svg" : "/img/frame-35623.svg"}
        />
      </div>
      {state.property1 === "clicked" && (
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-neutral-600 text-[18px] tracking-[0] leading-[30px]">
          {text1}
        </p>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "clicked",
        };
    }
  }

  if (state.property1 === "clicked") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

Faqs.propTypes = {
  property1: PropTypes.oneOf(["clicked", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
