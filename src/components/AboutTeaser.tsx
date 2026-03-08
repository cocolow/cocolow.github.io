import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutTeaser() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Avatar placeholder */}
          <div className="flex justify-center lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full gradient-warm-bg opacity-25 blur-lg" />
              <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-border bg-card shadow-lg sm:h-64 sm:w-64">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-watercolor-yellow/20 via-watercolor-orange/20 to-watercolor-pink/20">
                  <div className="text-center">
                    <div className="mb-1 text-3xl">👤</div>
                    <p className="text-xs text-muted-foreground">Your Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center lg:col-span-3 lg:text-left">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              About Me
            </p>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Creative at Heart,
              <br />
              <span className="gradient-text">Technical by Trade</span>
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              I'm a multidisciplinary creative who bridges the worlds of art and technology. With a passion for visual storytelling and a background in software development, I create work that's both beautiful and functional. From brand identities to generative art to open-source tools — every project is an opportunity to explore and innovate.
            </p>
            <div>
              <Button variant="outline" className="group">
                Learn More About Me
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
