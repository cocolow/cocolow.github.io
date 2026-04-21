import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DownloadResumeButton, InstagramIcon } from "@/design-system";
import { features } from "@/config/features";
import headshot from "@/assets/headshot.png";
import logoTiktok from "@/assets/logo-tiktok.png";
import logoHpb from "@/assets/logo-hpb.png";
import logoMoht from "@/assets/logo-moht.png";

const skills = [
  "Digital Product Strategy & Roadmap",
  "Certified Scrum Product Owner",
  "UX/UI Flows & Figma",
  "Market Research & Data Analytics",
  "Program & Project Management",
  "Stakeholder Engagement",
  "Facilitation & Mentoring",
  "Confluence & JIRA",
  "Power BI",
  "Miro & Procreate",
];

const timeline = [
  {
    year: "2025–2026",
    role: "UX Product Manager",
    org: "mindline.sg, Ministry of Health Transformation (MOHT)",
    logos: [logoMoht],
    description: [
      <>
        Led product revamp of <strong>mindline.sg</strong> (Singapore's national
        mental health platform, <strong>12k+ weekly users</strong>) alongside a
        new AI-assisted platform for capability building
      </>,
      <>
        Co-designed and co-led <strong>12 end-user research sessions</strong>,
        synthesising insights with designers across Brazil and Singapore to
        prioritise prototype changes and feature development
      </>,
      <>
        Partnered with Clinical and AI/Data Science teams on{" "}
        <strong>responsible AI use cases</strong> balancing user engagement,
        clinical safety, and feasibility
      </>,
    ],
  },
  {
    year: "2024–2025",
    role: "Product Manager (Risk & Operations)",
    org: "Trust & Safety, TikTok, Canada",
    logos: [logoTiktok],
    description: [
      <>
        Built risk detection capability roadmap across{" "}
        <strong>three workstreams</strong> — reducing manual detection-handling
        lag by <strong>60+ minutes daily</strong>
      </>,
      <>
        Designed and implemented a{" "}
        <strong>structured triage and handover log</strong> for ambiguous and
        emerging risk cases, standardising documentation and handover across
        teams — cutting per-trend handling time by <strong>30+ minutes</strong>
      </>,
      <>
        Proactively identified an emerging risk pattern through content
        monitoring and mobilised cross-functional teams, resulting in{" "}
        <strong>
          large-scale removal of violative posts and deactivation of accounts
        </strong>
      </>,
    ],
  },
  {
    year: "2022–2024",
    role: "Product Manager, Healthy Ageing",
    org: "Health Promotion Board (HPB), Singapore",
    logos: [logoHpb],
    description: [
      <>
        Spearheaded{" "}
        <a
          href="https://www.healthhub.sg/programmes/age-strong"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-primary transition-colors hover:underline"
        >
          AgeStrong
        </a>
        , Singapore's first gamified digital health programme for older adults
        on Healthy365 —{" "}
        <strong>100k+ sign-ups in 3 months with 30% completion</strong>
      </>,
      <>
        Co-created HPB's first reusable cross-team programme system, a
        configurable digital template adopted by other health domain teams—{" "}
        <strong>500k+ users reached</strong> via independently launched
        programmes
      </>,
      <>
        Designed a digital functional health measurement tool driving{" "}
        <strong>15%+ efficiency gains</strong> and saving{" "}
        <strong>20+ minutes per assessment</strong>
      </>,
      <>
        Identified and formally proposed a product feature enabling programme
        managers to <strong>independently create digital tasks</strong> without
        third-party vendors — saving{" "}
        <strong>24+ hours per task creation request</strong> by eliminating
        third-party turnaround time
      </>,
    ],
  },
  {
    year: "2018–2022",
    role: "Program Manager, Youth Mental Health",
    org: "Health Promotion Board (HPB), Singapore",
    logos: [logoHpb],
    description: [
      <>
        Conceived the <strong>'Open When' Letters Vending Machine</strong> —
        winning <strong>HPB's 1st Innovation Award</strong>
      </>,
      <>
        Identified a gap in post-school peer support and secured Youth Corps
        Singapore's buy-in to co-launch{" "}
        <a
          href="https://linktr.ee/projectreground"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-primary transition-colors hover:underline"
        >
          Project Reground
        </a>
        , Singapore's first community peer support group (
        <strong>100+ youths recruited</strong>)
      </>,
      <>
        Developed a peer support curriculum proposal, drawing on 15-school
        relationships,{" "}
        <strong>adopted nationwide across polytechnics and universities</strong>
      </>,
      <>
        Grew overall youth mental health programme reach by{" "}
        <strong>100%+ in one year</strong>
      </>,
    ],
  },
  {
    year: "2016–2018",
    role: "Assistant Project Manager, Health Screening",
    org: "Health Promotion Board (HPB), Singapore",
    logos: [logoHpb],
    description: [
      <>
        Managed <strong>national breast cancer screening operations</strong> in
        partnership with radiologists and nurses
      </>,
      <>
        Identified a recurring customer service issue through call data analysis
        and implemented a solution that{" "}
        <strong>reduced related call volume by 50%</strong>
      </>,
    ],
  },
];

const education = [
  {
    institution: "National University of Singapore",
    details: [
      "Graduate Certificate in Designing & Managing Products and Platforms (2022–2024)",
      "Certified Scrum Product Owner – Scrum Alliance (2023)",
      "BSc (Hons) Life Sciences & University Scholars Program (2012–2016)",
    ],
  },
  {
    institution: "University of British Columbia, Canada",
    details: ["Overseas Student Exchange Program (2014)"],
  },
];

const languages = [
  { name: "English", level: "Bilingual" },
  { name: "Mandarin", level: "Bilingual" },
  { name: "Thai", level: "Intermediate / Certified Level 4" },
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Floating decorative stickers */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Top-right star cluster */}
        <span className="absolute right-[8%] top-[12%] font-pixel text-5xl text-watercolor-yellow/30 rotate-12">
          ✦
        </span>
        <span className="absolute right-[12%] top-[15%] font-pixel text-3xl text-watercolor-orange/20 -rotate-6">
          ✦
        </span>

        {/* Left side doodles */}
        <span className="absolute left-[3%] top-[30%] font-pixel text-4xl text-watercolor-pink/20 rotate-[-15deg]">
          ♡
        </span>
        <span className="absolute left-[5%] top-[55%] font-pixel text-3xl text-watercolor-turquoise/25 rotate-6">
          ~
        </span>

        {/* Scattered geometric shapes */}
        <div className="absolute right-[5%] top-[40%] h-16 w-16 rotate-45 border-2 border-dashed border-watercolor-purple/15" />
        <div className="absolute left-[7%] top-[70%] h-12 w-12 border-2 border-watercolor-orange/15 rotate-12" />

        {/* Right side accents */}
        <span className="absolute right-[4%] top-[65%] font-pixel text-4xl text-watercolor-green/20 -rotate-12">
          ✿
        </span>
        <span className="absolute right-[10%] top-[85%] font-pixel text-3xl text-watercolor-blue/20 rotate-3">
          ◇
        </span>

        {/* Bottom left */}
        <span className="absolute bottom-[8%] left-[10%] font-pixel text-5xl text-watercolor-burgundy/15 rotate-[8deg]">
          ★
        </span>

        {/* Additional stickers */}
        <span className="absolute left-[15%] top-[18%] font-pixel text-3xl text-watercolor-blue/20 rotate-[10deg]">
          ◆
        </span>
        <span className="absolute right-[18%] top-[28%] font-pixel text-4xl text-watercolor-pink/18 -rotate-[8deg]">
          ✧
        </span>
        <span className="absolute left-[8%] top-[45%] font-pixel text-3xl text-watercolor-yellow/20 rotate-[20deg]">
          ☆
        </span>
        <span className="absolute right-[6%] top-[55%] font-pixel text-3xl text-watercolor-burgundy/15 rotate-[-10deg]">
          ❋
        </span>
        <span className="absolute left-[12%] top-[82%] font-pixel text-4xl text-watercolor-green/18 rotate-[5deg]">
          ~
        </span>
        <span className="absolute right-[15%] top-[75%] font-pixel text-3xl text-watercolor-turquoise/20 -rotate-[12deg]">
          ✦
        </span>
        <span className="absolute left-[20%] top-[60%] font-pixel text-3xl text-watercolor-orange/15 rotate-[15deg]">
          ◇
        </span>
        <div className="absolute right-[12%] top-[48%] h-10 w-10 rotate-[30deg] border-2 border-dashed border-watercolor-yellow/12" />
        <div className="absolute left-[4%] top-[90%] h-14 w-14 border-2 border-watercolor-turquoise/12 -rotate-[20deg]" />
        <div className="absolute top-[5%] left-[40%] h-56 w-56 rounded-full bg-watercolor-yellow/4 blur-3xl" />

        {/* Watercolor blobs */}
        <div className="absolute left-[-5%] top-[20%] h-64 w-64 rounded-full bg-watercolor-purple/5 blur-3xl" />
        <div className="absolute right-[-8%] top-[50%] h-72 w-72 rounded-full bg-watercolor-orange/5 blur-3xl" />
        <div className="absolute bottom-[10%] left-[30%] h-48 w-48 rounded-full bg-watercolor-pink/5 blur-3xl" />
      </div>

      <Navbar />
      <main className="relative pt-14">
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Header */}
            <div className="mb-16 text-center">
              <p className="mb-3 font-mono-heading text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                // About Me
              </p>
              <h1 className="font-mono-heading text-3xl font-bold tracking-tight sm:text-5xl">
                Coco Low <span className="gradient-text">Yu Ting</span>
              </h1>
              <div className="mx-auto mt-4 h-px w-32 bg-border" />
            </div>

            {/* Bio window */}
            <div className="retro-window mx-auto mb-12 max-w-3xl">
              <div className="retro-titlebar">
                <span className="text-muted-foreground">about_me.txt</span>
                <div className="retro-btn-group">
                  <span className="retro-btn-dot">_</span>
                  <span className="retro-btn-dot">□</span>
                  <span className="retro-btn-dot">×</span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-6 flex flex-col items-center sm:float-left sm:mr-6 sm:mb-4">
                  <div className="aspect-[3/4] w-40 overflow-hidden border-2 border-border">
                    <img
                      src={headshot}
                      alt="Coco Low Yu Ting"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-card-foreground">
                  A Product Manager with 9 years building digital health and
                  wellbeing products across Singapore and Canada — from B2C
                  experiences that help older adults manage their functional
                  health with confidence, to B2B platforms that save
                  practitioners time on admin so they can focus on their
                  patients. My work spans digital health (Healthy365's
                  AgeStrong, Singapore's first gamified digital health programme
                  for older adults), mental wellbeing (mindline.sg, Singapore's
                  national mental health platform), and Trust & Safety (risk
                  detection at TikTok).
                </p>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  I specialise in 0-to-1 launches in regulated environments —
                  where clinical workflows, AI feasibility, policy, and user
                  needs all have to resolve into something intuitive. My
                  practice blends user research, service design, and behaviour
                  change, with a track record of earning trust across
                  multistakeholder teams — and caring about the person on the
                  other side of every product decision.
                </p>
                {features.showResumeDownload && <DownloadResumeButton />}
              </div>
            </div>

            {/* Key achievements stickers */}
            <div className="mx-auto mb-16 max-w-3xl">
              <div className="mb-6 text-center">
                <h2 className="font-mono-heading text-xl font-bold sm:text-2xl">
                  Key <span className="gradient-text">Achievements</span>
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-center border-[1.5px] border-foreground bg-watercolor-orange/15 px-5 py-4 text-center text-sm leading-relaxed text-foreground">
                  <strong>AgeStrong</strong>: 100k+ sign-ups, 30% completion
                </div>
                <div className="flex items-center justify-center border-[1.5px] border-foreground bg-watercolor-purple/15 px-5 py-4 text-center text-sm leading-relaxed text-foreground">
                  <strong>HPB 1st Innovation Award</strong> — Open When Letters
                  Vending Machine
                </div>
                <div className="flex items-center justify-center border-[1.5px] border-foreground bg-watercolor-blue/15 px-5 py-4 text-center text-sm leading-relaxed text-foreground">
                  <strong>SG's national peer support curriculum</strong> —
                  adopted across polytechnics & universities
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="retro-window mx-auto mb-12 max-w-3xl">
              <div className="retro-titlebar">
                <span className="text-muted-foreground">skills.exe</span>
                <div className="retro-btn-group">
                  <span className="retro-btn-dot">_</span>
                  <span className="retro-btn-dot">□</span>
                  <span className="retro-btn-dot">×</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 p-6">
                {skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="border border-border bg-muted px-3 py-1.5 font-mono-heading text-[11px] font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="mx-auto mb-12 max-w-3xl">
              <div className="mb-8 text-center">
                <h2 className="font-mono-heading text-xl font-bold sm:text-2xl">
                  Work <span className="gradient-text">Experience</span>
                </h2>
              </div>

              <div className="relative border-l-2 border-border pl-6 sm:pl-8">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className="retro-window relative mb-6 animate-fade-in-up"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    {/* Dot on timeline */}
                    <div className="absolute -left-[calc(1.5rem+7px)] top-4 h-3 w-3 border-2 border-primary bg-background sm:-left-[calc(2rem+7px)]" />

                    <div className="retro-titlebar">
                      <span className="text-muted-foreground">{item.year}</span>
                      <div className="retro-btn-group">
                        <span className="retro-btn-dot">_</span>
                        <span className="retro-btn-dot">□</span>
                        <span className="retro-btn-dot">×</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex shrink-0 items-center gap-2 pt-0.5">
                          {item.logos.map((logo, li) => (
                            <img
                              key={li}
                              src={logo}
                              alt=""
                              className="h-6 w-6 object-contain"
                            />
                          ))}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-mono-heading text-sm font-bold text-card-foreground">
                            {item.role}
                          </h3>
                          <p className="mb-2 font-mono-heading text-[11px] text-muted-foreground">
                            {item.org}
                          </p>
                          <ul className="space-y-1.5">
                            {item.description.map((d, di) => (
                              <li
                                key={di}
                                className="flex gap-2 text-xs leading-relaxed text-muted-foreground"
                              >
                                <span className="mt-0.5 flex-shrink-0 font-mono-heading text-foreground">
                                  ›
                                </span>
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="retro-window mx-auto mb-12 max-w-3xl">
              <div className="retro-titlebar">
                <span className="text-muted-foreground">education.log</span>
                <div className="retro-btn-group">
                  <span className="retro-btn-dot">_</span>
                  <span className="retro-btn-dot">□</span>
                  <span className="retro-btn-dot">×</span>
                </div>
              </div>
              <div className="divide-y divide-border">
                {education.map((edu) => (
                  <div key={edu.institution} className="p-5">
                    <h3 className="mb-2 font-mono-heading text-sm font-bold text-card-foreground">
                      {edu.institution}
                    </h3>
                    <ul className="space-y-1">
                      {edu.details.map((d) => (
                        <li
                          key={d}
                          className="text-xs leading-relaxed text-muted-foreground"
                        >
                          → {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mx-auto mb-12 grid max-w-3xl grid-cols-3 gap-4">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="retro-window min-w-[120px] text-center"
                >
                  <div className="retro-titlebar justify-center">
                    <span className="text-muted-foreground">LANGUAGE</span>
                  </div>
                  <div className="p-3">
                    <p className="font-mono-heading text-sm font-bold text-card-foreground">
                      {lang.name}
                    </p>
                    <p className="mt-1 text-[10px] text-muted-foreground">
                      {lang.level}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Beyond Work — Coconut Calligraphy */}
            <div className="retro-window mx-auto mb-12 max-w-3xl">
              <div className="retro-titlebar">
                <span className="text-muted-foreground">5-to-9.txt</span>
                <div className="retro-btn-group">
                  <span className="retro-btn-dot">_</span>
                  <span className="retro-btn-dot">□</span>
                  <span className="retro-btn-dot">×</span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h2 className="mb-4 font-mono-heading text-xl font-bold sm:text-2xl">
                  My 5-to-9,{" "}
                  <span className="gradient-text">Fueling the 9-to-5</span>
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-card-foreground">
                  I founded Coconut Calligraphy in 2016 as a creative outlet — a
                  way to process a demanding day job and explore a craft I love.
                  Over time, it grew into a small art brand with commissions,
                  wedding stationery, and wellbeing workshops for 100+ youth and
                  seniors. Running it end-to-end taught me product instincts no
                  PM course could: how to price and position a product, handle
                  logistics from inventory to shipping, build an audience from
                  zero, and design an experience from first glance to final
                  delivery. Those lessons — paired with the empathy of teaching
                  wellbeing to youth and seniors — directly shape how I approach
                  health product work.
                </p>
                <p className="mb-3 font-mono-heading text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  // Skills Picked Up
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Pricing & Positioning",
                    "Logistics & Fulfilment",
                    "Content Creation",
                    "End-to-End Experience",
                    "User Empathy",
                    "Workshop Facilitation",
                  ].map((lesson) => (
                    <span
                      key={lesson}
                      className="border border-border bg-muted px-3 py-1.5 font-mono-heading text-[11px] font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {lesson}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-border pt-5">
                  <a
                    href="https://www.instagram.com/coconutcalligraphy/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono-heading text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary/80"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    See @coconutcalligraphy on Instagram
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
