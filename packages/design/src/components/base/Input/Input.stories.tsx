import type { Meta, StoryObj } from "@storybook/react";

import { Input, type InputProps } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Base/Input",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args: InputProps) => <Input {...args} />,
};
Default.args = {
  placeholder: "Input...",
  disabled: false,
};
