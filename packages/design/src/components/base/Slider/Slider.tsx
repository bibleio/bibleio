import * as RadixSlider from "@radix-ui/react-slider";
import type { SliderProps as RadixSliderProps } from "@radix-ui/react-slider";
import React from "react";

export type SliderProps = RadixSliderProps;

export const Slider = ({ ...props }: RadixSliderProps) => {
  return (
    <RadixSlider.Root
      {...props}
      className="h-5 relative flex w-full touch-none select-none items-center data-[orientation='vertical']:h-full data-[disabled]:cursor-not-allowed data-[orientation='vertical']:flex-col"
    >
      <RadixSlider.Track className="relative h-[2px] grow rounded-full bg-stroke data-[orientation='vertical']:h-full data-[orientation='vertical']:w-[2px] data-[disabled]:opacity-33">
        <RadixSlider.Range className="absolute rounded-full bg-accent-reversed data-[orientation='horizontal']:h-full data-[orientation='vertical']:w-full" />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="block h-[1.5rem] w-[0.75rem] rounded-full border border-stroke bg-accent-reversed shadow-colored-component outline-none duration-150 ease-out enabled:hover:scale-110 data-[orientation='vertical']:h-12 data-[orientation='vertical']:w-24 data-[disabled]:contrast-50 dark:data-[disabled]:brightness-50"
        aria-label="Volume"
      />
    </RadixSlider.Root>
  );
};
