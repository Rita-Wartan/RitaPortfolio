import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 md:flex-row md:items-center md:justify-between">
                <div className="text-sm text-white/60">(c) {new Date().getFullYear()} Rita Wartan</div>
                <div className="flex items-center gap-3">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                    >
                        <Github className="h-4 w-4" /> GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rita-wartan-b70a1b319/"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                    >
                        <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
