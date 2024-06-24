import type { NextPage } from "next";
import { memo } from "react";

export type SmallCardItemsType = {
  className?: string;
};

const SmallCardItems: NextPage<SmallCardItemsType> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`flex-1 flex flex-col items-start justify-start gap-[0.875rem] min-w-[10.375rem] text-left text-[1rem] text-colour-main-blue-900 font-regular-14 ${className}`}
      >
        <img
          className="self-stretch h-[2.25rem] relative max-w-full overflow-hidden shrink-0 object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/elementcardinfocardsmalliconpositionleft@2x.png"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.375rem]">
          <div className="self-stretch relative leading-[1.625rem] font-medium z-[2]">
            Title Goes Here
          </div>
          <div className="self-stretch relative text-[0.75rem] leading-[1.125rem] text-colour-main-grey-600 z-[2]">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</div>
        </div>
      </div>
    );
  }
);

export default SmallCardItems;