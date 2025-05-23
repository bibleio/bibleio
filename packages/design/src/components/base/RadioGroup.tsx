import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import type {
  RadioGroupItemProps as RadixRadioGroupItemProps,
  RadioGroupProps as RadixRadioGroupProps,
} from "@radix-ui/react-radio-group";
import React, { type ReactNode } from "react";

export type RadioGroupProps = RadixRadioGroupProps & { children: ReactNode };

export const RadioGroup = ({ children, ...props }: RadioGroupProps) => {
  return (
    <RadixRadioGroup.Root
      className="flex flex-col gap-4"
      aria-label="View density"
      {...props}
    >
      {children}
    </RadixRadioGroup.Root>
  );
};

export type RadioGroupItemProps = RadixRadioGroupItemProps & { label: string };

export const RadioGroupItem = ({
  label,
  value,
  ...props
}: RadioGroupItemProps) => {
  return (
    <div className="flex items-center gap-8">
      <RadixRadioGroup.Item
        className="border-stroke bg-fg-2 shadow-material-component data-[state='checked']:border-accent-reversed data-[disabled]:opacity-33 size-[1.875rem] rounded-full border data-[disabled]:cursor-not-allowed"
        id={value}
        value={value}
        {...props}
      >
        <RadixRadioGroup.Indicator className="after:bg-accent-reversed after:data-[state='checked']:animate-scale-in after:data-[state='unchecked']:animate-scale-out relative flex size-full items-center justify-center after:block after:size-[1rem] after:rounded-full after:content-['']" />
      </RadixRadioGroup.Item>
      <label className="text-body text-text leading-none" htmlFor={value}>
        {label}
      </label>
    </div>
  );
};
