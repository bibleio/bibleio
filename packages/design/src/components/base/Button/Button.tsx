import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const variants = cva(
  [
    "text-body px-16 py-8 h-[2.5rem] flex justify-center items-center flex-center rounded-12 border border-stroke",
    "enabled:hover:-translate-y-[2px] enabled:active:translate-y-4 duration-150 ease-out",
    " disabled:cursor-not-allowed disabled:opacity-33",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-accent-reversed text-text-reversed shadow-colored-component",
        ],
        secondary: ["bg-fg-2 text-text shadow-material-component"],
        success: [
          "bg-green-reversed text-text-reversed shadow-colored-component",
        ],
        warning: [
          "bg-yellow-reversed text-text-reversed shadow-colored-component",
        ],
        danger: ["bg-red-reversed text-text-reversed shadow-colored-component"],
      },
      fullWidth: {
        true: ["w-full"],
        false: ["w-fit"],
      },
    },
    defaultVariants: {
      variant: "primary",
      fullWidth: false,
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof variants>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
}
export const Button = ({
  children,
  variant,
  disabled,
  onClick,
  fullWidth,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={variants({ variant, fullWidth })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
