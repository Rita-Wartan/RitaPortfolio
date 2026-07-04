import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "../utils/cn";
import { ease } from "../data/content";

export default function ProjectCard({ p, cfg, mode }) {
    const badgeLabel = p.type === "uiux" ? "UI/UX" : "MERN";
    const cardLink = p.links?.caseStudy && p.links.caseStudy !== "#" ? p.links.caseStudy : null;
    return (
        <motion.article
            layout
            whileHover={{ y: -6, scale: 1.02, rotate: -0.3 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className={cn(
                "project-card group relative overflow-hidden rounded-3xl border border-white/10 p-6",
                cardLink && "cursor-pointer",
                mode === "mern" && "project-card--mern text-white",
                mode === "uiux" && "project-card--uiux"
            )}
            role={cardLink ? "link" : undefined}
            tabIndex={cardLink ? 0 : undefined}
            aria-label={cardLink ? `${p.title} case study` : undefined}
            onClick={(event) => {
                if (!cardLink || event.target.closest("a")) return;
                window.location.href = cardLink;
            }}
            onKeyDown={(event) => {
                if (!cardLink) return;
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    window.location.href = cardLink;
                }
            }}
        >
            <div className="project-card__glow" aria-hidden />
            <div className="project-card__noise" aria-hidden />

            <div className="relative">
                <div className="flex items-center justify-between gap-3">
                    <h3 className={cn("project-card__title text-xl font-semibold", mode === "mern" && "text-white")}>
                        {p.title}
                    </h3>
                    <span className={cn("project-card__badge", mode === "mern" && "text-white")}>
                        {badgeLabel}
                    </span>
                </div>

                <p className={cn("project-card__blurb mt-3 text-sm text-white/70", mode === "mern" && "text-white")}>
                    {p.blurb}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                        <span
                            key={t}
                            className={cn(
                                "project-card__tag rounded-full px-3 py-1 text-xs ring-1",
                                cfg.chip,
                                mode === "mern" && "text-white"
                            )}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                    {p.links.caseStudy && (
                        <a
                            href={p.links.caseStudy}
                            className={cn(
                                "project-card__btn inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium ring-1",
                                cfg.secondaryBtn
                            )}
                        >
                            Case study <ExternalLink className="h-4 w-4" />
                        </a>
                    )}
                    {p.links.repo && (
                        <a
                            href={p.links.repo}
                            className={cn(
                                "project-card__btn inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium ring-1",
                                cfg.secondaryBtn
                            )}
                        >
                            Repo <Github className="h-4 w-4" />
                        </a>
                    )}
                    {p.links.demo && (
                        <a
                            href={p.links.demo}
                            className={cn(
                                "project-card__btn inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium ring-1 ring-white/10",
                                cfg.primaryBtn
                            )}
                        >
                            Demo <ExternalLink className="h-4 w-4" />
                        </a>
                    )}
                    {p.links.live && (
                        <a
                            href={p.links.live}
                            className={cn(
                                "project-card__btn inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium ring-1 ring-white/10",
                                cfg.primaryBtn
                            )}
                        >
                            Live <ExternalLink className="h-4 w-4" />
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}
