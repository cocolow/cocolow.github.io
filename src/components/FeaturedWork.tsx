import { Badge } from "@/components/ui/badge";

const projects = [
  { title: "Brand Identity System", category: "Work Project", gradient: "from-watercolor-orange/40 to-watercolor-yellow/30" },
  { title: "Generative Art Series", category: "Artwork", gradient: "from-watercolor-purple/40 to-watercolor-pink/30" },
  { title: "Mobile App Redesign", category: "Work Project", gradient: "from-watercolor-blue/40 to-watercolor-turquoise/30" },
  { title: "Botanical Illustrations", category: "Artwork", gradient: "from-watercolor-green/40 to-watercolor-yellow/30" },
  { title: "Open Source CLI Tool", category: "Personal Project", gradient: "from-watercolor-turquoise/40 to-watercolor-blue/30" },
  { title: "Watercolor Portraits", category: "Artwork", gradient: "from-watercolor-burgundy/40 to-watercolor-orange/30" },
];

const categoryColors: Record<string, string> = {
  "Work Project": "bg-watercolor-blue/15 text-watercolor-blue border-watercolor-blue/20",
  "Personal Project": "bg-watercolor-green/15 text-watercolor-green border-watercolor-green/20",
  "Artwork": "bg-watercolor-purple/15 text-watercolor-purple border-watercolor-purple/20",
};

export function FeaturedWork() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Selected Works
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Placeholder artwork area */}
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.gradient}`}>
                <div className="flex h-full w-full items-center justify-center opacity-40 transition-opacity group-hover:opacity-60">
                  <span className="text-3xl">✦</span>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-card/90 via-card/30 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Badge variant="outline" className={`mb-2 w-fit text-xs ${categoryColors[project.category] || ""}`}>
                  {project.category}
                </Badge>
                <h3 className="font-display text-lg font-semibold text-card-foreground">
                  {project.title}
                </h3>
              </div>

              {/* Always-visible info on mobile */}
              <div className="border-t border-border p-4 group-hover:opacity-0 transition-opacity duration-300 md:block">
                <Badge variant="outline" className={`mb-1.5 text-xs ${categoryColors[project.category] || ""}`}>
                  {project.category}
                </Badge>
                <h3 className="font-display text-sm font-semibold text-card-foreground">
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
