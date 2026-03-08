import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-watercolor-orange/20 blur-3xl" />
        <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-watercolor-purple/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-watercolor-pink/15 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-watercolor-turquoise/15 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground animate-fade-in">
            Artist · Developer · Creator
          </p>
          <h1 className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl animate-fade-in-up">
            Bringing Ideas
            <br />
            <span className="gradient-text">to Life</span>
          </h1>
          <p className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            A curated collection of work projects, personal explorations, and artwork — blending technology with creativity.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-start" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="gradient-hero-bg border-0 px-8 text-primary-foreground shadow-lg transition-transform hover:scale-105">
              View My Work
              <ArrowDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Featured Artwork Placeholder */}
        <div className="flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            {/* Decorative gradient border */}
            <div className="absolute -inset-2 rounded-2xl gradient-hero-bg opacity-30 blur-md" />
            <div className="relative aspect-[4/5] w-72 overflow-hidden rounded-2xl border border-border bg-card shadow-lg sm:w-80 lg:w-96">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-watercolor-yellow/30 via-watercolor-orange/20 to-watercolor-purple/30">
                <div className="text-center">
                  <div className="mb-2 text-4xl">🎨</div>
                  <p className="text-sm font-medium text-muted-foreground">Featured Artwork</p>
                  <p className="text-xs text-muted-foreground/60">Replace with your image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
