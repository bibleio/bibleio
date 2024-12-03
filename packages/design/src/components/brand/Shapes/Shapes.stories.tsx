import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Bible as Bible2,
  Circle as Circle2,
  Cross as Cross2,
  Hexagon as Hexagon2,
  type ShapesProps,
  Star as Star2,
  Triangle as Triangle2,
} from "./Shapes";

const meta: Meta<typeof Cross2> = {
  component: Cross2,
  title: "Brand/Shapes",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Cross2>;

export const Cross: Story = {
  render: (args: ShapesProps) => <Cross2 {...args} />,
};

export const Bible: Story = {
  render: (args: ShapesProps) => <Bible2 {...args} />,
};

export const Circle: Story = {
  render: (args: ShapesProps) => <Circle2 {...args} />,
};

export const Star: Story = {
  render: (args: ShapesProps) => <Star2 {...args} />,
};

export const Triangle: Story = {
  render: (args: ShapesProps) => <Triangle2 {...args} />,
};

export const Hexagon: Story = {
  render: (args: ShapesProps) => <Hexagon2 {...args} />,
};
