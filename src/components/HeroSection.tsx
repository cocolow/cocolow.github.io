import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import headshot from "@/assets/headshot.png";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-14">
      {/* Scattered decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient color blocks — collage style */}
        <div className="absolute -left-8 top-20 h-48 w-48 rotate-6 border-2 border-border bg-watercolor-orange/15" />
        <div className="absolute right-12 top-16 h-32 w-56 -rotate-3 border-2 border-border bg-watercolor-purple/15" />
        <div className="absolute bottom-20 left-1/4 h-36 w-36 rotate-12 border-2 border-border bg-watercolor-pink/10" />
        <div className="absolute -bottom-4 right-1/3 h-44 w-44 -rotate-6 border-2 border-border bg-watercolor-turquoise/10" />
        
        {/* Doodle lines */}
        <div className="absolute left-[15%] top-[30%] h-px w-32 rotate-45 bg-border" />
        <div className="absolute right-[20%] bottom-[35%] h-px w-24 -rotate-12 bg-border" />
        
        {/* Corner marks scattered */}
        <span className="absolute left-[10%] top-[20%] font-mono-heading text-xs text-muted-foreground/40">+</span>
        <span className="absolute right-[15%] top-[25%] font-mono-heading text-xs text-muted-foreground/40">+</span>
        <span className="absolute left-[60%] bottom-[20%] font-mono-heading text-xs text-muted-foreground/40">+</span>
      </div>

      <div className="container relative z-10 mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Text Content — in a retro window */}
        <div className="flex flex-col justify-center">
          <div className="retro-window">
            <div className="retro-titlebar">
              <span className="text-muted-foreground">intro.txt</span>
              <div className="retro-btn-group">
                <span className="retro-btn-dot">_</span>
                <span className="retro-btn-dot">□</span>
                <span className="retro-btn-dot">×</span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="sticker bg-watercolor-orange/20 text-foreground">Product Manager</span>
                <span className="sticker rotate-1 bg-watercolor-purple/20 text-foreground">Artist</span>
                <span className="sticker -rotate-1 bg-watercolor-turquoise/20 text-foreground">Creator</span>
              </div>
              <h1 className="mb-4 font-mono-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Hi, I'm <span className="gradient-text">Coco</span>
              </h1>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Ex-TikTok Product Manager with 8+ years of experience creating customer-centric products in digital health and mental wellbeing. I blend technology with creativity — from designing Singapore's first national gamified digital health program to building an art brand as a mental wellbeing project. This is a curated collection of my work projects, personal explorations, and artwork.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="gradient-hero-bg border-0 px-6 font-mono-heading text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-[3px_3px_0px_hsl(var(--foreground)/0.15)] transition-all hover:shadow-[1px_1px_0px_hsl(var(--foreground)/0.15)] hover:translate-x-[2px] hover:translate-y-[2px]">
                  <a href="/projects">
                    View My Work
                    <ArrowDown className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 px-6 font-mono-heading text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_hsl(var(--foreground)/0.15)] transition-all hover:shadow-[1px_1px_0px_hsl(var(--foreground)/0.15)] hover:translate-x-[2px] hover:translate-y-[2px]">
                  <a href="/services#book-a-service">
                    Enquire Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Artwork — retro window with stickers */}
        <div className="flex items-center justify-center">
          <div className="relative pb-6">
            {/* Decorative stickers around the image */}
            <div className="absolute -right-4 -top-6 z-20">
              <span className="sticker rotate-6 bg-watercolor-yellow/40 text-foreground">
                <Star className="mr-1 inline h-3 w-3" /> NEW
              </span>
            </div>
            <div className="absolute bottom-2 -left-4 z-20">
              <span className="sticker -rotate-3 bg-watercolor-pink/30 text-foreground">
                <Sparkles className="mr-1 inline h-3 w-3" /> Featured
              </span>
            </div>
            
            <div className="retro-window border-[3px] border-foreground/80">
              <div className="retro-titlebar">
                <span className="text-muted-foreground">artwork_01.png</span>
                <div className="retro-btn-group">
                  <span className="retro-btn-dot">_</span>
                  <span className="retro-btn-dot">□</span>
                  <span className="retro-btn-dot">×</span>
                </div>
              </div>
              <div className="aspect-[4/5] w-64 sm:w-72 lg:w-80 overflow-hidden border-t-[3px] border-foreground/80">
                <img src={artwork01} alt="Featured Artwork - Watercolor florals by Coco" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
