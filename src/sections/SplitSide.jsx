import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { ease } from "../data/content";

export default function SplitSide({ active, label, desc, onClick, align, cfg }) {
    return (
        <button
            onClick={onClick}
            className={cn("group relative p-4 text-left transition sm:p-5", align === "right" ? "text-right" : "")}
            aria-pressed={active}
        >
            <div className={cn("text-xl font-extrabold sm:text-2xl", active ? "text-white" : "text-white/70")}>
                {label}
            </div>
            <div className={cn("mt-1 text-xs sm:text-sm", active ? "text-white/70" : "text-white/50")}>
                {desc}
            </div>

            <motion.div className="absolute inset-0 rounded-none opacity-0 group-hover:opacity-100 transition" aria-hidden>
                <div className={cn("absolute inset-0 opacity-15 bg-gradient-to-r", cfg.accent)} />
            </motion.div>

            {active && (
                <motion.div
                    layoutId="activeSideUnderline"
                    className={cn(
                        "absolute bottom-0 h-[2px] w-24 bg-white",
                        align === "left" ? "left-0" : "right-0"
                    )}
                    transition={{ duration: 0.4, ease }}
                />
            )}
        </button>
    );
}
