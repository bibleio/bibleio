import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import {
  ListItem,
  ListItemCollapsible,
  type ListItemCollapsibleProps,
  type ListItemProps,
} from "./ListItem";

const meta: Meta<typeof ListItem> = {
  component: ListItem,
  title: "Base/List Item",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  render: (args: ListItemProps) => <ListItem {...args} />,
};
Default.args = {
  text: "List Item",
  selected: false,
};

export const Collapsible: Story = {
  render: (args: ListItemCollapsibleProps) => (
    <ListItemCollapsible {...args}>
      <ListItem text="hello world" />
      <ListItem text="hello world" />
      <ListItemCollapsible text="sub">
        <ListItem text="hello world" />
        <ListItemCollapsible text="subsub">
          <ListItem text="hello world" />
          <ListItemCollapsible text="subsubsub">
            <ListItem text="hello world" />
          </ListItemCollapsible>
        </ListItemCollapsible>
      </ListItemCollapsible>
    </ListItemCollapsible>
  ),
};
Collapsible.args = {
  text: "List Item",
  selected: false,
  defaultOpen: false,
};
