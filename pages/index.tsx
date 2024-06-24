import type { NextPage } from "next";
import Head from "next/head";
import Navigation1 from "../components/navigation1";
import UndrawMobileLoginIkmvEle from "../components/undraw-mobile-login-ikmv-ele";
import FrameComponent from "../components/frame-component";
import CallToAction from "../components/call-to-action";
import Pricing from "../components/pricing";
import Footer from "../components/footer";

const LandingPage: NextPage = () => {
  return (
    <div className="w-full relative bg-colour-secondary-white-100-general overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-[3.125rem] text-colour-main-blue-900 font-regular-14">
      <div className="self-stretch h-[64.063rem] relative hidden" />
      <Navigation1 />
      <div className="w-[54.069rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[24.125rem] box-border max-w-full mq1050:pb-[15.688rem] mq1050:box-border mq450:pb-[10.188rem] mq450:box-border">
        <div className="w-[33.688rem] flex flex-col items-start justify-start gap-[4.312rem] max-w-full mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[1px] leading-[4.125rem] font-medium font-inherit z-[2] mq1050:text-[2.5rem] mq1050:leading-[3.313rem] mq450:text-[1.875rem] mq450:leading-[2.5rem]">{`Introduce Your Product Quickly & Effectively`}</h1>
            <div className="self-stretch relative text-[1.125rem] leading-[1.875rem] text-colour-main-blue-500 z-[2]">
              <p className="[margin-block-start:0] [margin-block-end:14px]">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
              <p className="m-0">
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
          <div className="w-[25.519rem] flex flex-row flex-wrap items-start justify-start gap-[1.881rem] max-w-full text-center text-[1rem] text-colour-secondary-white-100-general mq450:gap-[0.938rem]">
            <div className="flex-1 rounded-sm bg-colour-main-blue-800 flex flex-row items-start justify-start py-[0.312rem] px-[0rem] box-border min-w-[7.688rem] whitespace-nowrap z-[1]">
              <div className="h-[2.25rem] w-[11.813rem] relative rounded-sm bg-colour-main-blue-800 hidden" />
              <div className="flex-1 relative leading-[1.625rem] font-medium z-[1]">
                Purchase UI Kit
              </div>
            </div>
            <div className="flex-1 rounded-sm box-border flex flex-row items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] min-w-[7.688rem] z-[2] text-colour-main-blue-900 border-[2px] border-solid border-colour-main-blue-900">
              <div className="h-[2.25rem] w-[11.813rem] relative rounded-sm box-border hidden border-[2px] border-solid border-colour-main-blue-900" />
              <a className="[text-decoration:none] flex-1 relative leading-[1.625rem] font-medium text-[inherit] whitespace-nowrap z-[1]">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <UndrawMobileLoginIkmvEle />
      <FrameComponent />
      <section className="ml-[-0.25rem] mb-[1.5rem] self-stretch flex flex-row items-end justify-start pt-[5.737rem] px-[10.312rem] pb-[5.637rem] box-border relative gap-[7.812rem] max-w-full text-left text-[2.25rem] text-colour-main-blue-900 font-regular-14 lg:flex-wrap lg:gap-[3.875rem] lg:pl-[5.125rem] lg:pr-[5.125rem] lg:box-border mq750:gap-[1.938rem] mq750:pt-[3.75rem] mq750:px-[2.563rem] mq750:pb-[3.688rem] mq750:box-border mq450:gap-[1rem]">
        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]" />
        <img
          className="h-[24.188rem] flex-1 relative max-w-full overflow-hidden min-w-[21.938rem] z-[1] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/undraw-social-influencer-sgsv.svg"
        />
        <div className="w-[27.813rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[4.812rem] box-border min-w-[27.813rem] min-h-[19.188rem] max-w-full lg:flex-1 mq1050:min-w-full">
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
      </section>
      <CallToAction />
      <Pricing />
      <Footer />
      <img
        className="ml-[-38.769rem] w-[159.181rem] h-[58.625rem] relative mix-blend-normal max-w-[177%] shrink-0"
        alt=""
        src="/rectangle.svg"
      />
    </div>
  );
};

export default LandingPage;