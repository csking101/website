"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroInteractive() {
  return (
    <section className="relative pt-20 pb-8 md:pt-40 md:pb-12">
      {/* Background accents removed to unify global gradient (avoid seam below hero) */}

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 relative leading-[1.15] md:leading-[1.15] pb-4 md:pb-5 z-20 overflow-visible">
          <span className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-r from-amber-300/40 via-orange-300/30 to-indigo-300/40 dark:from-yellow-300/0 dark:via-amber-300/15 dark:to-indigo-400/25 blur-2xl opacity-70 mix-blend-multiply dark:mix-blend-normal -z-10" />
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 dark:from-yellow-300 dark:via-amber-300 dark:to-orange-300 drop-shadow-[0_2px_4px_rgba(255,180,0,0.35)] dark:drop-shadow-none">
            Chinmaya
            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>{' '}
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-slate-700 to-blue-600 dark:from-indigo-300 dark:via-slate-200 dark:to-blue-300 drop-shadow-[0_2px_6px_rgba(0,70,170,0.35)] dark:drop-shadow-none">
            Sahu
          </span>
        </h1>

        <p className="mx-auto max-w-3xl text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 md:mb-10 leading-relaxed font-medium">
          Engineering <span className="font-semibold text-slate-900 dark:text-slate-100">resilient cloud platforms</span>, crafting <span className="font-semibold text-slate-900 dark:text-slate-100">intelligent ML systems</span>, and delivering <span className="font-semibold text-slate-900 dark:text-slate-100">developer tooling</span> that scales — with a focus on <span className="font-semibold text-slate-900 dark:text-slate-100">performance</span>, <span className="font-semibold text-slate-900 dark:text-slate-100">simplicity</span>, and <span className="font-semibold text-slate-900 dark:text-slate-100">human‑centered design</span>.
        </p>

        {/* CTA buttons removed */}
      </div>
    </section>
  );
}

export default HeroInteractive;
