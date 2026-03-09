import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";

const filters = ["All", "Work", "Art"] as const;
type Filter = (typeof filters)[number];

const filterStyles: Record<string, string> = {
  Work: "bg-watercolor-blue/15 text-foreground border-watercolor-blue/30",
  Art: "bg-watercolor-purple/15 text-foreground border-watercolor-purple/30",
};

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14">
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Header */}
            <div className="mb-12 text-center">
              <p className="mb-3 font-mono-heading text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                // All Works
              </p>
              <h1 className="font-mono-heading text-3xl font-bold tracking-tight sm:text-5xl">
                My <span className="gradient-text">Projects</span>
              </h1>
              <div className="mx-auto mt-4 h-px w-32 bg-border" />
            </div>

            {/* Filter bar */}
            <div className="mb-10 flex justify-center">
              <div className="retro-window inline-flex">
                <div className="retro-titlebar">
                  <span className="text-muted-foreground">filter.exe</span>
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
                      } ${f !== "Art" ? "border-r border-border" : ""}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Project grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((project, i) => (
                <div
                  key={project.title}
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

                  <div className="border-t-2 border-border p-3">
                    <Badge
                      variant="outline"
                      className={`mb-1.5 font-mono-heading text-[10px] uppercase tracking-wider ${filterStyles[project.category] || ""}`}
                    >
                      {project.category}
                    </Badge>
                    <h3 className="font-mono-heading text-sm font-bold text-card-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
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
    </div>
  );
}
