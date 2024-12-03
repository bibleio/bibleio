import * as RadixCheckbox from "@radix-ui/react-checkbox";
import type { CheckboxProps as RadixCheckboxProps } from "@radix-ui/react-checkbox";
import React from "react";

export type CheckboxProps = RadixCheckboxProps;

export const Checkbox = ({ ...props }: RadixCheckboxProps) => {
  return (
    <RadixCheckbox.Root
      className="flex size-[1.875rem] items-center justify-center rounded-8 border border-stroke bg-fg-2 shadow-material-component data-[disabled]:cursor-not-allowed data-[state='checked']:border-accent-reversed data-[disabled]:opacity-33"
      {...props}
    >
      <RadixCheckbox.Indicator className="text-accent-reversed data-[state='checked']:animate-scale-in data-[state='unchecked']:animate-scale-out">
        <IconCheck />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};

const IconCheck = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-check"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
};
