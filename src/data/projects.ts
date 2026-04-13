export interface ProjectTrack {
  track?: string;
  points: string[];
}

export interface Project {
  file: string;
  category: "Work" | "Art" | "Personal";
  gradient: string;
  image?: string;
  title: string;
  description: string;
  org?: string;
  period?: string;
  tags?: string[];
  metrics?: { value: string; label: string }[];
  problem?: string[];
  approach?: string[];
  built?: ProjectTrack[];
  outcomes?: string[];
  note?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  // ——— 1. mindline.sg ———————————————————————————————————————————————————
  {
    file: "MINDLINE_REVAMP.FIG",
    category: "Work",
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
    featured: true,
    gradient: "from-amber-400/15 to-orange-300/15",
    title:
      "AgeStrong — Singapore's first gamified digital health programme for seniors",
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
      "Power BI",
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
  },

  // ——— 3. Open When Letters ——————————————————————————————————————————————
  {
    file: "OPENWHEN_LETTERS.TXT",
    category: "Work",
    featured: true,
    gradient: "from-purple-400/15 to-pink-300/15",
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
  },

  // ——— 4. TikTok Trust & Safety ——————————————————————————————————————————
  {
    file: "TIKTOK_TRUST_SAFETY.RS",
    category: "Work",
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

  // ——— 5. Coconut Calligraphy ———————————————————————————————————————————
  {
    file: "COCONUT_CALLIGRAPHY.PNG",
    category: "Art",
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

  // ——— 6. Personal Finance Tracker ———————————————————————————————————————
  {
    file: "FINANCE_TRACKER.FIG",
    category: "Personal",
    gradient: "from-blue-400/15 to-indigo-300/15",
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
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
