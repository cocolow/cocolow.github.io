import { ArrowRight } from "lucide-react";
import { CTAButton, RetroWindow, Sticker } from "@/design-system";
import headshot from "@/assets/headshot.png";

type AboutMeCardProps = {
  ctaHref?: string;
  ctaLabel?: string;
};

export function AboutMeCard({
  ctaHref = "/about",
  ctaLabel = "Learn More",
}: AboutMeCardProps) {
  return (
    <RetroWindow title="about_me.txt">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-5 lg:gap-12">
        <div className="flex items-center justify-center lg:col-span-2">
          <div className="flex flex-col items-center gap-4">
            <div className="relative tape-top">
              <div className="dashed-frame h-48 w-48 overflow-hidden bg-gradient-to-br from-watercolor-yellow/20 via-watercolor-orange/20 to-watercolor-pink/20 sm:h-56 sm:w-56">
                <img
                  src={headshot}
                  alt="Coco Low Yu Ting"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-10 bottom-6">
                <Sticker className="rotate-12 bg-watercolor-green/20 text-foreground text-[10px]">
                  ♡ hello!
                </Sticker>
              </div>
            </div>
            <p className="font-mono-heading text-sm font-bold tracking-wide text-foreground">
              Coco Low Yu Ting
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center lg:col-span-3">
          <p className="mb-2 font-mono-heading text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            // About Me
          </p>
          <h2 className="mb-4 font-mono-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Building Products,
            <br />
            <span className="gradient-text">Rooted in User-Centricity</span>
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            I lead 0-to-1 product launches in regulated, multi-stakeholder
            environments — where clinical workflows, AI feasibility, policy
            constraints, and user needs all have to resolve into something
            intuitive. My approach combines user research, service design, and
            behaviour change, with a track record of earning trust across
            multi-stakeholder teams — and caring about the person on the other
            side of every product decision.
          </p>
          <div>
            <CTAButton href={ctaHref} variant="outline" className="group">
              {ctaLabel}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </CTAButton>
          </div>
        </div>
      </div>
    </RetroWindow>
  );
}
