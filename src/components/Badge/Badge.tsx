import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const variants = cva(
  [
    'text-body px-12 py-8 h-fit w-fit leading-none flex justify-center flex-center gap-4 rounded-full border border-stroke',
  ],
  {
    variants: {
      variant: {
        primary: ['bg-accent text-text-reversed shadow-colored-component'],
        secondary: ['bg-fg-2 text-text shadow-material-component'],
        success: [
          'bg-green-reversed text-text-reversed shadow-colored-component',
        ],
        warning: [
          'bg-yellow-reversed text-text-reversed shadow-colored-component',
        ],
        danger: ['bg-red-reversed text-text-reversed shadow-colored-component'],
        blue: ['bg-blue-reversed text-text-reversed shadow-colored-component'],
        purple: [
          'bg-purple-reversed text-text-reversed shadow-colored-component',
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export type BadgeVariantProps = VariantProps<typeof variants>;

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'blue'
    | 'purple';
}
export const Badge = ({ children, variant }: BadgeProps) => {
  return <div className={variants({ variant })}>{children}</div>;
};
