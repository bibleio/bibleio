import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "success", "warning", "danger"],
      control: { type: "radio" },
    },
    fullWidth: {
      options: [false, true],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args: ButtonProps) => <Button {...args}>Bibleio</Button>,
};
Default.args = {
  variant: "primary",
  fullWidth: false,
};
