export const MODES = {
    uiux: {
        key: "uiux",
        title: "UI/UX Designer",
        subtitle:
            "I design human-centered products with crisp interfaces, clear flows, and measurable outcomes.",
        accent: "from-amber-500 via-orange-400 to-rose-400",
        chip: "bg-amber-500/15 text-amber-950 ring-amber-600/30",
        primaryBtn: "bg-amber-500 text-amber-950 hover:bg-amber-400",
        secondaryBtn: "bg-amber-200/40 text-amber-950 hover:bg-amber-200/60 ring-amber-400/30",
        heroHint: "Explore UI/UX case studies",
    },
    mern: {
        key: "mern",
        title: "MERN Stack Developer",
        subtitle:
            "I build fast, scalable web apps with React, Node.js, and clean architecture—shipping features end-to-end.",
        accent: "from-teal-500 via-cyan-500 to-sky-500",
        chip: "bg-teal-500/15 text-teal-950 ring-teal-600/30",
        primaryBtn: "bg-teal-500 text-teal-950 hover:bg-teal-400",
        secondaryBtn: "bg-teal-100/50 text-teal-950 hover:bg-teal-100/70 ring-teal-400/30",
        heroHint: "Explore MERN projects",
    },
};

export const PROJECTS = [
    {
        id: "uiux-1",
        type: "uiux",
        title: "Saferni Application",
        blurb:
            "Improved onboarding conversion by simplifying flows and microcopy; created scalable design system.",
        tags: ["Research", "Wireframes", "UI Kit", "Prototyping"],
        links: { live: "/saferni.html#video", caseStudy: "/saferni.html" },
    },
    {
        id: "uiux-2",
        type: "uiux",
        title: "StepUp Application",
        blurb:
            "The Application designed to help the Enterpreneurs and investors ",
        tags: ["IA", "Accessibility", "Design System"],
        links: { live: "/stepup.html", caseStudy: "/stepup.html" },
    },
    {
        id: "uiux-3",
        type: "uiux",
        title: "Munieh Application",
        blurb:
            "The application was designed to support one of the Aga Khan Foundation’s programs by helping rural women showcase their handmade products .",
        tags: ["Audit", "Heuristics", "Analytics"],
        links: { live: "/munieh.html", caseStudy: "/munieh.html" },
    },

    {
        id: "mern-1",
        type: "mern",
        title: "SaaS Starter (Auth + Billing)",
        blurb:
            "Production-ready MERN template with JWT auth, roles, Stripe billing, and CI pipeline.",
        tags: ["React", "Node", "MongoDB", "Stripe"],
        links: { live: "#", repo: "#" },
    },
    {
        id: "mern-2",
        type: "mern",
        title: "Realtime Chat",
        blurb:
            "Socket.io chat with typing indicators, read receipts, and responsive UI.",
        tags: ["Socket.io", "Express", "React"],
        links: { live: "#", repo: "#" },
    },
    {
        id: "mern-3",
        type: "mern",
        title: "Project Tracker",
        blurb:
            "Kanban + analytics; optimistic updates and robust API validation.",
        tags: ["Redux", "Zod", "REST"],
        links: { live: "#", repo: "#" },
    },
];

export const SKILLS = {
    uiux: [
        "Product Thinking",
        "User Research",
        "Information Architecture",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Accessibility (WCAG)",
        "Usability Testing",
    ],
    mern: [
        "React (Hooks)",
        "Node.js / Express",
        "MongoDB / Mongoose",
        "REST APIs",
        "Auth (JWT/OAuth)",
        "Testing",
        "Performance",
        "Deployment",
    ],
};

export const ease = [0.22, 1, 0.36, 1];

export const navItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
];
