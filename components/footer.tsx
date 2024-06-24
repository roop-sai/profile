import type { NextPage } from "next";
import { memo } from "react";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = memo(({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-lavender flex flex-col items-center justify-start pt-[3.812rem] px-[1.25rem] pb-[2rem] box-border gap-[2.5rem] max-w-full z-[1] text-left text-[0.875rem] text-colour-main-grey-400 font-regular-14 mq750:gap-[1.25rem] ${className}`}
    >
      <div className="w-[90rem] h-[13.5rem] relative bg-lavender hidden max-w-full" />
      <div className="w-[69.375rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq450:flex-wrap mq450:justify-center">
        <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
          <div className="relative leading-[1.5rem] font-medium z-[1]">
            ©2023 Yourcompany
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.562rem] pl-[0rem] text-[1.625rem] text-colour-logo-primary">
          <h2 className="m-0 relative text-inherit leading-[2.375rem] font-black font-inherit inline-block min-w-[5.938rem] z-[2] mq450:text-[1.313rem] mq450:leading-[1.875rem]">
            Landing
          </h2>
        </div>
        <div className="w-[6.813rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border text-center text-[0.75rem] text-colour-secondary-white-100-general">
          <div className="self-stretch rounded-sm bg-colour-main-blue-800 flex flex-row items-start justify-start py-[0.25rem] px-[0rem] whitespace-nowrap z-[1]">
            <div className="h-[1.625rem] w-[6.813rem] relative rounded-sm bg-colour-main-blue-800 hidden" />
            <div className="flex-1 relative leading-[1.125rem] font-medium z-[1]">
              Purchase now
            </div>
          </div>
        </div>
      </div>
      <div className="w-[69.375rem] flex flex-col items-start justify-start gap-[1.25rem] max-w-full text-colour-main-blue-300">
        <div className="self-stretch h-[0.063rem] relative bg-lightgray z-[1]" />
        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq750:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[3.75rem]">
            <div className="relative leading-[1.5rem] inline-block min-w-[2.375rem] z-[1]">
              Home
            </div>
            <a className="[text-decoration:none] relative leading-[1.5rem] text-[inherit] inline-block min-w-[2.375rem] z-[1]">
              About
            </a>
            <div className="relative leading-[1.5rem] inline-block min-w-[3.063rem] z-[1]">
              Contact
            </div>
          </div>
          <div className="w-[12.5rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
              <img
                className="h-[1rem] w-[1rem] relative min-h-[1rem] z-[1]"
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-4.svg"
              />
              <img
                className="h-[1rem] w-[1rem] relative object-cover min-h-[1rem] z-[1]"
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-3@2x.png"
              />
              <img
                className="h-[1rem] w-[1rem] relative min-h-[1rem] z-[1]"
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-2.svg"
              />
              <img
                className="h-[1rem] w-[1rem] relative object-cover min-h-[1rem] z-[1]"
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy@2x.png"
              />
              <img
                className="h-[1rem] w-[1rem] relative object-cover min-h-[1rem] z-[1]"
                loading="lazy"
                alt=""
                src="/iconsocialinstagram@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;