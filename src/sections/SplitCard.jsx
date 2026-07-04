import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../utils/cn";
import { ease } from "../data/content";
import SplitSide from "./SplitSide";

// Add your images in: src/assets/
import ritaDesigner from "../assets/rita.jpg";
import ritaCoder from "../assets/code.png";

export default function SplitCard({ mode, setMode, cfg }) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className={cn("absolute -inset-24 opacity-30 blur-3xl bg-gradient-to-r", cfg.accent)} />

            <div className="relative grid grid-cols-2">
                <SplitSide
                    active={mode === "uiux"}
                    label="designer"
                    desc="UI/UX, product design, systems"
                    onClick={() => setMode("uiux")}
                    align="left"
                    cfg={cfg}
                />
                <SplitSide
                    active={mode === "mern"}
                    label="<coder>"
                    desc="React, Node, APIs, shipping"
                    onClick={() => setMode("mern")}
                    align="right"
                    cfg={cfg}
                />

                <motion.div
                    className="pointer-events-none absolute inset-y-0 w-1/2"
                    animate={{ x: mode === "uiux" ? "0%" : "100%" }}
                    transition={{ duration: 0.55, ease }}
                    aria-hidden
                >
                    <div className="h-full w-full border-x border-white/10 bg-white/5" />
                </motion.div>
            </div>

            <div className="relative flex items-center justify-center px-4 pb-4 pt-4 sm:px-6 sm:pb-6">
                <div className="hero-portrait-wrap relative h-44 w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 sm:h-52">
                    <motion.div
                        className={cn("absolute inset-0 opacity-35 bg-gradient-to-r", cfg.accent)}
                        animate={{ opacity: [0.18, 0.35, 0.18] }}
                        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/*  Your Image */}
                    <div
                        className={cn(
                            "hero-flip-card",
                            mode === "mern" && "hero-flip-card--code",
                            prefersReducedMotion && "hero-flip-card--reduced"
                        )}
                    >
                        <div className="hero-flip-card__inner">
                            <div className="hero-flip-face hero-flip-face--front">
                                <img src={ritaDesigner} alt="Rita portrait" className="hero-flip-image" />
                            </div>
                            <div className="hero-flip-face hero-flip-face--back">
                                <img src={ritaCoder} alt="Code preview" className="hero-flip-image" />
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <span className={cn("rounded-full px-3 py-1 text-xs ring-1", cfg.chip)}>
                            {mode === "uiux" ? "UI/UX view" : "MERN view"}
                        </span>
                        <span className="text-xs text-black/60">click a side to switch</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
