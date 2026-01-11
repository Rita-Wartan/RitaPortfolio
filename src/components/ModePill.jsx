import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { ease } from "../data/content";

export default function ModePill({ mode, setMode, cfg, full = false }) {
    return (
        <div className={cn("relative rounded-2xl border border-white/10 bg-white/5 p-1", full ? "w-full" : "")}>
            <div className="grid grid-cols-2">
                {[
                    { key: "uiux", label: "UI/UX" },
                    { key: "mern", label: "MERN" },
                ].map((m) => {
                    const active = m.key === mode;
                    return (
                        <button
                            key={m.key}
                            onClick={() => setMode(m.key)}
                            className={cn(
                                "relative z-10 rounded-xl px-3 py-2 text-sm font-medium transition",
                                active ? "text-white" : "text-white/70 hover:text-white"
                            )}
                        >
                            {m.label}
                        </button>
                    );
                })}
            </div>

            <motion.div
                className="absolute inset-y-1 w-1/2 rounded-xl bg-white/10 ring-1 ring-white/10"
                animate={{ x: mode === "uiux" ? "0%" : "100%" }}
                transition={{ duration: 0.35, ease }}
                aria-hidden
            />

            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-40">
                <div className={cn("h-full w-full rounded-2xl bg-gradient-to-r", cfg.accent)} />
            </div>
        </div>
    );
}
