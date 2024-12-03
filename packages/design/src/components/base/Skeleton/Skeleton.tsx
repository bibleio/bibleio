import { cn } from "@/utils";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-12 bg-text/25", className)}
      {...props}
    />
  );
}
