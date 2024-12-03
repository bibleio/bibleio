import * as RadixTooltip from "@radix-ui/react-tooltip";
import type {
  TooltipContentProps as RadixTooltipContentProps,
  TooltipProps as RadixTooltipProps,
  TooltipProviderProps as RadixTooltipProviderProps,
  TooltipTriggerProps as RadixTooltipTriggerProps,
} from "@radix-ui/react-tooltip";
import type React from "react";

// A tooltip
export type TooltipProps = RadixTooltipProps & { children: React.ReactNode };
export const Tooltip = ({ children, ...props }: RadixTooltipProps) => {
  return <RadixTooltip.Root {...props}>{children}</RadixTooltip.Root>;
};

// Wraps your whole application with tooltip props
export type TooltipProviderProps = RadixTooltipProviderProps & {
  children: React.ReactNode;
};
export const TooltipProvider = ({
  children,
  ...props
}: TooltipProviderProps) => {
  return <RadixTooltip.Provider {...props}>{children}</RadixTooltip.Provider>;
};

export type TooltipTriggerProps = RadixTooltipTriggerProps & {
  children: React.ReactNode;
  className?: string;
};
export const TooltipTrigger = ({
  children,
  className,
  ...props
}: TooltipTriggerProps) => {
  return (
    <RadixTooltip.Trigger {...props} className={className}>
      {children}
    </RadixTooltip.Trigger>
  );
};

export type TooltipContentProps = RadixTooltipContentProps & {
  children: React.ReactNode;
};
export const TooltipContent = ({ children, ...props }: TooltipContentProps) => {
  return (
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        {...props}
        className="m-6 rounded-8 border border-stroke bg-fg-2 px-8 py-4 font-serif text-body text-text drop-shadow-md data-[state='closed']:animate-scale-out data-[state='delayed-open']:animate-scale-in data-[state='instant-open']:animate-scale-in"
      >
        {children}
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  );
};
