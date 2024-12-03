import type { Meta, StoryObj } from "@storybook/react";

import { Button, type ButtonProps } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Base/Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "success", "warning", "danger"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args: ButtonProps) => <Button {...args}>Button</Button>,
};
Default.args = {
  variant: "primary",
  fullWidth: false,
  disabled: false,
};
