import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cn";
import { ease } from "../data/content";

export default function IntroOverlay({ done, onSkip, accent }) {
    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    className="fixed inset-0 z-[100] grid place-items-center bg-slate-950"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease }}
                >
                    <div className="relative w-full max-w-2xl px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease }}
                            className="text-center"
                        >
                            <motion.div
                                className={cn(
                                    "mx-auto flex w-full items-center justify-center px-2 py-3 sm:px-6"
                                )}
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <span
                                    className={cn(
                                        "block bg-gradient-to-r bg-clip-text text-center text-transparent text-[clamp(3.5rem,18vw,10rem)] font-black tracking-tight leading-none",
                                        accent
                                    )}
                                >
                                    Portfolio
                                </span>
                            </motion.div>

                            <div className="mt-4 text-xs text-white/60 sm:text-sm">Loading experience...</div>

                            <button
                                onClick={onSkip}
                                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                            >
                                Skip
                            </button>
                        </motion.div>

                        <motion.div
                            className={cn(
                                "pointer-events-none absolute -inset-12 opacity-25 blur-3xl bg-gradient-to-r sm:-inset-24",
                                accent
                            )}
                            animate={{ opacity: [0.15, 0.28, 0.15] }}
                            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                            aria-hidden
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
