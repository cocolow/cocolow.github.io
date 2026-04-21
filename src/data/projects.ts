export interface ProjectTrack {
  track?: string;
  points: string[];
}

export interface ProjectLearning {
  theme: string;
  detail: string;
}

export interface ProjectMedia {
  type: "image" | "youtube";
  /** For images: path or URL. For YouTube: any watch/youtu.be/embed URL. */
  url: string;
  caption?: string;
  /** CSS aspect-ratio for images (e.g. "9/16", "4/3", "1/1"). Defaults to "9/16". Ignored for YouTube (always 16/9). */
  aspectRatio?: string;
}

import { features } from "@/config/features";

export interface Project {
  file: string;
  category: "Work" | "Art" | "Personal";
  /** Business-to-business / business-to-consumer audience indicator. Some projects are both. */
  audience?: ("B2B" | "B2C")[];
  gradient: string;
  image?: string;
  title: string;
  /** When set, hyperlinks the first segment of the title (before " — ") in the project modal. */
  titleUrl?: string;
  description: string;
  org?: string;
  period?: string;
  tags?: string[];
  metrics?: { value: string; label: string }[];
  problem?: string[];
  approach?: string[];
  built?: ProjectTrack[];
  outcomes?: string[];
  learnings?: ProjectLearning[];
  media?: ProjectMedia[];
  note?: string;
  featured?: boolean;
}

const allProjects: Project[] = [
  // ——— 1. mindline.sg ———————————————————————————————————————————————————
  {
    file: "MINDLINE_REVAMP.FIG",
    category: "Work",
    audience: ["B2C", "B2B"],
    gradient: "from-teal-400/15 to-cyan-300/15",
    title:
      "mindline.sg — Personalising Singapore's national mental health platform",
    description:
      "AI-enabled revamp of Singapore's national digital mental health touchpoint. Serving 12,000+ weekly users.",
    org: "Ministry of Health Transformation (MOHT), Singapore",
    period: "Aug 2025 – Feb 2026",
    tags: [
      "Mental Health",
      "Responsible AI",
      "UX PM",
      "Discovery Research",
      "Clinical Safety",
      "Cross-timezone",
      "Figma",
    ],
    metrics: [
      { value: "12,000+", label: "weekly users" },
      { value: "12", label: "research sessions led" },
      { value: "2", label: "product tracks" },
    ],
    problem: [
      "mindline.sg — Singapore's national first-stop digital mental health touchpoint — needed better engagement and personalisation to reach more users",
      "Mental health responders (e.g. counsellors) lacked AI-assisted tools for capability training and improved client support",
      "Multiple teams (Clinical, Design, AI/Data Science, Business) needed early alignment on usability, safety, and feasibility before any build began",
    ],
    approach: [
      "Defined product direction through proactive discovery research, stakeholder interviews, and market analysis",
      "Co-designed and led 12 end-user research sessions, synthesising insights with designers in Brazil and Singapore to prioritise prototype changes",
      "Established early cross-team alignment across Business, Clinical, Design, and AI/Data Science — balancing usability, safety, and feasibility",
      "Partnered with Clinical and AI/Data Science teams to define responsible AI use cases appropriate for a mental health context",
    ],
    built: [
      {
        track: "B2C — mindline.sg revamp",
        points: [
          "AI-enabled engagement and personalised care for 12,000+ weekly users",
          "Directed cross-timezone design delivery across Brazil and Singapore — setting priorities, managing timelines, and ensuring output was stakeholder-ready",
          "Navigated product decisions at the intersection of user engagement, clinical safety, and AI feasibility",
        ],
      },
      {
        track: "B2B — Mental health responder platform",
        points: [
          "Digital platform for capability training and AI-assisted support for mental health responders (e.g. counsellors)",
          "Identified safe and impactful AI use cases, ensuring features were clinically appropriate and operationally feasible",
        ],
      },
    ],
    note: "Details embargoed. Case study focuses on process and approach.",
  },

  // ——— 2. AgeStrong ————————————————————————————————————————————————————
  {
    file: "AGESTRONG.FIG",
    category: "Work",
    audience: ["B2C", "B2B"],
    featured: true,
    gradient: "from-amber-400/15 to-orange-300/15",
    image: "/projects/agestrong-feedback.png",
    title:
      "AgeStrong — Singapore's first gamified digital health programme for seniors",
    titleUrl: "https://www.healthhub.sg/programmes/age-strong",
    description:
      "End-to-end product development of a gamified digital health challenge on Healthy365. 100,000+ sign-ups in 3 months.",
    org: "Health Promotion Board (HPB), Singapore",
    period: "Jun 2022 – Sep 2024",
    tags: [
      "Gamification",
      "Behavioural Science",
      "Seniors / 50+",
      "Digital Health",
      "Service Design",
      "B2C",
      "B2B",
      "Figma",
    ],
    metrics: [
      { value: "100k+", label: "sign-ups in 3 months" },
      { value: "24hrs+", label: "saved per task request" },
      { value: ">10%", label: "more event sign-ups" },
      { value: ">15%", label: "operational efficiency gain" },
    ],
    problem: [
      "Existing H365 programmes were topic-specific (exercise, nutrition) — not user-specific or holistic for seniors as a segment",
      "Could not scale health engagement beyond 1,000 daily events without a programmatic, self-serve solution",
      "Safety and clinical risk concerns when designing health activities for adults aged 50+",
      "No reusable programme template existed — every digital programme required a custom build, with managers reliant on third-party vendors for each task",
    ],
    approach: [
      "Benchmarked ecommerce and consumer apps — check-in reward mechanics proven to drive habit formation",
      "Incorporated behavioural science and clinical workflow design into programme logic from the ground up",
      "Concept testing confirmed: simple UI with clear calls-to-action is essential for senior usability",
      "Defined programme logic end-to-end: from programme brief to lo-fi prototype through UAT, aligning 5+ stakeholder teams",
    ],
    built: [
      {
        track: "Consumer track — Healthy365 App (B2C)",
        points: [
          "Check-in personalisation — rule-based content tailoring based on user responses, ahead of AI capabilities",
          "Game of chance mechanic for ongoing daily engagement",
          "Upgraded rewards structure to incentivise sustained participation",
          "4 health engagement task types — quizzes, mini-games, tailored workouts, and daily challenges",
        ],
      },
      {
        track: "Platform track — Business Admin Portal (BAP)",
        points: [
          "Digital programme template — co-created HPB's first reusable digital programme template, adopted across the entire organisation",
          "Task creation feature — enabled programme managers to independently create digital tasks on BAP without waiting for third-party vendors, saving 24+ hours per task creation request",
          "Drove product alignment and onboarding via tailored materials across 5+ stakeholder teams — from workflow training for managers to strategic context decks for senior leadership",
        ],
      },
    ],
    outcomes: [
      "100,000+ sign-ups within 3 months of launch — first national gamified digital health programme for seniors",
      "HPB Epic Award 2024 (AgeStrong)",
      "HPB Epic Award 2023 — Business Transformation Team Gold Award (Prefrailty digital health tool)",
    ],
    learnings: [
      {
        theme: "Scale comes from systems, not products",
        detail:
          "Designing a reusable programme template meant the team's biggest impact wasn't AgeStrong itself — it was the 500k+ users reached through programmes other health domain teams launched independently afterward.",
      },
      {
        theme: "Clinical rigour + consumer UX need a translator",
        detail:
          "Turning clinical frailty scoring into a gamified senior experience required holding tension between two valid logics — clinicians wanted precision, users wanted simplicity. The PM's job was making both true without either side feeling compromised.",
      },
      {
        theme: "E-commerce patterns translate — with translation",
        detail:
          "Check-in and reward mechanics proven in consumer apps drove habit formation for seniors, but only after concept testing confirmed simple UI with clear CTAs was non-negotiable. Transferring patterns isn't copy-paste — it's translation into a new user context.",
      },
      {
        theme: "Front-load stakeholder disagreement",
        detail:
          "Aligning 5+ teams (clinical, ops, vendors, engineering, leadership) upfront through tailored materials — strategic decks for leaders, workflow training for operators — front-loaded disagreement and saved weeks of rework mid-build.",
      },
    ],
    media: [
      {
        type: "image",
        url: "/projects/agestrong-overview.png",
        caption: "Overview — one simple task a day",
      },
      {
        type: "image",
        url: "/projects/agestrong-workout.png",
        caption: "Guided workout flow",
      },
      {
        type: "image",
        url: "/projects/agestrong-feedback.png",
        caption: "Post-workout feedback & rewards",
      },
      {
        type: "image",
        url: "/projects/agestrong-quiz.png",
        caption: "Gamified health quiz flow",
      },
    ],
  },

  // ——— 3. Healthy365 Enhanced Filtering ———————————————————————————————————
  {
    file: "HEALTHY365_FILTERING.FIG",
    category: "Work",
    audience: ["B2C"],
    gradient: "from-lime-400/15 to-green-300/15",
    image: "/projects/healthy365-filter-date.png",
    title:
      "Healthy365 Enhanced Filtering — Helping users discover relevant health events",
    description:
      "B2C filtering and map-view feature on Healthy365 (Singapore's national healthy-living app), helping users navigate 1,000+ daily events with date, time, location, and age filters.",
    org: "Health Promotion Board (HPB), Singapore",
    period: "2022 – 2024",
    tags: [
      "B2C",
      "Digital Health",
      "Feature Design",
      "Filters & Taxonomy",
      "Seniors / 50+",
      "Figma",
    ],
    metrics: [
      { value: ">10%", label: "more senior event sign-ups" },
      { value: "1,000+", label: "daily events to navigate" },
    ],
    problem: [
      "Users found it difficult to navigate and find health events that suited their needs (e.g., exercise classes for a specific age group) amid ~1,000 events daily",
      "Hard to identify events in users' preferred locations",
      "Tedious to find and book events in advance",
    ],
    approach: [
      "Benchmarked consumer apps (e.g., Disney) — chronological sorting, interactive maps, and proper taxonomy surfaced as key enablers of search and filtering",
      "Translated those patterns into H365's health-events context — prioritising clarity and low cognitive load for the senior user base",
    ],
    built: [
      {
        track: "Filtering & map view",
        points: [
          "Filter health events by date, time, location, and suitable age range — directly targeting the navigation pain points",
          "Map view for spatial event discovery, enabling users to quickly see which events are nearby",
          "Taxonomy and grouping updates to make filters predictable and usable — a foundational step before adding more event types",
        ],
      },
    ],
    outcomes: [
      ">10% increase in event sign-ups for seniors, optimising on-ground senior health event attendance",
    ],
    media: [
      {
        type: "image",
        url: "/projects/healthy365-filter-date.png",
        caption: "Date / time / location / age-range filters",
        aspectRatio: "9/16",
      },
      {
        type: "image",
        url: "/projects/healthy365-map-view.png",
        caption: "Map view — spatial event discovery",
        aspectRatio: "9/16",
      },
    ],
  },

  // ——— 4. Digital Functional Health Assessment ————————————————————————————
  {
    file: "FUNCTIONAL_ASSESSMENT.FIG",
    category: "Work",
    audience: ["B2B"],
    gradient: "from-sky-400/15 to-cyan-300/15",
    image: "/projects/functional-assessment-portalentry.png",
    title:
      "Digital Functional Health Assessment — Measurement tool for on-ground trainers",
    description:
      "Two-part B2B system: an on-ground mobile app for trainers conducting functional health measurements, and a web portal for admins to create and customise metric-based assessments.",
    org: "Health Promotion Board (HPB), Singapore",
    period: "2022 – 2024",
    tags: [
      "B2B",
      "Digital Health",
      "Clinical Workflow",
      "Operational Efficiency",
      "Measurement",
      "Figma",
    ],
    metrics: [
      { value: "15%+", label: "operational efficiency gain" },
      { value: "20+", label: "mins saved per assessment" },
    ],
    problem: [
      "Trainers took physical functional health measurements on-ground and manually calculated participants' functional health status — slow and error-prone",
      "No reusable digital tool existed to create and customise metric-based assessments for different target groups — every new assessment required custom work",
    ],
    approach: [
      "Designed two paired touchpoints — one for admins creating assessments, one for trainers running them — so the workflow was continuous end-to-end",
      "Kept trainer-side flows scannable and low-friction, since they operate on-ground with limited time per participant",
      "Aligned with clinical stakeholders to ensure measurement metrics and scoring bands remained clinically valid",
    ],
    built: [
      {
        track: "Trainer-side — H365 Pal app (B2B)",
        points: [
          "QR-scan-based participant lookup, with grouping, search, and real-time check-in status",
          "Step-by-step measurement flow — conduct CFS or custom assessments with automated score calculation",
          "Participant profile with contextual info and full assessment history in one place",
        ],
      },
      {
        track: "Admin-side — Business Web-Portal (B2B)",
        points: [
          "Assessment builder — configure general info (description, unit of measurement, timing device, duration, scoring rules)",
          "Metric tables with per-age-range and per-gender scoring bands for precise, clinically-informed assessments",
          "Published assessments feed directly into the H365 Pal app for trainers to run on-ground",
        ],
      },
    ],
    outcomes: [
      "15%+ operational efficiency gain, with 20+ minutes saved per assessment",
      "Eliminated manual calculation errors by automating scoring at point-of-measurement",
    ],
    media: [
      {
        type: "image",
        url: "/projects/functional-assessment-app.png",
        caption: "H365 Pal app — trainer-side measurement flow",
        aspectRatio: "4/3",
      },
      {
        type: "image",
        url: "/projects/functional-assessment-portal.png",
        caption:
          "Business Web-Portal — create and customise metric-based assessments",
        aspectRatio: "4/3",
      },
    ],
  },

  // ——— 5. Open When Letters ——————————————————————————————————————————————
  {
    file: "OPENWHEN_LETTERS.TXT",
    category: "Work",
    audience: ["B2C"],
    featured: true,
    gradient: "from-purple-400/15 to-pink-300/15",
    image: "/projects/openwhen-vendingportalentry.png",
    title: "Open When Letters — Making mental health accessible to youth",
    description:
      "Innovation Award-winning physical product. 700,000+ users. A CBT-embedded letter series and vending machine that normalised mental health support in schools.",
    org: "Health Promotion Board (HPB), Singapore",
    period: "Jun 2018 – Jun 2022",
    tags: [
      "Youth Mental Health",
      "Physical Product",
      "CBT",
      "De-stigmatisation",
      "Vendor Management",
      "Innovation Award",
      "Power BI",
    ],
    metrics: [
      { value: "700k+", label: "users reached nationally" },
      { value: "98%", label: "agreed resources reduced stigma" },
      { value: "30,000", label: "students via Common Space" },
      { value: "100%+", label: "programme reach growth in 1 yr" },
    ],
    problem: [
      "Youth peer supporters struggled to create safe spaces for mental health conversations without coming across as threatening",
      "School counselling centres were daunting and stigmatising — youth avoided them even when they needed support",
      "No scalable, non-threatening touchpoint for mental wellbeing resources existed in school settings",
    ],
    approach: [
      "Conducted user interviews and market research — surfaced specific stigma barriers that informed the neutral, friendly design approach",
      "98% of users in testing confirmed the resources promoted wellbeing without stigma, validating the de-stigmatising design approach",
      "Drew on CBT frameworks, gratitude journal research, insights from youth, and personal experience to shape the letter content",
      "Built a Power BI programme auditing dashboard to systematically track delivery gaps and outcomes — eliminating manual ad-hoc auditing",
    ],
    built: [
      {
        track: "Open When Letters",
        points: [
          "10 specially designed letters, each targeting a specific emotional state ('Open when you feel alone', 'Open when you feel sad')",
          "CBT strategies and wellbeing tips embedded in every letter alongside postcards relating to the feeling on the envelope",
          "Specified product to paper weight, material, and print finish — led full vendor sourcing and managed end-to-end product development",
        ],
      },
      {
        track: "Vending Machine + Common Space",
        points: [
          "Open When Letters Vending Machine — letters dispensed from neutral machines placed in school common areas, normalising mental health access the way a drinks machine normalises buying a drink",
          "Common Space — a non-stigmatising, student-led mental health promoting safe space built into school campuses, reaching 30,000 students",
          "End-to-end delivery across both initiatives: stakeholder buy-in, vendor management, and operational rollout",
        ],
      },
    ],
    outcomes: [
      "HPB's 1st Innovation Award for Customer-centricity & Collaboration",
      "HPB Epic Award 2020 — Innovation & Collaboration Champion for Mental Wellbeing",
      "Programme reach grew by 100%+ within a single year",
    ],
    media: [
      {
        type: "image",
        url: "/projects/openwhen-cards.png",
        caption: "Open When Letters — card examples",
        aspectRatio: "4/3",
      },
      {
        type: "image",
        url: "/projects/openwhen-vending.png",
        caption: "Open When Letters Vending Machine",
        aspectRatio: "4/3",
      },
    ],
  },

  // ——— 6. Common Space ———————————————————————————————————————————————————
  {
    file: "COMMON_SPACE.JPG",
    category: "Work",
    audience: ["B2C"],
    gradient: "from-fuchsia-400/15 to-rose-300/15",
    image: "/projects/commonspace-portalentry.png",
    title: "Common Space — A non-stigmatising mental health space in schools",
    description:
      "Physical product expanding on the Open When Letters Vending Machine — student-led advocacy spaces built into school campuses to normalise mental health conversations.",
    org: "Health Promotion Board (HPB), Singapore",
    period: "2018 – 2022",
    tags: [
      "Youth Mental Health",
      "Physical Product",
      "Peer-Led",
      "De-stigmatisation",
      "Stakeholder Management",
      "Vendor Management",
    ],
    metrics: [{ value: "30,000", label: "students reached" }],
    problem: [
      "The Open When Letters Vending Machine validated demand for non-threatening mental health touchpoints, but vending machines alone couldn't sustain peer-led engagement",
      "Schools needed a dedicated physical space for student-led advocacy — normalising mental health the way common spaces normalise casual conversation",
    ],
    approach: [
      "Led end-to-end development across schools, stakeholders, vendors, and operations — reusing the vending-machine playbook and extending it into furnished, student-run spaces",
      "Co-developed with student groups (e.g., TP PSIA) to ensure spaces were genuinely student-led, not top-down",
      "Activated spaces with student takeovers, Instagram content, and recurring sessions to build ongoing engagement",
    ],
    built: [
      {
        track: "Physical spaces",
        points: [
          "Designated areas in school libraries and campuses, branded with HPB Common Space visual identity and furnished for small-group peer conversations",
          "Co-located with Open When Letters Vending Machines — a supported space to sit and read, not just grab-and-go",
        ],
      },
      {
        track: "End-to-end delivery",
        points: [
          "Stakeholders' buy-in across schools, HPB leadership, and partner organisations",
          "Vendor management for furniture, signage, vending machines, and content production",
          "Resolved operational considerations — space activation calendar, peer-supporter training, and maintenance",
        ],
      },
    ],
    outcomes: [
      "30,000 students reached across participating schools",
      "Active student advocacy communities continued programming beyond initial launch (e.g., TP PSIA Common Space at Temasek Poly)",
    ],
    media: [
      {
        type: "image",
        url: "/projects/commonspace-promo.png",
        caption: "TP PSIA promotional posts for Common Space",
        aspectRatio: "4/3",
      },
      {
        type: "image",
        url: "/projects/commonspace-campuses.png",
        caption: "Common Space installations at Republic Poly and Temasek Poly",
        aspectRatio: "4/3",
      },
    ],
  },

  // ——— 7. TikTok Trust & Safety ——————————————————————————————————————————
  {
    file: "TIKTOK_TRUST_SAFETY.RS",
    category: "Work",
    audience: ["B2B"],
    gradient: "from-slate-400/15 to-gray-300/15",
    title: "TikTok Trust & Safety — Risk detection at scale",
    description:
      "Built risk detection tooling and a product roadmap across 3 workstreams. Cut manual detection lag by 60+ mins daily in a global T&S environment.",
    org: "Trust & Safety, TikTok, Canada",
    period: "Oct 2024 – Mar 2025",
    tags: [
      "Trust & Safety",
      "Risk Operations",
      "Data Analytics",
      "Product Roadmap",
      "Cross-functional",
      "Process Design",
    ],
    metrics: [
      { value: "60+", label: "mins daily lag eliminated" },
      { value: "30+", label: "mins saved per-trend" },
      { value: "3,000+", label: "violative posts removed" },
      { value: "30,000+", label: "accounts deactivated" },
    ],
    problem: [
      "Manual risk detection was too slow — significant lag between identifying a signal and responding to it",
      "No standardised documentation or handover process for ambiguous and emerging risk cases, creating inconsistency across teams",
      "Three separate risk detection workstreams operated with different tooling and no unified roadmap",
    ],
    approach: [
      "Proactively identified an emerging risk pattern through daily content monitoring — before it was escalated",
      "Mobilised swiftly across Risk, Incident Response, Engineering, Policy, and Ops teams to investigate and contain",
      "Led investigations into risk signals using data analytics to diagnose root causes and track engineering fix status",
      "Built and delivered a product roadmap advancing all 3 risk detection workstreams from proposal to underway",
    ],
    built: [
      {
        track: "2 products shipped",
        points: [
          "Negative signal monitoring alerts — proactive risk detection tool based on photo post risk data, enabling earlier identification of emerging threats",
          "Photo Risky trend monitoring and handling capability — faster root cause analysis and risk response built on the internal platform",
        ],
      },
      {
        track: "Process system",
        points: [
          "Structured triage and handover log — standardised documentation for ambiguous and emerging risk cases across teams",
          "Cut per-trend handling time by 30+ minutes; supported the deactivation of 30,000+ violative accounts",
          "Resulting in removal of 3,000+ posts and deactivation of violative accounts to prevent further user harm",
        ],
      },
    ],
    outcomes: [
      "60+ mins of daily manual detection lag eliminated via the 3-workstream product roadmap",
      "Triage system supported deactivation of over 30,000 violative accounts",
    ],
    note: "Details kept appropriately high-level given Trust & Safety context.",
  },

  // ——— 8. Coconut Calligraphy ———————————————————————————————————————————
  {
    file: "COCONUT_CALLIGRAPHY.PNG",
    category: "Art",
    audience: ["B2C"],
    gradient: "from-rose-400/15 to-pink-300/15",
    title: "Coconut Calligraphy — Art brand & wellbeing workshops",
    description:
      "Founded an art brand from scratch — commissions, wedding stationery, live event painting, and workshops for 100+ youth and seniors.",
    org: "Personal project · @coconutcalligraphy",
    period: "2016 – Present",
    tags: [
      "Calligraphy",
      "Watercolour",
      "Workshops",
      "Mental Wellbeing",
      "Brand Building",
      "Live Painting",
      "Wedding Stationery",
    ],
    metrics: [
      { value: "100+", label: "youth & seniors taught" },
      { value: "Press", label: "Travel Yukon feature" },
      { value: "Intl", label: "client commissions" },
    ],
    built: [
      {
        track: "The brand",
        points: [
          "Conceptualised, sourced, prototyped, and marketed a product line under @coconutcalligraphy — gathering demand from local and overseas clientele",
          "Commissions: custom wedding stationery, bespoke calligraphy invitations and place cards, private watercolour artwork, calligraphy prints",
          "Live event painting at weddings and corporate events — featured in Travel Yukon arts & culture spotlight for live painting and calligraphy work in Whitehorse",
        ],
      },
      {
        track: "Wellbeing workshops",
        points: [
          "Collaborated with a Singapore social services agency to develop a modern calligraphy and painting syllabus",
          "Conducted workshops for 100+ youth and seniors to equip them with creative skills to improve their mental wellbeing",
          "Corporate team sessions, children's classes, and senior-friendly sessions across multiple formats",
        ],
      },
    ],
  },

  // ——— 9. Personal Finance Tracker ———————————————————————————————————————
  {
    file: "FINANCE_TRACKER.FIG",
    category: "Personal",
    audience: ["B2C"],
    gradient: "from-blue-400/15 to-indigo-300/15",
    image: "/projects/finance-tracker-portalentry.png",
    title: "Personal Finance Tracker — UX Bootcamp Capstone",
    description:
      "Self-directed UX project. Full process from lo-fi wireframes in Procreate to hi-fi prototype in Figma, validated through user interviews.",
    org: "Personal project — UX Bootcamp",
    period: "2022",
    tags: [
      "UX Research",
      "User Interviews",
      "Figma",
      "Procreate",
      "Miro",
      "Wireframing",
      "Self-directed",
    ],
    built: [
      {
        track: "End-to-end UX process",
        points: [
          "Lo-fi prototyping and initial ideation in Procreate",
          "Mid and hi-fi prototyping in Figma — iterating on layout, hierarchy, and interaction patterns",
          "Conducted user interviews to extract insights and validate assumptions about user flows and feature priorities",
          "Synthesised research findings in Miro to inform final design decisions",
        ],
      },
    ],
    media: [
      {
        type: "image",
        url: "/projects/finance-tracker-wireframes.png",
        caption: "Sample wireframes — Personal Finance Tracker",
        aspectRatio: "4/3",
      },
    ],
  },
];

export const projects: Project[] = allProjects
  .filter(
    (p) =>
      features.showTiktokTrustSafety || p.file !== "TIKTOK_TRUST_SAFETY.RS",
  )
  .filter((p) => features.showMindline || p.file !== "MINDLINE_REVAMP.FIG");

export const featuredProjects = projects.filter((p) => p.featured);
