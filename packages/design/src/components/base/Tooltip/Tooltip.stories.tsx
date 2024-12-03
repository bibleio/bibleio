import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "../Button";
import {
  Tooltip,
  TooltipContent,
  type TooltipProps,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: "Base/Tooltip",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args: TooltipProps) => (
    <TooltipProvider>
      <Tooltip {...args}>
        <TooltipTrigger>
          <Button>Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>Tooltip</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
Default.args = {
  delayDuration: 0,
};
