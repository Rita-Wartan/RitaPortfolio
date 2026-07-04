import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ModePill from "./ModePill";
import { ease, navItems } from "../data/content";

export default function Header({
    mode,
    setMode,
    cfg,
    mobileNavOpen,
    setMobileNavOpen,
    onNav,
}) {
    return (
        <header className="site-header sticky top-0 z-30 border-b border-white/10 bg-[#e8ddc7]/70 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-4">
                <div className="flex min-w-0 items-center gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 sm:h-10 sm:w-10">
                        <span className="font-black">R</span>
                    </div>
                    <div className="min-w-0 leading-tight">
                        <div className="truncate text-sm font-semibold sm:text-base">Rita Wartan</div>
                        <div className="truncate text-[11px] text-white/60 sm:text-xs">
                            {mode === "uiux" ? "UI/UX + MERN " : "MERN + Full-stack"}
                        </div>
                    </div>
                </div>

                <nav className="hidden items-center gap-6 md:flex">
                    {navItems.map((it) => (
                        <button
                            key={it.id}
                            onClick={() => onNav(it.id)}
                            className="text-sm text-white/70 hover:text-white transition"
                        >
                            {it.label}
                        </button>
                    ))}
                    <ModePill mode={mode} setMode={setMode} cfg={cfg} />
                </nav>

                <button
                    onClick={() => setMobileNavOpen(true)}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden"
                    aria-label="Open menu"
                >
                    <Menu className="h-5 w-5" />
                </button>
            </div>

            <AnimatePresence>
                {mobileNavOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur"
                    >
                        <motion.div
                            initial={{ y: -10, opacity: 0, scale: 0.98 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: -10, opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.25, ease }}
                            className="mx-auto mt-4 w-[92%] max-w-md rounded-2xl border border-white/10 bg-slate-950 p-4"
                        >
                            <div className="flex items-center justify-between">
                                <div className="text-sm font-semibold">Menu</div>
                                <button
                                    onClick={() => setMobileNavOpen(false)}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                                    aria-label="Close menu"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="mt-4 grid gap-2">
                                {navItems.map((it) => (
                                    <button
                                        key={it.id}
                                        onClick={() => {
                                            setMobileNavOpen(false);
                                            onNav(it.id);
                                        }}
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-white/85"
                                    >
                                        {it.label}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-4">
                                <ModePill mode={mode} setMode={setMode} cfg={cfg} full />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
