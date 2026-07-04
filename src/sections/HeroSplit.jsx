import React from "react";
import { motion } from "framer-motion";
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

export default function HeroSplit({ mode, setMode, cfg, onPrimary }) {
    const isUiux = mode === "uiux";
    const cvHref = `${import.meta.env.BASE_URL}Rita_Wartan_CV_editable1.pdf`;
    return (
        <section className="relative mx-auto max-w-6xl px-4 pt-0">
            {mode === "mern" && (
                <>
                    <motion.img
                        src={pcBackground}
                        alt=""
                        className="pointer-events-none absolute right-[-16px] top-6 z-0 w-60"
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
                        className="pointer-events-none absolute left-[-6px] bottom-[-10px] z-0 w-40"
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
                        className="pointer-events-none absolute left-10 top-24 z-0 w-44"
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
                        className="pointer-events-none absolute right-[-16px] top-6 z-0 w-60"
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
                        className="pointer-events-none absolute left-[-6px] bottom-[-10px] z-0 w-40"
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
                        className="pointer-events-none absolute left-10 top-24 z-0 w-44"
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
                        className="pointer-events-none absolute right-10 bottom-6 z-0 w-36"
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
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
                <motion.button
                    type="button"
                    onClick={() => setMode("uiux")}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className={cn(
                        "group text-left transition focus:outline-none",
                        isUiux ? "text-white" : "text-white/70"
                    )}
                >
                    <div className="text-3xl font-black tracking-tight sm:text-4xl">designer</div>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
                        UI/UX Designer with a passion for building elegant, useful experiences that scale.
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50">
                        {isUiux ? "Active mode" : "Switch to design"}
                    </span>
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease }}
                    className="flex justify-center"
                >
                    <div className="hero-portrait hero-portrait-full" aria-hidden />
                </motion.div>

                <motion.button
                    type="button"
                    onClick={() => setMode("mern")}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className={cn(
                        "group text-right transition focus:outline-none",
                        !isUiux ? "text-white" : "text-white/70"
                    )}
                >
                    <div className="text-3xl font-black tracking-tight sm:text-4xl">&lt;coder&gt;</div>
                    <p className="mt-3 ml-auto max-w-xs text-sm leading-relaxed text-white/70">
                        MERN stack developer focused on clean architecture, performance, and precise UI polish.
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50">
                        {!isUiux ? "Active mode" : "Switch to code"}
                    </span>
                </motion.button>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.1 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
                <button
                    onClick={onPrimary}
                    className={cn(
                        "inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition ring-1 ring-white/10",
                        cfg.primaryBtn
                    )}
                >
                    View projects <ArrowRight className="h-4 w-4" />
                </button>

              

                <a
                    href={cvHref}
                    download="Rita_Wartan_CV_editable1.pdf"
                    className={cn(
                        "inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition ring-1",
                        cfg.secondaryBtn
                    )}
                >
                    Download CV <ExternalLink className="h-4 w-4" />
                </a>

            </motion.div>
        </section>
    );
}
