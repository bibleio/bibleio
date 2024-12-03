import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Progress, type ProgressProps } from "./Progress";

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: "Base/Progress",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: (args: ProgressProps) => <Progress {...args} />,
};
Default.args = { value: 67 };
