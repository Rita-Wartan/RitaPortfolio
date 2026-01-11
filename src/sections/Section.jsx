import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Section({ id, eyebrow, title, subtitle, children }) {
    const prefersReducedMotion = useReducedMotion();
    const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] };
    return (
        <motion.section
            id={id}
            className="mx-auto max-w-6xl px-4 py-14 md:py-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transition}
                viewport={{ once: true, amount: 0.6 }}
            >
                <div className="text-xs font-semibold tracking-widest text-white/50">
                    {eyebrow.toUpperCase()}
                </div>
                <h2 className="mt-2 text-2xl font-bold md:text-3xl">{title}</h2>
                {subtitle ? (
                    <p className="mt-2 max-w-2xl text-white/70">{subtitle}</p>
                ) : null}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transition}
                viewport={{ once: true, amount: 0.2 }}
            >
                {children}
            </motion.div>
        </motion.section>
    );
}
