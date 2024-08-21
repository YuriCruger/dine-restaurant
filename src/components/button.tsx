import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

export function Button({ title, className, ...props }: Props) {
  return (
    <button
      className={twMerge(
        "uppercase text-white text-xl bg-almostBlack border border-white py-4 px-5 tracking-wide w-full max-w-64 max-h-20 transition-all hover:bg-white hover:text-almostBlack hover:border-almostBlack",
        className
      )}
      {...props}
    >
      {title}
    </button>
  );
}
