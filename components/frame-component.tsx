import type { NextPage } from "next";
import { memo } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = memo(
  ({ className = "" }) => {
    return (
      <section
        className={`self-stretch h-[35.563rem] relative max-w-full text-left text-[2.25rem] text-colour-main-blue-900 font-regular-14 lg:h-auto lg:min-h-[569] ${className}`}
      >
        <img
          className="absolute top-[0rem] left-[26.081rem] w-[93.125rem] h-[72.563rem] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/designer-1@2x.png"
        />
        <div className="absolute top-[0rem] left-[-0.25rem] w-full flex flex-row items-end justify-center pt-[7.65rem] pb-[8.175rem] pr-[10.312rem] pl-[12.187rem] box-border gap-[9.687rem] max-w-full h-full lg:flex-wrap lg:gap-[4.813rem] lg:pl-[6.063rem] lg:pr-[5.125rem] lg:box-border mq750:gap-[2.438rem] mq750:pl-[3rem] mq750:pr-[2.563rem] mq750:box-border mq450:gap-[1.188rem] mq450:pl-[1.25rem] mq450:box-border">
          <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]" />
          <img
            className="h-[19.738rem] flex-1 relative max-w-full overflow-hidden object-contain min-w-[19.5rem] z-[1]"
            loading="lazy"
            alt=""
            src="/undraw-happy-news-hxmt@2x.png"
          />
          <div className="w-[27.813rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[2.262rem] box-border min-w-[27.813rem] max-w-full lg:flex-1 mq1050:min-w-full">
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
          </div>
        </div>
      </section>
    );
  }
);

export default FrameComponent;