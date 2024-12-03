import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import {
  IconLogo as IconComponent,
  type IconLogoProps,
  Logo as LogoComponent,
  type LogoProps,
} from "./Brand";

const meta: Meta<typeof LogoComponent> = {
  component: LogoComponent,
  title: "Brand/Brand",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LogoComponent>;

export const Logo: Story = {
  render: (args: LogoProps) => <LogoComponent {...args} />,
};
Logo.args = {
  size: 128,
};

export const Icon: Story = {
  render: (args: IconLogoProps) => <IconComponent {...args} />,
};
Icon.args = {
  size: 128,
  reverseColor: false,
};
