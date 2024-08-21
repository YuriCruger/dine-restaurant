import { ComponentProps } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import Lines from "../../../../../public//lines.svg";
import { Separator } from "@/components/separator";

type Props = ComponentProps<"div"> & {
  title: string;
  description: string;
  firstContent?: boolean;
};

export function ExperienceCard({
  title,
  description,
  firstContent = false,
  className,
  ...props
}: Props) {
  const firstContentImageStyles =
    "bg-enjoyable-place-mobile md:bg-enjoyable-place-tablet xl:bg-enjoyable-place-desktop -mt-12";
  const secondContentImageStyles =
    "bg-locally-sourced-mobile md:bg-locally-sourced-tablet xl:bg-locally-sourced-desktop xl:-mb-12 xl:shadow-lg xl:shadow-white/20";

  const firstContentBackgroundStyles =
    "xl:-left-[3rem] 2xl:-left-[14rem] rounded-r-md";
  const secondContentBackgroundStyles =
    "xl:-right-[3rem] 2xl:-right-[14rem] rounded-l-md";

  return (
    <div
      className={twMerge(
        "relative flex flex-col items-center gap-5 xl:flex-row",
        className
      )}
      {...props}
    >
      <div
        className={`relative z-10 bg-center bg-no-repeat bg-cover w-[327px] min-h-[400px] md:h-[360px] md:w-[573px] xl:h-[720px] xl:w-[540px]
            ${firstContent ? firstContentImageStyles : secondContentImageStyles} `}
      >
        {!firstContent && (
          <Image
            src={Lines}
            alt="lines"
            width={0}
            height={0}
            sizes="100vw"
            className="hidden absolute translate-y-[-50%] top-[50%] -right-[80px] z-20 2xl:block"
          />
        )}
      </div>

      <div
        className={`hidden absolute z-0 opacity-15 top-[50%] w-full h-[18rem] translate-y-[-50%] bg-lightGray xl:block
             ${firstContent ? firstContentBackgroundStyles : secondContentBackgroundStyles}`}
      />

      <div className="z-10 flex flex-col items-center text-center gap-8 max-w-sm xl:text-start xl:items-start">
        <Separator />

        <h3 className="text-darkCian font-bold text-3xl md:text-4xl xl:text-5xl">
          {title}
        </h3>

        <p className="text-darkCian md:text-xl xl:text-2xl">{description}</p>
      </div>
    </div>
  );
}
