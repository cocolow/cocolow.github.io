import { Download } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

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
    year: "2025–Present",
    role: "UX Product Manager",
    org: "mindline.sg, Ministry of Health Transformation (MOHT)",
    description:
      "Revamping Singapore's national digital mental health platform to improve engagement and personalise care via AI-enabled capabilities.",
  },
  {
    year: "2024–2025",
    role: "Product Manager (Risk & Operations)",
    org: "Trust & Safety, TikTok, Canada",
    description:
      "Built risk detection tools that cut manual detection-handling lag time by over 60 mins daily. Led investigations into risk signals leveraging data analytics.",
  },
  {
    year: "2022–2024",
    role: "Product Manager, Healthy Ageing",
    org: "Health Promotion Board (HPB), Singapore",
    description:
      "Designed Singapore's first gamified digital health program for seniors on the Healthy365 app. Achieved 100k+ sign-ups in 3 months.",
  },
  {
    year: "2018–2022",
    role: "Program Manager, Youth Mental Health",
    org: "Health Promotion Board (HPB), Singapore",
    description:
      "Spearheaded 5-year roadmap and launched products reaching 700k+ users nationally. Created the award-winning 'Open When' Letters initiative.",
  },
  {
    year: "2016–2018",
    role: "Assistant Project Manager, Health Screening",
    org: "Health Promotion Board (HPB), Singapore",
    description:
      "Managed national breast cancer screening operations and implemented a solution reducing customer call requests by 50%.",
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14">
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
                <p className="mb-4 text-sm leading-relaxed text-card-foreground">
                  Ex-TikTok Product Manager with 8+ years of experience in Singapore and Canada,
                  recognised for using service design and innovative strategies to create
                  customer-centric products and programs in digital health and mental wellbeing.
                </p>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  Led design of Singapore's first national gamified digital public health program for
                  older adults. Skilled in stakeholder engagement, fostering partnerships, and
                  leading cross-functional teams across NA, APAC, and EU. Creative, curious problem
                  solver passionate about improving lives. Also built an art brand on social media as
                  a mental wellbeing project.
                </p>
                <a href="/Resume_Coco_Low_2026.pdf" download>
                  <Button variant="outline" className="font-mono-heading text-xs uppercase tracking-wider">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume (PDF)
                  </Button>
                </a>
              </div>
            </div>

            {/* Key achievements stickers */}
            <div className="mx-auto mb-16 flex max-w-3xl flex-wrap justify-center gap-3">
              <span className="sticker bg-watercolor-orange/15 text-foreground">100k+ sign-ups in 3 months</span>
              <span className="sticker bg-watercolor-purple/15 text-foreground" style={{ transform: "rotate(1.5deg)" }}>
                700k+ users reached
              </span>
              <span className="sticker bg-watercolor-blue/15 text-foreground" style={{ transform: "rotate(-1deg)" }}>
                Innovation Award Winner
              </span>
              <span className="sticker bg-watercolor-green/15 text-foreground" style={{ transform: "rotate(2deg)" }}>
                Global Teams (NA, APAC, EU)
              </span>
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
                      <h3 className="font-mono-heading text-sm font-bold text-card-foreground">
                        {item.role}
                      </h3>
                      <p className="mb-2 font-mono-heading text-[11px] text-muted-foreground">
                        {item.org}
                      </p>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
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
                        <li key={d} className="text-xs leading-relaxed text-muted-foreground">
                          → {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mx-auto mb-12 flex max-w-3xl justify-center gap-4">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="retro-window min-w-[120px] text-center"
                >
                  <div className="retro-titlebar justify-center">
                    <span className="text-muted-foreground">lang</span>
                  </div>
                  <div className="p-3">
                    <p className="font-mono-heading text-sm font-bold text-card-foreground">
                      {lang.name}
                    </p>
                    <p className="mt-1 text-[10px] text-muted-foreground">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
