import { forwardRef, SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: (string | number)[];
  placeholder: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, placeholder, value, ...props }, ref) => {
    const emptyValueTextColor =
      value === "" ? "text-mediumGray" : "text-almostBlack";

    return (
      <select
        ref={ref}
        className={`text-almostBlack text-xl py-2 border-b outline-none bg-transparent w-full border-mediumGray focus:border-almostBlack
        ${emptyValueTextColor}`}
        value={value}
        {...props}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-almostBlack">
            {option}
          </option>
        ))}
      </select>
    );
  }
);
