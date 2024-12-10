import * as RadixSelect from "@radix-ui/react-select";
import type {
	SelectItemProps as RadixSelectItemProps,
	SelectProps as RadixSelectProps,
} from "@radix-ui/react-select";
import { clsx } from "clsx";
import React, { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CustomSelectProps {
	label: string;
	className?: string;
}

export type SelectProps = CustomSelectProps & RadixSelectProps;
export const Select = ({
	label,
	children,
	className,
	...props
}: SelectProps) => {
	return (
		<RadixSelect.Root {...props}>
			<RadixSelect.Trigger
				className={twMerge(
					clsx(
						"flex justify-between gap-12 group w-fit rounded-12 border border-stroke bg-fg-2 px-16 py-8 text-text shadow-material-component outline-1 duration-150 ease-out enabled:hover:-translate-y-[2px] enabled:active:translate-y-4 data-[disabled]:cursor-not-allowed data-[state='open']:rounded-b-4 data-[disabled]:opacity-33",
						className,
					),
				)}
				aria-label={label}
			>
				<RadixSelect.Value placeholder={label} />
				<RadixSelect.Icon
					asChild
					className="group-data-[state=open]:-rotate-180 duration-150 ease-out"
				>
					<IconChevronDown />
				</RadixSelect.Icon>
			</RadixSelect.Trigger>
			<RadixSelect.Portal>
				<RadixSelect.Content
					position="popper"
					className="relative z-50 mt-4 max-h-[512px] w-full overflow-hidden rounded-12 rounded-t-4 border border-stroke bg-fg-2 font-serif shadow-material-component data-[state='open']:animate-scale-in"
				>
					<RadixSelect.ScrollUpButton className="flex h-fit cursor-default items-center justify-center py-2">
						<IconChevronUp />
					</RadixSelect.ScrollUpButton>
					<RadixSelect.Viewport className="gap-14 flex flex-col p-16">
						{children}
					</RadixSelect.Viewport>
					<RadixSelect.ScrollDownButton className="flex h-fit cursor-default items-center justify-center py-2">
						<IconChevronDown />
					</RadixSelect.ScrollDownButton>
				</RadixSelect.Content>
			</RadixSelect.Portal>
		</RadixSelect.Root>
	);
};

export type SelectItemProps = RadixSelectItemProps;
export const SelectItem = React.forwardRef<
	HTMLDivElement,
	RadixSelectItemProps
>(({ children, ...props }, forwardedRef) => {
	return (
		<RadixSelect.Item
			className="relative flex h-fit cursor-pointer select-none items-center justify-between gap-8 font-serif text-body leading-none text-text outline-none duration-150 ease-out data-[disabled]:pointer-events-none data-[highlighted]:translate-x-4 data-[state='checked']:font-semibold data-[state='checked']:text-accent-reversed data-[disabled]:opacity-33"
			{...props}
			ref={forwardedRef}
		>
			<RadixSelect.ItemText>{children}</RadixSelect.ItemText>
			<RadixSelect.ItemIndicator asChild>
				<IconCheck />
			</RadixSelect.ItemIndicator>
		</RadixSelect.Item>
	);
});

export const SelectGroup = ({ children }: { children: ReactNode }) => {
	return (
		<RadixSelect.Group className="gap-14 flex flex-col">
			{children}
		</RadixSelect.Group>
	);
};

export const SelectLabel = ({ children }: { children: ReactNode }) => {
	return (
		<RadixSelect.Label className="text-sub text-text">
			{children}
		</RadixSelect.Label>
	);
};

export const SelectSeparator = () => {
	return <RadixSelect.Separator className="h-[1px] w-full bg-stroke" />;
};

const IconChevronDown = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1.5rem"
			height="1.5rem"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="text-text group-data-[state=open]:-rotate-180 duration-100 ease-out"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M6 9l6 6l6 -6" />
		</svg>
	);
};
const IconChevronUp = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1.5rem"
			height="1.5rem"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="text-text"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M6 15l6 -6l6 6" />
		</svg>
	);
};

const IconCheck = () => {
	return (
		<svg
			width="1rem"
			height="1rem"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="icon icon-tabler icons-tabler-outline icon-tabler-check"
		>
			<path
				d="M3.33334 8L6.66667 11.3333L13.3333 4.66667"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
