import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "../utils/cn";
import { ease } from "../data/content";
import pcBackground from "../assets/pc.png";
import pcBackgroundAlt from "../assets/image2.png";
import paperBackground from "../assets/paper.png";
import designerCreate from "../assets/create.png";
import designerLight from "../assets/light.png";
import designerPen from "../assets/pen.png";
import designerDesign from "../assets/design.png";
import designPortrait from "../assets/123.png";
import coderPortrait from "../assets/ritacoder.png";

export default function HeroSplit({ mode, setMode, cfg, onPrimary }) {
    const isUiux = mode === "uiux";
    const cvHref = `${import.meta.env.BASE_URL}Rita_Wartan_CV_editable1.pdf`;
    const prefersReducedMotion = useReducedMotion();

    return (
        <section className="relative mx-auto max-w-6xl overflow-hidden px-4 pt-2 sm:px-6 lg:px-4">
            {mode === "mern" && (
                <>
                    <motion.img
                        src={pcBackground}
                        alt=""
                        className="pointer-events-none absolute right-[-10px] top-8 z-0 w-32 sm:w-44 lg:right-[-16px] lg:top-6 lg:w-60"
                        animate={{
                            opacity: [0.06, 0.14, 0.06],
                            scale: [0.96, 1.04, 0.98],
                            rotate: [0, 6, -4, 0],
                            y: [0, -10, 6, 0],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        style={{ opacity: 0.1 }}
                    />
                    <motion.img
                        src={pcBackgroundAlt}
                        alt=""
                        className="pointer-events-none absolute left-[-8px] bottom-6 z-0 w-24 sm:w-32 lg:left-[-6px] lg:bottom-[-10px] lg:w-40"
                        animate={{
                            opacity: [0.04, 0.1, 0.04],
                            scale: [0.98, 1.03, 0.97],
                            rotate: [0, -6, 4, 0],
                            y: [0, 8, -6, 0],
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        style={{ opacity: 0.06 }}
                    />
                    <motion.img
                        src={paperBackground}
                        alt=""
                        className="pointer-events-none absolute left-2 top-24 z-0 w-24 sm:left-6 sm:w-32 lg:left-10 lg:w-44"
                        animate={{
                            opacity: [0.05, 0.12, 0.05],
                            rotate: [0, 8, -6, 0],
                            y: [0, -8, 6, 0],
                        }}
                        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                        style={{ opacity: 0.08 }}
                    />
                </>
            )}
            {mode === "uiux" && (
                <>
                    <motion.img
                        src={designerCreate}
                        alt=""
                        className="pointer-events-none absolute right-[-10px] top-8 z-0 w-32 sm:w-44 lg:right-[-16px] lg:top-6 lg:w-60"
                        animate={{
                            opacity: [0.06, 0.14, 0.06],
                            scale: [0.96, 1.04, 0.98],
                            rotate: [0, 6, -4, 0],
                            y: [0, -10, 6, 0],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        style={{ opacity: 0.1 }}
                    />
                    <motion.img
                        src={designerLight}
                        alt=""
                        className="pointer-events-none absolute left-[-8px] bottom-6 z-0 w-24 sm:w-32 lg:left-[-6px] lg:bottom-[-10px] lg:w-40"
                        animate={{
                            opacity: [0.04, 0.1, 0.04],
                            scale: [0.98, 1.03, 0.97],
                            rotate: [0, -6, 4, 0],
                            y: [0, 8, -6, 0],
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        style={{ opacity: 0.06 }}
                    />
                    <motion.img
                        src={designerPen}
                        alt=""
                        className="pointer-events-none absolute left-2 top-24 z-0 w-24 sm:left-6 sm:w-32 lg:left-10 lg:w-44"
                        animate={{
                            opacity: [0.05, 0.12, 0.05],
                            rotate: [0, 8, -6, 0],
                            y: [0, -8, 6, 0],
                        }}
                        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                        style={{ opacity: 0.08 }}
                    />
                    <motion.img
                        src={designerDesign}
                        alt=""
                        className="pointer-events-none absolute right-3 bottom-8 z-0 w-20 sm:right-8 sm:w-28 lg:right-10 lg:bottom-6 lg:w-36"
                        animate={{
                            opacity: [0.05, 0.12, 0.05],
                            scale: [0.98, 1.03, 0.97],
                            rotate: [0, 5, -3, 0],
                            y: [0, 8, -6, 0],
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        style={{ opacity: 0.07 }}
                    />
                </>
            )}
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-10">
                <motion.button
                    type="button"
                    onClick={() => setMode("uiux")}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className={cn(
                        "group order-2 mx-auto max-w-sm text-center transition focus:outline-none lg:order-1 lg:mx-0 lg:max-w-none lg:text-left",
                        isUiux ? "text-white" : "text-white/70"
                    )}
                >
                    <div className="text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">designer</div>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70 sm:max-w-sm lg:max-w-xs">
                        UI/UX Designer with a passion for building elegant, useful experiences that scale.
                    </p>
                    <span className="mt-4 inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/50 lg:justify-start">
                        {isUiux ? "Active mode" : "Switch to design"}
                    </span>
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease }}
                    className="hero-portrait-wrap order-1 flex flex-col items-center justify-center gap-4 lg:order-2"
                >
                    <div className="hero-portrait hero-portrait-full" aria-hidden>
                        <div
                            className={cn(
                                "hero-flip-card",
                                mode === "mern" && "hero-flip-card--code",
                                prefersReducedMotion && "hero-flip-card--reduced"
                            )}
                        >
                            <div className="hero-flip-card__inner">
                                <div className="hero-flip-face hero-flip-face--front">
                                    <img src={designPortrait} alt="" className="hero-flip-image" />
                                </div>
                                <div className="hero-flip-face hero-flip-face--back">
                                    <img src={coderPortrait} alt="" className="hero-flip-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        className="hero-switch-hint"
                        animate={prefersReducedMotion ? undefined : { y: [0, -3, 0], opacity: [0.7, 1, 0.7] }}
                        transition={prefersReducedMotion ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="hero-switch-hint__arrow hero-switch-hint__arrow--left" aria-hidden>
                            ←
                        </span>
                        <span className="hero-switch-hint__label">
                            Tap a side to switch
                        </span>
                        <span className="hero-switch-hint__arrow hero-switch-hint__arrow--right" aria-hidden>
                            →
                        </span>
                    </motion.div>
                </motion.div>

                <motion.button
                    type="button"
                    onClick={() => setMode("mern")}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className={cn(
                        "group order-3 mx-auto max-w-sm text-center transition focus:outline-none lg:mx-0 lg:max-w-none lg:text-right",
                        !isUiux ? "text-white" : "text-white/70"
                    )}
                >
                    <div className="text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">&lt;coder&gt;</div>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70 sm:max-w-sm lg:ml-auto lg:max-w-xs">
                        MERN stack developer focused on clean architecture, performance, and precise UI polish.
                    </p>
                    <span className="mt-4 inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/50 lg:justify-end">
                        {!isUiux ? "Active mode" : "Switch to code"}
                    </span>
                </motion.button>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.1 }}
                className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center"
            >
                <button
                    onClick={onPrimary}
                    className={cn(
                        "inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ring-1 ring-white/10 sm:w-auto sm:text-base",
                        cfg.primaryBtn
                    )}
                >
                    View projects <ArrowRight className="h-4 w-4" />
                </button>

              

                <a
                    href={cvHref}
                    download="Rita_Wartan_CV_editable1.pdf"
                    className={cn(
                        "inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ring-1 sm:w-auto sm:text-base",
                        cfg.secondaryBtn
                    )}
                >
                    Download CV <ExternalLink className="h-4 w-4" />
                </a>

            </motion.div>
        </section>
    );
}
