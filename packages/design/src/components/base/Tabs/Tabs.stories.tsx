import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import {
  TabContent,
  TabItemPillButton,
  TabItemText,
  Tabs,
  TabsList,
} from "./Tabs";
import type { TabsProps } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "Base/Tabs",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const TextTrigger: Story = {
  render: (args: TabsProps) => (
    <Tabs {...args}>
      <TabsList>
        <TabItemText value="tab1">Tab 1</TabItemText>
        <TabItemText value="tab2">Tab 2</TabItemText>
        <TabItemText value="tab3" disabled>
          Tab 3
        </TabItemText>
      </TabsList>
      <TabContent value="tab1">This is tab 1</TabContent>
      <TabContent value="tab2">This is tab 2</TabContent>
    </Tabs>
  ),
};
TextTrigger.args = { defaultValue: "tab1" };
export const ButtonTrigger: Story = {
  render: (args: TabsProps) => (
    <Tabs {...args}>
      <TabsList className="bg-light-fg-1 flex h-fit w-full gap-12 px-64 py-24">
        <TabItemPillButton value="tab1">Tab 1</TabItemPillButton>
        <TabItemPillButton value="tab2">Tab 2</TabItemPillButton>
        <TabItemPillButton value="tab3" disabled>
          Tab 3
        </TabItemPillButton>
      </TabsList>
      <TabContent
        className="rounded-16 border border-stroke bg-fg-1 p-16"
        value="tab1"
      >
        This is tab 1
      </TabContent>
      <TabContent
        value="tab2"
        className="rounded-16 border border-stroke bg-fg-1 p-16"
      >
        This is tab 2
      </TabContent>
    </Tabs>
  ),
};
ButtonTrigger.args = { defaultValue: "tab1" };
