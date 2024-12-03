import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import type { AlertDialogProps as RadixAlertDialogProps } from "@radix-ui/react-alert-dialog";
import type { AlertDialogContentProps as RadixAlertDialogContentProps } from "@radix-ui/react-alert-dialog";
import { clsx } from "clsx";
import type React from "react";
import { twMerge } from "tailwind-merge";

export type AlertDialogProps = {
  children: React.ReactNode;
} & RadixAlertDialogProps;

export const AlertDialog = ({ children, ...props }: AlertDialogProps) => (
  <RadixAlertDialog.Root {...props}>{children}</RadixAlertDialog.Root>
);

export const AlertDialogTrigger = ({
  children,
}: {
  children: React.ReactNode;
}) => <RadixAlertDialog.Trigger asChild>{children}</RadixAlertDialog.Trigger>;
export const AlertDialogTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <RadixAlertDialog.Title className="text-h3 font-medium leading-none text-text">
    {children}
  </RadixAlertDialog.Title>
);

export const AlertDialogDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <RadixAlertDialog.Description className="text-body text-text">
    {children}
  </RadixAlertDialog.Description>
);

export const AlertDialogCancel = ({
  children,
}: {
  children: React.ReactNode;
}) => <RadixAlertDialog.Cancel asChild>{children}</RadixAlertDialog.Cancel>;

export const AlertDialogAction = ({
  children,
}: {
  children: React.ReactNode;
}) => <RadixAlertDialog.Action asChild>{children}</RadixAlertDialog.Action>;

export type AlertDialogContentProps = RadixAlertDialogContentProps & {
  children: React.ReactNode;
  className?: string;
};

export const AlertDialogContent = ({
  children,
  className,
  ...props
}: AlertDialogContentProps) => (
  <RadixAlertDialog.Portal>
    <RadixAlertDialog.Overlay className="fixed inset-0 z-[998] bg-[#000000]/5 backdrop-blur-[2px] data-[state=open]:animate-fade-in" />
    <RadixAlertDialog.Content
      {...props}
      className={twMerge(
        clsx(
          className,
          "fixed left-1/2 top-1/2 z-[999] min-w-256 -translate-x-1/2 -translate-y-1/2 rounded-16 border border-stroke bg-fg-2 p-24 font-serif text-text shadow-popup data-[state=open]:animate-fade-in",
        ),
      )}
    >
      {children}
    </RadixAlertDialog.Content>
  </RadixAlertDialog.Portal>
);
