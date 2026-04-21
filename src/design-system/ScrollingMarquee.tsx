import { cn } from "@/lib/utils";

type ScrollingMarqueeProps = {
  items: string[];
  separator?: string;
  repeat?: number;
  className?: string;
};

const NBSP = " ";

export function ScrollingMarquee({
  items,
  separator = "✦",
  repeat = 4,
  className,
}: ScrollingMarqueeProps) {
  const unit = items
    .map((item) => `${item}${NBSP}${separator}${NBSP}`)
    .join("");

  return (
    <div
      className={cn(
        "overflow-hidden border-t border-b border-border bg-muted/50 py-2",
        className,
      )}
    >
      <div className="animate-marquee flex whitespace-nowrap">
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={i} className="font-pixel text-lg text-muted-foreground/50">
            {unit}
          </span>
        ))}
      </div>
    </div>
  );
}
