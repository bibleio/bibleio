import type React from "react";

export type InputProps = React.HTMLAttributes<HTMLInputElement>;

export const Input = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="flex h-[2.5rem] items-center rounded-12 border border-stroke bg-fg-2 px-16 text-body text-text placeholder-text-subtle shadow-material-component outline-none placeholder:text-body focus:border-accent-reversed disabled:cursor-not-allowed disabled:opacity-33"
    />
  );
};
