import React from "react";
import { Button } from "../../components/Button";
import { Faqs } from "../../components/Faqs";
import { Footer } from "../../components/Footer";
import { TopNavigation } from "../../components/TopNavigation";

export const Element = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1440px] h-[2585px] relative">
        <TopNavigation className="!absolute !left-0 !top-0" logo="/img/logo-2.svg" />
        <div className="absolute w-[1440px] h-[700px] top-[77px] left-0 bg-[url(/static/img/hero-image.png)] bg-[100%_100%]">
          <div className="flex flex-col w-[630px] items-start gap-[20px] pt-[24px] pb-[32px] px-[40px] relative top-[354px] left-[80px] [background:linear-gradient(180deg,rgb(28,189,221)_27.86%,rgb(77,202,121)_100%)]">
            <p className="relative w-[556px] mt-[-1.00px] mr-[-6.00px] [font-family:'Inter',Helvetica] font-bold text-white text-[48px] tracking-[-0.96px] leading-[48px]">
              We Crush Your Competitors, Goals, And Sales Records - Without The B.s.
            </p>
            <Button className="!flex-[0_0_auto]" />
          </div>
        </div>
        <div className="inline-flex items-center gap-[108px] absolute top-[857px] left-[188px]">
          <img className="h-[414px] relative w-[414px] object-cover" alt="Image" src="/img/image-2.png" />
          <div className="flex flex-col w-[542px] items-start gap-[20px] relative">
            <div className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto]">
              <p className="relative w-[507px] mt-[-1.00px] font-poppins-h3-poppins-27px-semibold font-[number:var(--poppins-h3-poppins-27px-semibold-font-weight)] text-[#6b3cc9] text-[length:var(--poppins-h3-poppins-27px-semibold-font-size)] tracking-[var(--poppins-h3-poppins-27px-semibold-letter-spacing)] leading-[var(--poppins-h3-poppins-27px-semibold-line-height)] [font-style:var(--poppins-h3-poppins-27px-semibold-font-style)]">
                Web &amp; Mobile App Development
              </p>
            </div>
            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
              Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor
              content and engagement methods to respond to different intents shown by your potential customers who
              interact with your business online.
            </p>
            <Button className="!flex-[0_0_auto]" text="LEARN MORE" />
          </div>
        </div>
        <div className="inline-flex items-center gap-[108px] absolute top-[1351px] left-[188px]">
          <div className="flex flex-col w-[542px] items-start gap-[20px] relative">
            <div className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto]">
              <div className="relative w-[507px] mt-[-1.00px] font-poppins-h3-poppins-27px-semibold font-[number:var(--poppins-h3-poppins-27px-semibold-font-weight)] text-[#6b3cc9] text-[length:var(--poppins-h3-poppins-27px-semibold-font-size)] tracking-[var(--poppins-h3-poppins-27px-semibold-letter-spacing)] leading-[var(--poppins-h3-poppins-27px-semibold-line-height)] [font-style:var(--poppins-h3-poppins-27px-semibold-font-style)]">
                Digital Strategy Consulting
              </div>
            </div>
            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
              Your digital strategy should complement the overall marketing strategy of the company. In online
              marketing, each component will never work in isolation and every business needs a different mix. We
              provide a clear concept and strategic overview to find the most efficient model for your business.
            </p>
            <Button className="!flex-[0_0_auto]" text="LEARN MORE" />
          </div>
          <img className="h-[416px] relative w-[414px] object-cover" alt="Image" src="/img/image-1.png" />
        </div>
        <Footer
          className="!absolute !left-0 !top-[2319px]"
          hasDiv={false}
          hasGoogleMarketing={false}
          hasGraphQl={false}
          logo="/img/logo-3.svg"
          visible={false}
        />
        <div className="inline-flex flex-col items-center gap-[28px] absolute top-[1847px] left-[297px]">
          <div className="relative w-fit mt-[-1.00px] font-poppins-h3-poppins-27px-semibold font-[number:var(--poppins-h3-poppins-27px-semibold-font-weight)] text-[#6b3cc9] text-[length:var(--poppins-h3-poppins-27px-semibold-font-size)] tracking-[var(--poppins-h3-poppins-27px-semibold-letter-spacing)] leading-[var(--poppins-h3-poppins-27px-semibold-line-height)] whitespace-nowrap [font-style:var(--poppins-h3-poppins-27px-semibold-font-style)]">
            Frequently asked questions
          </div>
          <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
            <Faqs
              className="!flex-[0_0_auto] !bg-[#faf7ff] !w-[846px]"
              property1="clicked"
              text="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
              text1="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
            />
            <Faqs
              className="!flex-[0_0_auto] !bg-[#faf7ff] !w-[846px]"
              property1="default"
              text="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
            />
            <Faqs
              className="!flex-[0_0_auto] !bg-[#faf7ff] !w-[846px]"
              property1="default"
              text="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
