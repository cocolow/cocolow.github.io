import { ArrowDown } from "lucide-react";
import { CTAButton, RetroWindow, Sticker } from "@/design-system";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-14">
      {/* Scattered decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-8 top-20 h-48 w-48 rotate-6 border-2 border-border bg-watercolor-orange/15" />
        <div className="absolute right-12 top-16 h-32 w-56 -rotate-3 border-2 border-border bg-watercolor-purple/15" />
        <div className="absolute bottom-20 left-1/4 h-36 w-36 rotate-12 border-2 border-border bg-watercolor-pink/10" />
        <div className="absolute -bottom-4 right-1/3 h-44 w-44 -rotate-6 border-2 border-border bg-watercolor-turquoise/10" />
        <div className="absolute left-[15%] top-[30%] h-px w-32 rotate-45 bg-border" />
        <div className="absolute right-[20%] bottom-[35%] h-px w-24 -rotate-12 bg-border" />
        <span className="absolute left-[10%] top-[20%] font-mono-heading text-xs text-muted-foreground/40">
          +
        </span>
        <span className="absolute right-[15%] top-[25%] font-mono-heading text-xs text-muted-foreground/40">
          +
        </span>
        <span className="absolute left-[60%] bottom-[20%] font-mono-heading text-xs text-muted-foreground/40">
          +
        </span>
      </div>

      <div className="container relative z-10 mx-auto flex justify-center px-4 lg:px-8">
        <div className="flex max-w-2xl flex-col justify-center">
          <RetroWindow title="intro.txt">
            <div className="p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <Sticker className="bg-watercolor-orange/20 text-foreground">
                  Product Manager
                </Sticker>
                <Sticker className="rotate-1 bg-watercolor-purple/20 text-foreground">
                  Artist
                </Sticker>
                <Sticker className="-rotate-1 bg-watercolor-turquoise/20 text-foreground">
                  Creator
                </Sticker>
              </div>
              <h1 className="mb-4 font-mono-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Hi, I'm <span className="gradient-text">Coco</span>
              </h1>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                A Product Manager with 9 years designing B2C and B2B digital
                products across Singapore and Canada — spanning digital health,
                mental wellbeing, and Trust & Safety at TikTok. Recent work
                includes responsible AI use cases for mental health. Past
                flagships include AgeStrong (100k+ sign-ups in 3 months). On the
                side, I paint and run Coconut Calligraphy — an art brand I
                started as a passion project, with wellbeing workshops for 100+
                youth and seniors.
              </p>
              <div className="flex flex-wrap gap-3">
                <CTAButton href="/projects">
                  View My Work
                  <ArrowDown className="ml-1 h-4 w-4" />
                </CTAButton>
              </div>
            </div>
          </RetroWindow>
        </div>
      </div>
    </section>
  );
}
