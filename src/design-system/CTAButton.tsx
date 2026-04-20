import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

const baseClasses =
  "font-mono-heading text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_hsl(var(--foreground)/0.15)] transition-all hover:shadow-[1px_1px_0px_hsl(var(--foreground)/0.15)] hover:translate-x-[2px] hover:translate-y-[2px]";

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
}: CTAButtonProps) {
  const isPrimary = variant === "primary";
  return (
    <Button
      asChild
      size="lg"
      variant={isPrimary ? "default" : "outline"}
      className={cn(
        baseClasses,
        isPrimary
          ? "gradient-hero-bg border-0 px-6 text-primary-foreground"
          : "border-2 px-6",
        className,
      )}
    >
      <a href={href}>{children}</a>
    </Button>
  );
}
