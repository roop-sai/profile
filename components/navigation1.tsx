import type { NextPage } from "next";
import { memo } from "react";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: NextPage<Navigation1Type> = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[15.187rem] box-border max-w-full ${className}`}
    >
      <header className="flex-1 flex flex-row items-start justify-center pt-[0.75rem] px-[1.25rem] pb-[0.625rem] box-border gap-[16.937rem] max-w-full z-[3] text-left text-[1.625rem] text-colour-logo-primary font-regular-14 lg:gap-[8.438rem] mq750:gap-[4.25rem] mq450:gap-[2.125rem]">
        <nav className="m-0 w-[15.313rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border mq750:hidden">
          <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-left text-[0.875rem] text-colour-main-blue-500 font-regular-14">
            <a className="[text-decoration:none] relative leading-[1.5rem] text-[inherit] inline-block min-w-[2.375rem] z-[1]">
              Home
            </a>
            <a className="[text-decoration:none] relative leading-[1.5rem] text-[inherit] inline-block min-w-[2.375rem] z-[1]">
              About
            </a>
            <a className="[text-decoration:none] w-[3.063rem] relative leading-[1.5rem] text-[inherit] inline-block min-w-[3.063rem] z-[1]">
              Contact
            </a>
          </nav>
        </nav>
        <div className="h-[3.75rem] w-[90rem] relative hidden max-w-full" />
        <div className="w-[10.188rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border">
          <a className="[text-decoration:none] relative leading-[2.375rem] font-black text-[inherit] inline-block min-w-[5.938rem] whitespace-nowrap z-[2]">
            Landing
          </a>
        </div>
        <div className="w-[10rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border text-center text-[0.75rem] text-colour-secondary-white-100-general">
          <div className="self-stretch rounded-sm bg-colour-main-blue-800 flex flex-row items-start justify-start py-[0.25rem] px-[0rem] whitespace-nowrap z-[1]">
            <div className="h-[1.625rem] w-[10rem] relative rounded-sm bg-colour-main-blue-800 hidden" />
            <a className="[text-decoration:none] flex-1 relative leading-[1.125rem] font-medium text-[inherit] z-[1]">
              Buy Now
            </a>
          </div>
        </div>
      </header>
    </section>
  );
});

export default Navigation1;