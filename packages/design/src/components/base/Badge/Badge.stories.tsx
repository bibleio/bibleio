import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Badge, type BadgeProps } from "./Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Base/Badge",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "blue",
        "purple",
      ],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (args: BadgeProps) => <Badge {...args}>Badge</Badge>,
};
Default.args = {
  variant: "primary",
};
