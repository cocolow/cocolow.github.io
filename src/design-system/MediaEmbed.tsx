import { cn } from "@/lib/utils";

type MediaEmbedProps = {
  type: "image" | "youtube";
  url: string;
  caption?: string;
  className?: string;
};

function toYouTubeEmbedUrl(url: string): string {
  const watch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (watch) return `https://www.youtube.com/embed/${watch[1]}`;
  const short = url.match(/youtu\.be\/([^?]+)/);
  if (short) return `https://www.youtube.com/embed/${short[1]}`;
  return url;
}

export function MediaEmbed({ type, url, caption, className }: MediaEmbedProps) {
  return (
    <figure className={cn("flex w-full flex-col gap-2", className)}>
      {type === "image" ? (
        <div className="aspect-[9/16] w-full overflow-hidden border-2 border-border bg-muted">
          <img
            src={url}
            alt={caption ?? ""}
            className="h-full w-full object-contain"
          />
        </div>
      ) : (
        <div className="aspect-video w-full overflow-hidden border-2 border-border bg-muted">
          <iframe
            src={toYouTubeEmbedUrl(url)}
            title={caption ?? "YouTube video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      )}
      {caption && (
        <figcaption className="line-clamp-2 min-h-[2rem] font-mono-heading text-[10px] uppercase leading-tight tracking-wider text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
