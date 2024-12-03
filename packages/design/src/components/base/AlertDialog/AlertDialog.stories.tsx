import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../Button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  type AlertDialogProps,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./AlertDialog";

// Meta

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  title: "Base/Alert Dialog",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof AlertDialog>;

// Render AlertAlertDialog

export const Default: Story = (args: AlertDialogProps) => (
  <AlertDialog {...args}>
    <AlertDialogTrigger>
      <Button>Open Alert Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent className="flex flex-col gap-12">
      <AlertDialogTitle>Alert Dialog</AlertDialogTitle>
      <AlertDialogDescription>
        ARE YOU SURE?!?!?!?!!?!?!!?!??!?!?!?!??!?!?!?!?
      </AlertDialogDescription>
      <div className="flex gap-12">
        <AlertDialogAction>
          <Button variant="danger">Confirm</Button>
        </AlertDialogAction>
        <AlertDialogCancel>
          <Button variant="secondary">Cancel</Button>
        </AlertDialogCancel>
      </div>
    </AlertDialogContent>
  </AlertDialog>
);
Default.args = {};
