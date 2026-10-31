export const site = {
  name: "Juliet Ogbonna",
  shortName: "Juliet",
  role: "Frontend Developer & UI Designer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Juliet Ogbonna is a frontend developer and UI designer from Enugu, Nigeria, building fast, responsive and beautiful web experiences with React, Next.js, Node.js and Tailwind CSS.",
  location: "Enugu, Nigeria",
  email: "Julietng2020@gmail.com",
  phones: ["+2348108202888", "+2349015819521"],
  phonesDisplay: ["0810 820 2888", "0901 581 9521"],
  socials: {
    github: "https://github.com/JulietOgbonna",
    linkedin: "https://www.linkedin.com/in/juliet-ogbonna-3921a1332",
    facebook: "https://www.facebook.com/share/16wZ45wGVi/",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export type SkillKey =
  | "html"
  | "css"
  | "js"
  | "react"
  | "next"
  | "node"
  | "express"
  | "tailwind"
  | "mongodb"
  | "vercel"
  | "git";

export const skills: { key: SkillKey; name: string; level: number; note: string }[] = [
  { key: "html", name: "HTML5", level: 96, note: "Semantic, accessible structure" },
  { key: "css", name: "CSS3", level: 93, note: "Layouts, motion & responsive design" },
  { key: "js", name: "JavaScript", level: 88, note: "ES6+ interactivity & logic" },
  { key: "react", name: "React.js", level: 85, note: "Component-driven interfaces" },
  { key: "next", name: "Next.js", level: 82, note: "SEO-ready, fast web apps" },
  { key: "tailwind", name: "Tailwind CSS", level: 92, note: "Design systems at speed" },
  { key: "node", name: "Node.js", level: 74, note: "Server-side JavaScript" },
  { key: "express", name: "Express.js", level: 72, note: "REST APIs & middleware" },
  { key: "mongodb", name: "MongoDB", level: 70, note: "Document data modelling" },
  { key: "vercel", name: "Vercel", level: 88, note: "Deploys, previews & edge" },
  { key: "git", name: "Git & GitHub", level: 86, note: "Version control & teamwork" },
];

export const skillGroups = [
  { title: "Core Technologies", items: ["HTML5: clean, semantic structure", "CSS3: styling, layout & animation", "JavaScript (ES6+): interactivity & logic"] },
  { title: "Frameworks & Libraries", items: ["React.js: dynamic interfaces", "Next.js: production web apps", "Tailwind CSS & Bootstrap: responsive design", "Node.js & Express.js: APIs"] },
  { title: "Tools & Workflow", items: ["Git & GitHub: version control & collaboration", "VS Code: my go-to editor", "Figma: interpreting & implementing UI designs", "Vercel & MongoDB: deploy & store data"] },
  { title: "Soft Skills", items: ["Strong communication", "Attention to detail", "Problem-solving mindset", "Mentoring & knowledge sharing"] },
];

export const services = [
  {
    title: "Website Development",
    body: "Fully responsive websites and landing pages built with modern tooling, giving a smooth, consistent experience on every device, with style and performance in equal measure.",
    icon: "code",
  },
  {
    title: "UI/UX to Code",
    body: "Figma, Adobe XD or Sketch designs translated into pixel-perfect, accessible, responsive code that feels exactly like the design intended.",
    icon: "layout",
  },
  {
    title: "Website Maintenance",
    body: "Ongoing support to update, fix and improve existing websites so everything runs smoothly and stays current.",
    icon: "tool",
  },
  {
    title: "SEO & Performance",
    body: "Speed, Core Web Vitals and on-page SEO tuned so your site loads fast, ranks better and converts more visitors.",
    icon: "zap",
  },
] as const;

export const workflow = [
  { step: "01", title: "Discover", body: "Understand your goals, audience and the outcome that matters." },
  { step: "02", title: "Design", body: "Shape structure and UI so the experience is clear and beautiful." },
  { step: "03", title: "Build", body: "Clean, typed, component-driven code with performance baked in." },
  { step: "04", title: "Launch", body: "Deploy, measure, refine, and support you after go-live." },
];

export const experience = [
  {
    role: "Frontend Development Intern",
    org: "Verbum Networks, Enugu",
    period: "Aug 2024 to Aug 2025",
    summary:
      "A one-year, hands-on role shipping real-world projects inside a team of developers, while sharing that knowledge with the students coming up behind me.",
    points: [
      "Built and styled responsive web pages using HTML, CSS and JavaScript.",
      "Recreated landing pages and UI components from provided designs.",
      "Applied semantic HTML and modern CSS best practices.",
      "Troubleshot layout issues and improved page structure.",
      "Took part in code reviews and team discussions to refine and optimise code.",
      "Collaborated on the Mater Christi Centre website as part of the team.",
      "Mentored and supported students, helping them grasp frontend fundamentals.",
    ],
  },
];

export const education = [
  {
    title: "B.Sc. Human Anatomy",
    org: "University of Nigeria, Enugu Campus",
    period: "2020 to 2025",
    body: "Core medical and anatomical sciences, building a strong foundation in analytical thinking and detail orientation that powers my work in tech.",
  },
  {
    title: "Web Development Training",
    org: "Verbum Networks Limited, Enugu",
    period: "Aug 2023 to Aug 2024",
    body: "A comprehensive one-year frontend programme: HTML, CSS, JavaScript, responsive design and UI implementation.",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  url: string | null;
  badge?: string;
};

export const projects: Project[] = [
  {
    slug: "mater-christi",
    title: "Mater Christi Centre",
    category: "Organisation Website",
    description:
      "The digital home of a human development and religious formation centre. Built collaboratively with the Verbum Networks team, where I also helped teach and guide students through real-world frontend work.",
    stack: ["Next.js", "Tailwind CSS", "Team Delivery"],
    url: "https://materchristicentre.com/",
    badge: "Team Collaboration · Verbum Networks",
  },
  {
    slug: "nova-hairs",
    title: "Nova Hairs",
    category: "E-commerce",
    description:
      "A premium storefront for a Lagos-based luxury wig brand, with rich product listings, styling services, reviews and a WhatsApp-first ordering flow.",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    url: "https://nova-hairs.vercel.app/",
  },
  {
    slug: "dev-portfolio",
    title: "Developer Portfolio",
    category: "Personal Brand",
    description:
      "A sleek, responsive developer portfolio presenting work, skills and story with a focus on clean UI and smooth interaction.",
    stack: ["React", "JavaScript", "CSS3", "Vercel"],
    // TODO: replace with the public production URL (current preview URL is behind Vercel auth).
    url: null,
  },
];
