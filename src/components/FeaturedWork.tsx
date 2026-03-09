import { Badge } from "@/components/ui/badge";
import { featuredProjects } from "@/data/projects";

const categoryColors: Record<string, string> = {
  Work: "bg-watercolor-blue/15 text-foreground border-watercolor-blue/30",
  Personal: "bg-watercolor-green/15 text-foreground border-watercolor-green/30",
  Art: "bg-watercolor-purple/15 text-foreground border-watercolor-purple/30",
};

export function FeaturedWork() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header in retro style */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono-heading text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            // Selected Works
          </p>
          <h2 className="font-mono-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mx-auto mt-4 h-px w-32 bg-border" />
        </div>

        {/* Scrolling marquee */}
        <div className="mb-12 overflow-hidden border-t border-b border-border bg-muted/50 py-2">
          <div className="animate-marquee flex whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, i) => (
              <span
                key={i}
                className="mx-8 font-pixel text-lg text-muted-foreground/50"
              >
                ✦ PORTFOLIO ✦ ART ✦ DESIGN ✦ ILLUSTRATION ✦ UI/UX ✦
                USER-CENTRICITY ✦ PORTFOLIO ✦ ART ✦ DESIGN ✦ ILLUSTRATION ✦
                UI/UX ✦ USER-CENTRICITY&nbsp;
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <div
              key={project.title}
              className="retro-window group cursor-pointer transition-all duration-200 hover:shadow-[5px_5px_0px_hsl(var(--foreground)/0.12)] hover:-translate-x-[1px] hover:-translate-y-[1px]"
              style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}
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

              {/* Image area */}
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${project.gradient}`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="dashed-frame p-4 opacity-30 transition-opacity group-hover:opacity-50">
                      <span className="font-pixel text-2xl">✦</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Info bar */}
              <div className="border-t-2 border-border p-3">
                <Badge
                  variant="outline"
                  className={`mb-1.5 font-mono-heading text-[10px] uppercase tracking-wider ${categoryColors[project.category] || ""}`}
                >
                  {project.category}
                </Badge>
                <h3 className="font-mono-heading text-sm font-bold text-card-foreground">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
