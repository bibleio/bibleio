import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Slider } from "./Slider";
import type { SliderProps } from "./Slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "Base/Slider",
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: "radio",
    },
  },
  decorators: [
    (Story) => (
      <div className="flex h-[50vh] w-[50vw] p-32">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: (args: SliderProps) => <Slider {...args} />,
};
Default.args = {
  inverted: false,
  orientation: "horizontal",
  disabled: false,
};
