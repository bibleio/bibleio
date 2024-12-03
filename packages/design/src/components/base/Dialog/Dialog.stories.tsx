import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  type DialogProps,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

// Meta

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: "Base/Dialog",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Dialog>;

// Render AlertDialog

export const Default: Story = (args: DialogProps) => (
  <Dialog {...args}>
    <DialogTrigger>
      <Button>Open Dialog</Button>
    </DialogTrigger>
    <DialogContent className="flex flex-col gap-12">
      <DialogTitle>Dialog</DialogTitle>
      <DialogDescription>Lorem ipsum.</DialogDescription>
      <DialogClose>
        <Button>Close</Button>
      </DialogClose>
    </DialogContent>
  </Dialog>
);
Default.args = {};
