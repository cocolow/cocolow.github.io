import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DownloadResumeButtonProps = {
  resumeUrl?: string;
  label?: string;
  className?: string;
};

export function DownloadResumeButton({
  resumeUrl = "/Resume_Coco_Low_2026.pdf",
  label = "Download Resume (PDF)",
  className,
}: DownloadResumeButtonProps) {
  return (
    <a href={resumeUrl} download>
      <Button
        variant="outline"
        className={cn(
          "font-mono-heading text-xs uppercase tracking-wider",
          className,
        )}
      >
        <Download className="mr-2 h-4 w-4" />
        {label}
      </Button>
    </a>
  );
}
