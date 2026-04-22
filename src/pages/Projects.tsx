import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects, type Project, type ProjectMedia } from "@/data/projects";
import { features } from "@/config/features";
import { MediaEmbed } from "@/design-system";

const allFilters = ["All", "Work", "Art", "Personal"] as const;
type Filter = (typeof allFilters)[number];
const filters = features.showArtProjects
  ? allFilters
  : (allFilters.filter((f) => f !== "Art") as readonly Filter[]);

const visibleProjects = features.showArtProjects
  ? projects
  : projects.filter((p) => p.category !== "Art");

const filterStyles: Record<string, string> = {
  Work: "bg-watercolor-blue/15 text-foreground border-watercolor-blue/30",
  Art: "bg-watercolor-purple/15 text-foreground border-watercolor-purple/30",
  Personal: "bg-amber-500/15 text-foreground border-amber-500/30",
};

const audienceStyles: Record<string, string> = {
  B2C: "bg-watercolor-green/15 text-foreground border-watercolor-green/30",
  B2B: "bg-watercolor-orange/15 text-foreground border-watercolor-orange/30",
};

/** Portrait media (e.g. mobile 9/16) renders in a 4-col grid so thumbnails don't blow up; landscape stays 2-col for readability. */
function isPortraitMedia(media: ProjectMedia[]): boolean {
  const firstImage = media.find((m) => m.type === "image");
  if (!firstImage) return false;
  const [w, h] = (firstImage.aspectRatio ?? "9/16").split("/").map(Number);
  return w < h;
}

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(() => {
    const projectTitle = searchParams.get("project");
    if (projectTitle)
      return visibleProjects.find((p) => p.title === projectTitle) ?? null;
    return null;
  });
  const [expandedMedia, setExpandedMedia] = useState<ProjectMedia | null>(null);

  const fromParam = searchParams.get("from");

  const filtered =
    active === "All"
      ? visibleProjects
      : visibleProjects.filter((p) => p.category === active);

  // Close modal on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when modal is open & clean up query params on close
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    if (
      !selected &&
      (searchParams.has("project") || searchParams.has("from"))
    ) {
      setSearchParams({}, { replace: true });
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14">
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            {/* —— Header —— */}
            <div className="mb-12 text-center">
              <p className="mb-3 font-mono-heading text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                // All Works
              </p>
              <h1 className="font-mono-heading text-3xl font-bold tracking-tight sm:text-5xl">
                My <span className="gradient-text">Projects</span>
              </h1>
              <div className="mx-auto mt-4 h-px w-32 bg-border" />
            </div>

            {/* —— Filter bar —— */}
            <div className="mb-10 flex justify-center">
              <div className="retro-window inline-flex">
                <div className="retro-titlebar">
                  <span className="text-muted-foreground">FILTER.EXE</span>
                  <div className="retro-btn-group">
                    <span className="retro-btn-dot">_</span>
                    <span className="retro-btn-dot">□</span>
                    <span className="retro-btn-dot">×</span>
                  </div>
                </div>
                <div className="flex gap-0 border-t border-border">
                  {filters.map((f) => (
                    <button
                      key={f}
                      onClick={() => setActive(f)}
                      className={`font-mono-heading px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                        active === f
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      } ${f !== "Personal" ? "border-r border-border" : ""}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* —— Project grid —— */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((project, i) => (
                <div
                  key={project.title}
                  onClick={() => setSelected(project)}
                  className="retro-window group cursor-pointer transition-all duration-200 hover:shadow-[5px_5px_0px_hsl(var(--foreground)/0.12)] hover:-translate-x-[1px] hover:-translate-y-[1px] animate-fade-in-up"
                  style={{
                    transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)`,
                    animationDelay: `${i * 60}ms`,
                  }}
                >
                  <div className="retro-titlebar">
                    <span className="truncate text-muted-foreground">
                      {project.file}
                    </span>
                    <div className="retro-btn-group">
                      <span className="retro-btn-dot">_</span>
                      <span className="retro-btn-dot">□</span>
                      <span className="retro-btn-dot">×</span>
                    </div>
                  </div>

                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${project.gradient}`}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-contain p-4"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <div className="dashed-frame p-4 opacity-30 transition-opacity group-hover:opacity-50">
                          <span className="font-pixel text-2xl">✦</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t-2 border-border p-3">
                    <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
                      <Badge
                        variant="outline"
                        className={`font-mono-heading text-[10px] uppercase tracking-wider ${filterStyles[project.category] || ""}`}
                      >
                        {project.category}
                      </Badge>
                      {project.audience?.map((a) => (
                        <Badge
                          key={a}
                          variant="outline"
                          className={`font-mono-heading text-[10px] uppercase tracking-wider ${audienceStyles[a] || ""}`}
                        >
                          {a}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-mono-heading text-sm font-bold text-card-foreground leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    {/* Top 2 metrics as pills */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {project.metrics.slice(0, 2).map((m) => (
                          <span
                            key={m.label}
                            className="font-mono-heading text-[10px] font-bold text-foreground border border-border rounded px-1.5 py-0.5"
                          >
                            {m.value}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && active === "Personal" && (
              <div className="retro-window mx-auto max-w-lg text-center">
                <div className="retro-titlebar">
                  <span className="text-muted-foreground">
                    tinkering_in_progress.log
                  </span>
                </div>
                <p className="p-8 font-mono-heading text-sm leading-relaxed text-muted-foreground">
                  🚧 A space in the making — for side products, art, and
                  learnings picked up along the way. I'm writing up the first
                  set now ✦ check back soon to see what I've been tinkering
                  with.
                </p>
              </div>
            )}

            {filtered.length === 0 && active !== "Personal" && (
              <div className="retro-window mx-auto max-w-sm text-center">
                <div className="retro-titlebar">
                  <span className="text-muted-foreground">no_results.txt</span>
                </div>
                <p className="p-8 font-mono-heading text-sm text-muted-foreground">
                  No projects found.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />

      {/* ————————————————————————————————————————————————————————
          Case study modal
      ———————————————————————————————————————————————————————— */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 py-8 bg-background/85 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="retro-window w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal title bar */}
            <div className="retro-titlebar flex-shrink-0">
              <span className="truncate text-muted-foreground font-mono-heading text-xs">
                {selected.file}
              </span>
              <div className="flex items-center gap-2">
                {fromParam && fromParam.startsWith("/about") && (
                  <Link
                    to={fromParam}
                    className="font-mono-heading text-[10px] font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                  >
                    ↩ Back to About
                  </Link>
                )}
                <div className="retro-btn-group">
                  <span className="retro-btn-dot">_</span>
                  <span className="retro-btn-dot">□</span>
                  <button
                    onClick={() => setSelected(null)}
                    className="retro-btn-dot cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>

            {/* —— Modal header —— */}
            <div className="border-b border-border p-6">
              <div className="flex flex-wrap items-start gap-3 mb-3">
                <Badge
                  variant="outline"
                  className={`font-mono-heading text-[10px] uppercase tracking-wider ${filterStyles[selected.category] || ""}`}
                >
                  {selected.category}
                </Badge>
                {selected.audience?.map((a) => (
                  <Badge
                    key={a}
                    variant="outline"
                    className={`font-mono-heading text-[10px] uppercase tracking-wider ${audienceStyles[a] || ""}`}
                  >
                    {a}
                  </Badge>
                ))}
                {selected.note && (
                  <span className="font-mono-heading text-[10px] border border-border rounded px-2 py-0.5 text-muted-foreground">
                    ⚠ {selected.note}
                  </span>
                )}
              </div>

              <h2 className="font-mono-heading text-xl font-bold text-foreground leading-snug sm:text-2xl">
                {(() => {
                  if (!selected.titleUrl) return selected.title;
                  const [head, ...rest] = selected.title.split(" — ");
                  return (
                    <>
                      <a
                        href={selected.titleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary transition-colors hover:underline"
                      >
                        {head}
                      </a>
                      {rest.length ? ` — ${rest.join(" — ")}` : ""}
                    </>
                  );
                })()}
              </h2>

              {(selected.org || selected.period) && (
                <p className="mt-1.5 font-mono-heading text-xs text-muted-foreground uppercase tracking-wider">
                  {selected.org}
                  {selected.period ? ` · ${selected.period}` : ""}
                </p>
              )}

              {/* Metric tiles */}
              {selected.metrics && selected.metrics.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {selected.metrics.map((m) => (
                    <div key={m.label} className="retro-window">
                      <div className="px-4 py-2.5 text-center">
                        <p className="font-mono-heading text-lg font-bold text-foreground leading-none">
                          {m.value}
                        </p>
                        <p className="font-mono-heading text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                          {m.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* —— Modal body: two columns —— */}
            <div className="grid sm:grid-cols-2 border-b border-border divide-y sm:divide-y-0 sm:divide-x divide-border">
              {/* Left: Problem + Approach */}
              <div className="p-6 space-y-6">
                {selected.problem && selected.problem.length > 0 && (
                  <div>
                    <p className="mb-3 font-mono-heading text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      // Problem
                    </p>
                    <ul className="space-y-2.5">
                      {selected.problem.map((p, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-foreground/80 leading-relaxed"
                        >
                          <span className="font-mono-heading text-muted-foreground mt-0.5 flex-shrink-0">
                            ›
                          </span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selected.approach && selected.approach.length > 0 && (
                  <div>
                    <p className="mb-3 font-mono-heading text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      // Approach
                    </p>
                    <ul className="space-y-2.5">
                      {selected.approach.map((a, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-foreground/80 leading-relaxed"
                        >
                          <span className="font-mono-heading text-muted-foreground mt-0.5 flex-shrink-0">
                            ›
                          </span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right: What was built + Outcomes */}
              <div className="p-6 space-y-6">
                {selected.built && selected.built.length > 0 && (
                  <div>
                    <p className="mb-3 font-mono-heading text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      // What was built
                    </p>
                    <div className="space-y-5">
                      {selected.built.map((track, i) => (
                        <div key={i}>
                          {track.track && (
                            <p className="mb-2 font-mono-heading text-[10px] font-bold uppercase tracking-wider text-foreground border-l-2 border-border pl-2.5">
                              {track.track}
                            </p>
                          )}
                          <ul className="space-y-2.5">
                            {track.points.map((pt, j) => (
                              <li
                                key={j}
                                className="flex gap-2 text-sm text-foreground/80 leading-relaxed"
                              >
                                <span className="font-mono-heading text-muted-foreground mt-0.5 flex-shrink-0">
                                  ›
                                </span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selected.outcomes && selected.outcomes.length > 0 && (
                  <div>
                    <p className="mb-3 font-mono-heading text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      // Outcomes
                    </p>
                    <ul className="space-y-2.5">
                      {selected.outcomes.map((o, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-foreground/80 leading-relaxed"
                        >
                          <span className="font-mono-heading text-muted-foreground mt-0.5 flex-shrink-0">
                            ✦
                          </span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* —— Learnings —— */}
            {selected.learnings && selected.learnings.length > 0 && (
              <div className="border-b border-border p-6">
                <p className="mb-4 font-mono-heading text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  // Learnings
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {selected.learnings.map((l, i) => (
                    <div key={i} className="border-2 border-border bg-card p-4">
                      <h4 className="mb-2 font-mono-heading text-sm font-bold text-foreground">
                        {l.theme}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {l.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* —— Media Gallery —— */}
            {selected.media && selected.media.length > 0 && (
              <div className="border-b border-border p-6">
                <p className="mb-4 font-mono-heading text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  // Media
                </p>
                <div
                  className={`grid justify-items-center gap-4 sm:grid-cols-2 ${
                    isPortraitMedia(selected.media) ? "md:grid-cols-4" : ""
                  }`}
                >
                  {selected.media.map((m, i) =>
                    m.type === "image" ? (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setExpandedMedia(m)}
                        className="group w-full cursor-zoom-in transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={`Expand image${m.caption ? `: ${m.caption}` : ""}`}
                      >
                        <MediaEmbed
                          type={m.type}
                          url={m.url}
                          caption={m.caption}
                          aspectRatio={m.aspectRatio}
                        />
                      </button>
                    ) : (
                      <MediaEmbed
                        key={i}
                        type={m.type}
                        url={m.url}
                        caption={m.caption}
                        aspectRatio={m.aspectRatio}
                      />
                    ),
                  )}
                </div>
              </div>
            )}

            {/* —— Modal footer: tags —— */}
            {selected.tags && selected.tags.length > 0 && (
              <div className="p-5 flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="font-mono-heading text-[10px] uppercase tracking-wider"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ————————————————————————————————————————————————————————
          Image lightbox
      ———————————————————————————————————————————————————————— */}
      <Dialog
        open={expandedMedia !== null}
        onOpenChange={(open) => !open && setExpandedMedia(null)}
      >
        <DialogContent className="max-w-[95vw] border-0 bg-transparent p-0 shadow-none sm:max-w-[90vw]">
          {expandedMedia && (
            <figure className="flex flex-col items-center gap-3">
              <img
                src={expandedMedia.url}
                alt={expandedMedia.caption ?? ""}
                className="max-h-[85vh] w-auto max-w-full object-contain"
              />
              {expandedMedia.caption && (
                <figcaption className="font-mono-heading text-xs uppercase tracking-wider text-white/90">
                  {expandedMedia.caption}
                </figcaption>
              )}
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
