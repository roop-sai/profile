import type { NextPage } from "next";
import { memo } from "react";

export type PricingType = {
  className?: string;
};

const Pricing: NextPage<PricingType> = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[10.768rem] box-border max-w-full text-center text-[2.25rem] text-colour-main-blue-900 font-regular-14 mq750:pb-[7rem] mq750:box-border ${className}`}
    >
      <div className="w-[37.5rem] flex flex-col items-start justify-start gap-[2.325rem] max-w-full mq750:gap-[1.188rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.956rem]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[3rem] font-medium font-inherit z-[1] mq1050:text-[1.813rem] mq1050:leading-[2.375rem] mq450:text-[1.375rem] mq450:leading-[1.813rem]">
            A Price To Suit Everyone
          </h1>
          <div className="self-stretch relative text-[1rem] leading-[1.625rem] text-colour-main-blue-400 z-[1]">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[1.425rem] box-border max-w-full text-[3.125rem] text-colour-main-blue-700">
          <div className="w-[21.875rem] flex flex-col items-start justify-start gap-[0.181rem] max-w-full">
            <div className="self-stretch h-[3.875rem] relative tracking-[1px] leading-[4.125rem] font-medium inline-block whitespace-nowrap z-[2] mq1050:text-[2.5rem] mq1050:leading-[3.313rem] mq450:text-[1.875rem] mq450:leading-[2.5rem]">
              $40
            </div>
            <div className="self-stretch relative text-[1rem] leading-[1.625rem] text-colour-logo-primary z-[1]">
              UI Design Kit
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-[0.875rem] text-colour-main-grey-600">
          <div className="w-[21.875rem] flex flex-col items-start justify-start gap-[0.568rem] max-w-full">
            <div className="self-stretch relative leading-[1.5rem] z-[1]">
              See, One price. Simple.
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[5.062rem] pl-[5rem] text-colour-secondary-white-100-general mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
              <div className="flex-1 rounded-sm bg-colour-main-blue-800 flex flex-row items-start justify-start pt-[0.25rem] px-[0rem] pb-[0.237rem] whitespace-nowrap z-[1]">
                <div className="h-[2rem] w-[11.813rem] relative rounded-sm bg-colour-main-blue-800 hidden" />
                <div className="flex-1 relative leading-[1.5rem] font-medium z-[1]">
                  Purchase Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Pricing;