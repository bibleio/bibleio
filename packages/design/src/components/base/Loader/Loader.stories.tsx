import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: "Base/Loader",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  render: () => <Loader />,
};
