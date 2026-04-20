import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type EnquireButtonProps = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
};

export function EnquireButton({
  href = "/services#book-a-service",
  children = "Enquire Now",
  className,
}: EnquireButtonProps) {
  return (
    <Button
      asChild
      variant="outline"
      size="lg"
      className={cn(
        "border-2 px-6 font-mono-heading text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_hsl(var(--foreground)/0.15)] transition-all hover:shadow-[1px_1px_0px_hsl(var(--foreground)/0.15)] hover:translate-x-[2px] hover:translate-y-[2px]",
        className,
      )}
    >
      <a href={href}>{children}</a>
    </Button>
  );
}
