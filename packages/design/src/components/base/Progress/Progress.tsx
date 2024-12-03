import * as RadixProgress from "@radix-ui/react-progress";
import type { ProgressProps as RadixProgressProps } from "@radix-ui/react-progress";
import React from "react";

export type ProgressProps = RadixProgressProps;
export const Progress = ({ value = 50, ...props }: ProgressProps) => {
  return (
    <RadixProgress.Root
      {...props}
      value={value}
      className="relative h-[2.5rem] min-w-128 overflow-hidden rounded-12 border border-stroke bg-fg-2 shadow-material-component"
    >
      <RadixProgress.Indicator
        className="h-full w-full bg-accent-reversed shadow-colored-component transition-transform duration-[300ms] ease-out"
        // @ts-expect-error - The default value is literally defined above so idk
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </RadixProgress.Root>
  );
};
