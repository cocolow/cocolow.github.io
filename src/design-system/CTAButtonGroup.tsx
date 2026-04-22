import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CTAButtonGroupProps = {
  children: ReactNode;
  className?: string;
};

export function CTAButtonGroup({ children, className }: CTAButtonGroupProps) {
  return (
    <div
      className={cn("grid max-w-md grid-cols-2 gap-3 [&>*]:w-full", className)}
    >
      {children}
    </div>
  );
}
