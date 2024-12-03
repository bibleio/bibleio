import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: "Base/RadioGroup",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem label="Item 1" value="1" />
      <RadioGroupItem label="Item 2" value="2" />
      <RadioGroupItem label="Item 3" value="3" />
      <RadioGroupItem label="Item 4" value="4" />
      <RadioGroupItem label="Disabled item" value="disabled" disabled />
    </RadioGroup>
  ),
};
Default.args = {
  disabled: false,
};
