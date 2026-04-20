import { ArrowRight } from "lucide-react";
import { CTAButton, RetroWindow, Sticker } from "@/design-system";

export function AboutTeaser() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <RetroWindow title="about_me.txt">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-5 lg:gap-12">
              {/* Avatar placeholder */}
              <div className="flex justify-center lg:col-span-2">
                <div className="relative tape-top">
                  <div className="dashed-frame h-48 w-48 overflow-hidden bg-gradient-to-br from-watercolor-yellow/20 via-watercolor-orange/20 to-watercolor-pink/20 sm:h-56 sm:w-56">
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="text-center">
                        <div className="mb-1 text-3xl">👤</div>
                        <p className="font-pixel text-sm text-muted-foreground">
                          Your Photo
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Decorative sticker */}
                  <div className="absolute -bottom-3 -right-3">
                    <Sticker className="rotate-6 bg-watercolor-green/20 text-foreground text-[10px]">
                      ♡ hello!
                    </Sticker>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center lg:col-span-3">
                <p className="mb-2 font-mono-heading text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  // About Me
                </p>
                <h2 className="mb-4 font-mono-heading text-2xl font-bold tracking-tight sm:text-3xl">
                  Creative at Heart,
                  <br />
                  <span className="gradient-text">Technical by Trade</span>
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  I'm a multidisciplinary creative who bridges the worlds of art
                  and technology. With a passion for visual storytelling and a
                  background in software development, I create work that's both
                  beautiful and functional. From brand identities to generative
                  art to open-source tools — every project is an opportunity to
                  explore and innovate.
                </p>
                <div>
                  <CTAButton href="/about" variant="outline" className="group">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </CTAButton>
                </div>
              </div>
            </div>
          </RetroWindow>
        </div>
      </div>
    </section>
  );
}
