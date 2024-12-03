import * as RadixDialog from "@radix-ui/react-dialog";
import type { DialogProps as RadixDialogProps } from "@radix-ui/react-dialog";
import type { DialogContentProps as RadixDialogContentProps } from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import type React from "react";
import { twMerge } from "tailwind-merge";

export type DialogProps = {
  children: React.ReactNode;
} & RadixDialogProps;

export const Dialog = ({ children, ...props }: DialogProps) => (
  <RadixDialog.Root {...props}>{children}</RadixDialog.Root>
);

export const DialogTrigger = ({ children }: { children: React.ReactNode }) => (
  <RadixDialog.Trigger asChild>{children}</RadixDialog.Trigger>
);
export const DialogTitle = ({ children }: { children: React.ReactNode }) => (
  <RadixDialog.Title className="text-h3 font-medium leading-none text-text">
    {children}
  </RadixDialog.Title>
);
export const DialogDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <RadixDialog.Description className="text-body text-text">
    {children}
  </RadixDialog.Description>
);
export const DialogClose = ({ children }: { children: React.ReactNode }) => (
  <RadixDialog.Close asChild>{children}</RadixDialog.Close>
);

export type DialogContentProps = RadixDialogContentProps & {
  children: React.ReactNode;
  className?: string;
};

export const DialogContent = ({
  children,
  className,
  ...props
}: DialogContentProps) => (
  <RadixDialog.Portal>
    <RadixDialog.Overlay className="fixed inset-0 z-[998] bg-[#000000]/5 backdrop-blur-[2px] data-[state=open]:animate-fade-in" />
    <RadixDialog.Content
      {...props}
      className={twMerge(
        clsx(
          className,
          "fixed left-1/2 top-1/2 z-[999] min-w-256 -translate-x-1/2 -translate-y-1/2 rounded-16 border border-stroke bg-fg-2 p-24 font-serif text-text shadow-popup data-[state=open]:animate-fade-in",
        ),
      )}
    >
      {children}
    </RadixDialog.Content>
  </RadixDialog.Portal>
);
