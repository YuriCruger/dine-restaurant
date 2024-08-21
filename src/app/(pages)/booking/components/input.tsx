import { ComponentProps, forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ value, ...props }, ref) => {
    return (
      <input
        type="text"
        value={value}
        className="py-2 text-xl border-b border-mediumGray w-full text-almostBlack outline-none transition-all focus:border-almostBlack placeholder:text-mediumGray focus:placeholder:text-almostBlack"
        ref={ref}
        {...props}
      />
    );
  }
);
