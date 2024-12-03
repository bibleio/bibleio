import * as RadixTabs from "@radix-ui/react-tabs";
import type {
  TabsContentProps as RadixTabContentProps,
  TabsTriggerProps as RadixTabTriggerProps,
  TabsProps as RadixTabsProps,
} from "@radix-ui/react-tabs";
import { clsx } from "clsx";
import type React from "react";

export type TabsProps = RadixTabsProps & { children: React.ReactNode };
export const Tabs = ({ children, className, ...props }: TabsProps) => {
  return (
    <RadixTabs.Root
      {...props}
      className={clsx(className, "flex flex-col gap-16")}
    >
      {children}
    </RadixTabs.Root>
  );
};

export const TabsList = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <RadixTabs.List className={clsx(className, "flex gap-12")} {...props}>
      {children}
    </RadixTabs.List>
  );
};

export type TabItemProps = RadixTabTriggerProps & {
  children: React.ReactNode;
};
export const TabItemText = ({ children, ...props }: TabItemProps) => {
  return (
    <RadixTabs.Trigger
      className="group flex h-[1.563rem] flex-col gap-4 text-body leading-none text-text data-[disabled]:cursor-not-allowed data-[disabled]:opacity-33"
      {...props}
    >
      {children}
      <div className="h-[0.375rem] w-full rounded-full bg-accent-reversed opacity-0 group-data-[state=active]:opacity-100" />
    </RadixTabs.Trigger>
  );
};
export const TabItemPillButton = ({ children, ...props }: TabItemProps) => {
  return (
    <RadixTabs.Trigger
      className="h-40 rounded-0 rounded-full border border-stroke bg-fg-2 px-20 py-8 text-text shadow-material-component data-[disabled]:cursor-not-allowed data-[state=active]:bg-accent-reversed data-[state=active]:text-text-reversed data-[disabled]:opacity-33 data-[state=active]:shadow-colored-component"
      {...props}
    >
      {children}
    </RadixTabs.Trigger>
  );
};

export type TabContentProps = RadixTabContentProps & { className?: string };
export const TabContent = ({ className, ...props }: TabContentProps) => {
  return (
    <RadixTabs.Content className={clsx(className, "text-text")} {...props} />
  );
};
