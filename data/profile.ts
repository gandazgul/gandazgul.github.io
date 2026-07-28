export type ProfileLink = {
  label: string;
  href: string;
  kind: "external" | "download";
};

export type Impact = {
  metric: string;
  label: string;
  detail: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  context: string;
  highlights: string[];
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type Project = {
  name: string;
  href: string;
  description: string;
  impact: string;
  tech: string[];
  featured?: boolean;
};

export const profile = {
  name: "Carlos Ravelo",
  title: "Staff Software Engineer / Solutions Architect",
  location: "Stamford, CT",
  email: "Available via LinkedIn or resume PDF",
  summary:
    "18+ years building high-scale web platforms, internal tooling, content delivery systems, search/retrieval workflows, and cloud infrastructure across Go, Node.js, Python, React, Kubernetes, AWS/GCP, Fastly, PostgreSQL/pgvector, and modern LLM/search tooling.",
  command: "cat ./carlos-ravelo.resume --focus impact --format terminal",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/carlosravelo/",
      kind: "external",
    },
    {
      label: "GitHub",
      href: "https://github.com/gandazgul/",
      kind: "external",
    },
    {
      label: "Download Resume PDF",
      href: "/CarlosRavelo.pdf",
      kind: "download",
    },
  ] satisfies ProfileLink[],
};

export const runWieldAttribution = {
  label: "Built using RunWield",
  href: "https://github.com/gandazgul/runwield",
  command: "$ build -t RunWield --deploy Vercel",
  copy:
    "RunWield is Carlos's plan-by-default coding harness for software delivery with AI. Powered by Next.js and deployed on Vercel.",
};

export const impacts: Impact[] = [
  {
    metric: "80–85%",
    label: "OpEx reduction",
    detail:
      "Designed platform and infrastructure improvements that sharply reduced operating costs while preserving reliability.",
  },
  {
    metric: "95%",
    label: "fewer frontend incidents",
    detail:
      "Introduced architecture and release improvements that dramatically reduced production frontend issues.",
  },
  {
    metric: "30+ → 1",
    label: "repository consolidation",
    detail:
      "Replaced 30+ frontend repositories with a configuration-driven platform serving 3,000+ sites.",
  },
  {
    metric: "250K+/day",
    label: "AI-assisted ad verification",
    detail:
      "Built workflows processing hundreds of thousands of ads daily, with bursts into millions.",
  },
  {
    metric: "Hybrid search",
    label: "retrieval relevance",
    detail:
      "Delivered embedding, BM25, reranking, and RRF workflows for search, retrieval, and image relevance.",
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: "Ask Media Group / Ask Applications",
    role: "Staff Software Engineer / Solutions Architect",
    period: "Recent",
    context:
      "Platform architecture, cloud infrastructure, high-scale web delivery, AI/search workflows, and internal developer systems.",
    highlights: [
      "Led cost and reliability initiatives across content delivery, infrastructure, and application platforms.",
      "Built AI-assisted verification and search/retrieval pipelines using embeddings, reranking, and hybrid retrieval.",
      "Reduced frontend operational risk through platform consolidation, testing, and deployment improvements.",
    ],
  },
  {
    company: "Reflexions Data",
    role: "Senior Software Engineer",
    period: "Prior",
    context:
      "Full-stack product engineering and data-driven application development for client platforms.",
    highlights: [
      "Delivered production web applications with pragmatic architecture, maintainable workflows, and measurable client outcomes.",
      "Balanced hands-on engineering with technical leadership across frontend, backend, data, and deployment concerns.",
    ],
  },
  {
    company: "Ask Applications",
    role: "Engineering Lead / Senior Engineer",
    period: "Prior",
    context:
      "Large-scale browser, search, advertising, and content experiences across a broad web portfolio.",
    highlights: [
      "Shipped systems supporting thousands of sites and high-throughput ad/content workflows.",
      "Modernized frontend architecture and operational practices across multiple teams and repositories.",
    ],
  },
  {
    company: "EILEEN FISHER",
    role: "Web Engineer",
    period: "Early career",
    context:
      "E-commerce and brand web engineering with an emphasis on reliable user-facing experiences.",
    highlights: [
      "Built and maintained production web experiences connecting business goals with polished customer interactions.",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    name: "Programming",
    skills: ["TypeScript", "Node.js", "Deno", "Go", "Python", "SQL", "Shell"],
  },
  {
    name: "Backend & Platform",
    skills: [
      "Kubernetes",
      "AWS",
      "GCP",
      "Fastly",
      "PostgreSQL",
      "SQLite",
      "CI/CD",
    ],
  },
  {
    name: "Data & Search",
    skills: [
      "pgvector",
      "Embeddings",
      "BM25",
      "Reranking",
      "RRF",
      "ONNX Runtime",
    ],
  },
  {
    name: "AI/LLM Tooling",
    skills: [
      "Agent workflows",
      "OpenCode plugins",
      "Local-first memory",
      "Retrieval pipelines",
    ],
  },
  {
    name: "Frontend & Testing",
    skills: ["React", "Next.js", "Astro", "Tailwind", "Playwright", "Phaser 3"],
  },
  {
    name: "Leadership",
    skills: [
      "Architecture",
      "Mentoring",
      "Cost reduction",
      "Incident reduction",
      "Developer platforms",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "runwield",
    href: "https://github.com/gandazgul/runwield",
    featured: true,
    description:
      "Opinionated plan-by-default coding harness built on Pi.dev for safer agentic software delivery.",
    impact:
      "The same workflow used to build this portfolio, with structured planning, execution, validation, and repair loops.",
    tech: ["TypeScript", "Agentic coding", "Pi.dev", "CLI workflows"],
  },
  {
    name: "mnemosyne",
    href: "https://github.com/gandazgul/mnemosyne",
    featured: true,
    description:
      "Local-first memory and document retrieval CLI in Go with SQLite, local embeddings, and hybrid search.",
    impact:
      "Shows practical retrieval engineering: embeddings, BM25-style search, local storage, and ONNX Runtime integration.",
    tech: ["Go", "SQLite", "Embeddings", "ONNX Runtime", "Hybrid search"],
  },
  {
    name: "opencode-mnemosyne",
    href: "https://github.com/gandazgul/opencode-mnemosyne",
    description:
      "TypeScript OpenCode plugin that gives coding agents persistent local memory through Mnemosyne.",
    impact:
      "Connects LLM tooling with controlled, local retrieval workflows for developer productivity.",
    tech: ["TypeScript", "OpenCode", "Local memory", "LLM tooling"],
  },
  {
    name: "k8s-infrastructure",
    href: "https://github.com/gandazgul/k8s-infrastructure",
    description:
      "Fedora/Kubernetes installation and app infrastructure scripts/configuration for self-managed environments.",
    impact:
      "Demonstrates infrastructure fluency from host setup through cluster operations and application delivery.",
    tech: ["Kubernetes", "Fedora", "Shell", "Infrastructure"],
  },
  {
    name: "caper",
    href: "https://github.com/gandazgul/caper",
    description:
      "Phaser 3 point-and-click adventure engine with reusable game systems and browser-focused interactions.",
    impact:
      "Highlights product-minded frontend architecture, stateful UI, and reusable game mechanics.",
    tech: ["Phaser 3", "TypeScript", "Game systems", "Frontend"],
  },
  {
    name: "goaly",
    href: "https://github.com/gandazgul/goaly",
    description:
      "Self-hosted spiritual successor to Google Calendar Goals using Deno, Astro, and SQLite.",
    impact:
      "Combines personal productivity, full-stack architecture, and durable local-first data choices.",
    tech: ["Deno", "Astro", "SQLite", "Self-hosted"],
  },
];
