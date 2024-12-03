import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "Brand/Typography",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-16 text-text">
      <h1 className="text-h1 font-semibold">Heading 1</h1>
      <h2 className="text-h2 font-medium">Heading 2</h2>
      <h3 className="text-h3 font-medium">Heading 3</h3>
      <h4 className="text-h4 font-normal">Heading 4</h4>
      <p className="text-body font-bold">Body strong</p>
      <p className="text-body leading-[220%]">Body paragraph</p>
      <p className="text-body">Body</p>
      <p className="text-sub">Subtext</p>
      <code className="font-mono text-mono">Mono</code>
    </div>
  ),
};
