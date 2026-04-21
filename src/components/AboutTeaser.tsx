import { AboutMeCard } from "./AboutMeCard";

export function AboutTeaser() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AboutMeCard />
        </div>
      </div>
    </section>
  );
}
