import { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RetroWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function RetroWindow({
  title,
  children,
  className,
  style,
}: RetroWindowProps) {
  return (
    <div className={cn("retro-window", className)} style={style}>
      <div className="retro-titlebar">
        <span className="text-muted-foreground">{title}</span>
        <div className="retro-btn-group">
          <span className="retro-btn-dot">_</span>
          <span className="retro-btn-dot">□</span>
          <span className="retro-btn-dot">×</span>
        </div>
      </div>
      {children}
    </div>
  );
}
