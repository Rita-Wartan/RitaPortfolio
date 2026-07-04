import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Section({ id, eyebrow, title, subtitle, children }) {
    const prefersReducedMotion = useReducedMotion();
    const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] };
    return (
        <motion.section
            id={id}
            className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 md:py-16 lg:px-4"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div
                className="mb-8"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: prefersReducedMotion ? 0 : 0.08 }}
                viewport={{ once: true, amount: 0.6 }}
            >
                <div className="text-xs font-semibold tracking-widest text-white/50">
                    {eyebrow.toUpperCase()}
                </div>
                <h2 className="mt-2 text-xl font-bold sm:text-2xl md:text-3xl">{title}</h2>
                {subtitle ? (
                    <p className="mt-2 max-w-2xl text-sm text-white/70 sm:text-base">{subtitle}</p>
                ) : null}
            </motion.div>
            <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: prefersReducedMotion ? 0 : 0.14 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                {children}
            </motion.div>
        </motion.section>
    );
}
