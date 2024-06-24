import type { NextPage } from "next";
import { memo } from "react";

export type CallToActionType = {
  className?: string;
};

const CallToAction: NextPage<CallToActionType> = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[18.05rem] box-border max-w-full text-left text-[2.25rem] text-colour-main-blue-900 font-regular-14 mq1050:pb-[11.75rem] mq1050:box-border mq450:pb-[7.625rem] mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start pt-[7.368rem] pb-[7.256rem] pr-[10.562rem] pl-[13.062rem] box-border relative gap-[10.75rem] max-w-full lg:gap-[5.375rem] lg:pl-[6.5rem] lg:pr-[5.25rem] lg:box-border mq750:gap-[2.688rem] mq750:pt-[4.813rem] mq750:pb-[4.688rem] mq750:pr-[2.625rem] mq750:pl-[3.25rem] mq750:box-border mq450:gap-[1.313rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]" />
        <img
          className="h-[19.5rem] flex-1 relative max-w-full overflow-hidden object-contain min-w-[18.063rem] z-[1]"
          loading="lazy"
          alt=""
          src="/undraw-mention-6k5d@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.131rem] px-[0rem] pb-[0rem] box-border min-w-[18.063rem] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] mq450:gap-[1.25rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[3rem] font-medium font-inherit z-[1] mq1050:text-[1.813rem] mq1050:leading-[2.375rem] mq450:text-[1.375rem] mq450:leading-[1.813rem]">{`Light, Fast & Powerful`}</h1>
              <div className="self-stretch relative text-[1rem] leading-[1.625rem] text-colour-main-blue-400 z-[1]">
                <p className="[margin-block-start:0] [margin-block-end:10px]">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
                <p className="m-0">
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
            </div>
            <div className="w-[9.375rem] rounded-sm bg-colour-main-blue-800 flex flex-row items-start justify-start py-[0.25rem] px-[0rem] box-border whitespace-nowrap z-[1] text-center text-[0.875rem] text-colour-secondary-white-100-general">
              <div className="h-[2rem] w-[9.375rem] relative rounded-sm bg-colour-main-blue-800 hidden" />
              <div className="flex-1 relative leading-[1.5rem] font-medium z-[1]">
                Purchase Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default CallToAction;