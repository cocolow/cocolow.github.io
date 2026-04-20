import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type StickerProps = {
  children: ReactNode;
  className?: string;
};

export function Sticker({ children, className }: StickerProps) {
  return <span className={cn("sticker", className)}>{children}</span>;
}
