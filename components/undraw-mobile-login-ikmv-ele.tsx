import type { NextPage } from "next";
import { memo } from "react";
import SmallCardItems from "./small-card-items";

export type UndrawMobileLoginIkmvEleType = {
  className?: string;
};

const UndrawMobileLoginIkmvEle: NextPage<UndrawMobileLoginIkmvEleType> = memo(
  ({ className = "" }) => {
    return (
      <section
        className={`self-stretch bg-black overflow-hidden flex flex-row flex-wrap items-start justify-center pt-[6.85rem] px-[10.312rem] pb-[6.756rem] box-border gap-[1.875rem] max-w-full z-[1] text-left text-[2.25rem] text-colour-main-blue-900 font-regular-14 mq750:gap-[0.938rem] mq750:pt-[4.438rem] mq750:px-[5.125rem] mq750:pb-[4.375rem] mq750:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border ${className}`}
      >
        <div className="h-[46.375rem] w-[90rem] relative hidden max-w-full" />
        <div className="flex-1 flex flex-col items-start justify-start pt-[3.15rem] px-[0rem] pb-[0rem] box-border min-w-[21.938rem] max-w-full mq750:pt-[2.063rem] mq750:box-border mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[5rem] mq750:gap-[2.5rem] mq450:gap-[1.25rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[3rem] font-medium font-inherit z-[2] mq1050:text-[1.813rem] mq1050:leading-[2.375rem] mq450:text-[1.375rem] mq450:leading-[1.813rem]">{`Light, Fast & Powerful`}</h1>
              <div className="self-stretch relative text-[1rem] leading-[1.625rem] text-colour-main-blue-400 z-[2]">
                <p className="[margin-block-start:0] [margin-block-end:10px]">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
                <p className="m-0">
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[1.875rem] text-[1rem] mq750:flex-wrap">
              <SmallCardItems />
              <SmallCardItems />
            </div>
          </div>
        </div>
        <img
          className="h-[32.769rem] flex-1 relative max-w-full overflow-hidden object-contain min-w-[21.938rem] z-[2] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/undraw-mobile-login-ikmv@2x.png"
        />
      </section>
    );
  }
);

export default UndrawMobileLoginIkmvEle;