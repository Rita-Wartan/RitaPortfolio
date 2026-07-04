import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { MODES, PROJECTS, SKILLS, ease } from "./data/content";
import { cn } from "./utils/cn";
import { useLockBodyScroll } from "./hooks/useLockBodyScroll";
import IntroOverlay from "./components/IntroOverlay";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import mernFloat from "./assets/image1.png";
import Section from "./sections/Section";
import HeroSplit from "./sections/HeroSplit";

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const [mode, setMode] = useState("uiux");
  const cfg = MODES[mode];
  const [introDone, setIntroDone] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const lastSparkleTime = useRef(0);
  useLockBodyScroll(mobileNavOpen);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 180, damping: 30, mass: 0.2 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 30, mass: 0.2 });
  const spotlightColor = mode === "uiux" ? "rgba(251, 146, 60, 0.26)" : "rgba(34, 197, 94, 0.22)";
  const spotlight = useMotionTemplate`radial-gradient(80px circle at ${springX}px ${springY}px, ${spotlightColor}, transparent 60%)`;

  const filteredProjects = useMemo(
    () => PROJECTS.filter((p) => p.type === mode),
    [mode]
  );

  useEffect(() => {
    const t = window.setTimeout(
      () => setIntroDone(true),
      prefersReducedMotion ? 200 : 1600
    );
    return () => window.clearTimeout(t);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const updateFromEvent = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    const center = () => {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 3);
    };
    center();
    window.addEventListener("mousemove", updateFromEvent);
    window.addEventListener("resize", center);
    return () => {
      window.removeEventListener("mousemove", updateFromEvent);
      window.removeEventListener("resize", center);
    };
  }, [mouseX, mouseY, prefersReducedMotion]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  const addSparkle = (event) => {
    if (prefersReducedMotion) return;
    const now = performance.now();
    if (now - lastSparkleTime.current < 40) return;
    lastSparkleTime.current = now;
    const id = `${now}-${Math.random()}`;
    const sparkle = {
      id,
      x: event.clientX,
      y: event.clientY,
    };
    setSparkles((prev) => [...prev.slice(-20), sparkle]);
    window.setTimeout(() => {
      setSparkles((prev) => prev.filter((item) => item.id !== id));
    }, 900);
  };

  const codeColumns = [
    ["const", "data", "=", "{", "id:", "42", "}", "// init"],
    ["function", "render()", "{", "return", "<App />", "}", ""],
    ["npm", "run", "build", "vite", "deploy", "done", "", ""],
    ["if", "auth", "&&", "token", "{", "grant()", "}", ""],
    ["SELECT", "*", "FROM", "users", "WHERE", "active=1", ";", ""],
    ["{", "status:", "\"ok\"", "}", "200", "ms", "", ""],
  ];

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "never"}>
      <div
        className={cn(
          "app-shell selection:bg-black/10",
          mode === "uiux" ? "app-shell--designer beige-theme" : "app-shell--coder"
        )}
        onMouseMove={addSparkle}
      >
        <IntroOverlay done={introDone} onSkip={() => setIntroDone(true)} accent={cfg.accent} />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 opacity-80"
          style={{ background: prefersReducedMotion ? "none" : spotlight }}
        />
        <div
          className={cn(
            "pointer-events-none fixed inset-0 z-0 app-grid",
            mode === "uiux" ? "app-grid--designer" : "app-grid--coder"
          )}
        />
        {mode === "mern" && !prefersReducedMotion && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 code-rain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
          >
            {codeColumns.map((lines, columnIndex) => (
              <motion.div
                key={`col-${columnIndex}`}
                className="code-column"
                style={{ left: `${6 + columnIndex * 15}%` }}
                animate={{ y: ["0%", "-35%"] }}
                transition={{
                  duration: 18 + columnIndex * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {lines.map((line, lineIndex) => (
                  <div key={`line-${columnIndex}-${lineIndex}`} className="code-line">
                    {line}
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        )}
        <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-64 bg-gradient-to-b from-white/10 to-transparent" />
        <div className="pointer-events-none fixed inset-0 z-10">
          {sparkles.map((sparkle) => (
            <span
              key={sparkle.id}
              className="sparkle"
              style={{ left: sparkle.x, top: sparkle.y }}
            />
          ))}
        </div>

        <Header
          mode={mode}
          setMode={setMode}
          cfg={cfg}
          mobileNavOpen={mobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
          onNav={scrollTo}
        />

        <main className="relative z-10 overflow-x-clip">
          <HeroSplit mode={mode} setMode={setMode} cfg={cfg} onPrimary={() => scrollTo("projects")} />

          <Section id="about" eyebrow="About" title={cfg.title} subtitle={cfg.subtitle}>
            <div className={cn("grid gap-8 md:grid-cols-12", mode === "mern" && "text-white")}>
              <div className="md:col-span-7">
                <p className={cn("text-sm leading-relaxed text-white/80 sm:text-base", mode === "mern" && "text-white")}>
                  I'm a UI/UX designer and MERN developer who bridges design and engineering.
                  I care about clarity, consistency, and speed - whether I'm mapping user flows,
                  crafting a design system, or shipping a performant React and React Native app.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {(mode === "uiux"
                    ? ["Figma", "Prototyping", "Design Systems", "UX Research"]
                    : ["React", "React Native", "Node.js", "MongoDB", "APIs"]
                  ).map((t) => (
                    <span
                      key={t}
                      className={cn(
                        "inline-flex items-center rounded-full px-3 py-1 text-xs ring-1 sm:text-sm",
                        cfg.chip,
                        mode === "mern" && "text-white"
                      )}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className={cn("text-sm text-white/70", mode === "mern" && "text-white")}>
                      Currently focusing
                    </div>
                    <span className={cn("inline-flex w-fit rounded-full px-2 py-1 text-xs ring-1", cfg.chip)}>
                      {mode === "uiux" ? "Case studies" : "Full-stack builds"}
                    </span>
                  </div>

                  <ul className={cn("mt-4 space-y-3 text-sm text-white/80 sm:text-base", mode === "mern" && "text-white")}>
                    {(mode === "uiux"
                      ? ["Problem framing and user journeys", "Design system components", "Interactive prototypes", "Handoff with specs"]
                      : ["API design and validation", "Auth & permissions", "Performance and caching", "Deployments (CI/CD)"]
                    ).map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          <Section id="projects" eyebrow="Work" title="Selected Projects" subtitle={cfg.heroHint}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p) => (
                  <ProjectCard key={p.id} p={p} cfg={cfg} mode={mode} />
                ))}
              </AnimatePresence>
            </div>
          </Section>

          <Section id="skills" eyebrow="Capabilities" title="Skills" subtitle="What I bring to the table">
            <div className={cn("relative grid gap-4 md:grid-cols-2", mode === "mern" && "text-white")}>
              {mode === "mern" && (
                <motion.img
                  src={mernFloat}
                  alt=""
                  className="pointer-events-none absolute right-0 top-[-10px] w-16 sm:right-[-12px] sm:top-[-18px] sm:w-24"
                  animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{ opacity: 0.22 }}
                />
              )}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <h3 className="text-lg font-semibold">Core skills</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {SKILLS[mode].map((s) => (
                    <span
                      key={s}
                      className={cn("rounded-full px-3 py-1 text-xs ring-1 sm:text-sm", cfg.chip, mode === "mern" && "text-white")}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <h3 className="text-lg font-semibold">Toolbox</h3>
                <div
                  className={cn(
                    "mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2",
                    mode === "mern" ? "text-white" : "text-white/80"
                  )}
                >
                  {(mode === "uiux"
                    ? ["Figma", "FigJam", "Adobe CC", "Notion", "Miro", "Hotjar", "Maze", "Zeplin"]
                    : ["TypeScript", "React Query", "Redux", "Docker", "Vite", "GitHub Actions"]
                  ).map((t) => (
                    <div key={t} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm sm:text-base">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section
            id="contact"
            eyebrow="Contact"
            title="Let's build something clean"
            subtitle="Available for freelance, contract, or full-time roles"
          >
            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 md:flex-row md:items-center md:justify-between">
              <div className="min-w-0">
                <div className="text-sm text-white/80 sm:text-base">
                  Email me or connect - happy to share case studies, code samples, and process.
                </div>
                <div className="mt-2 break-all text-sm text-white/60 sm:break-normal">
                  ritaa.wartann@gmail.com
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <a
                  href="#"
                  className={cn(
                    "inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ring-1 ring-white/10 sm:w-auto",
                    cfg.primaryBtn
                  )}
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
                <a href="https://github.com/Rita-Wartan" className={cn("inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ring-1 sm:w-auto", cfg.secondaryBtn)}>
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rita-wartan-b70a1b319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ring-1 sm:w-auto", cfg.secondaryBtn)}
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </Section>

          <Footer />
        </main>
      </div>
    </MotionConfig>
  );
}
