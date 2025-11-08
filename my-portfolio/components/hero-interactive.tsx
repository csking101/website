"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroInteractive() {
  return (
    <section className="relative pt-12 pb-6 md:pt-16 md:pb-8">
      {/* Background accents removed to unify global gradient (avoid seam below hero) */}

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)] relative leading-[1.15] md:leading-[1.15] pb-4 md:pb-5 z-20 overflow-visible">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 dark:from-yellow-300 dark:via-amber-300 dark:to-orange-300">Chinmaya</span>{' '}
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-slate-600 to-blue-600 dark:from-indigo-300 dark:via-slate-200 dark:to-blue-300">Sahu</span>
          <span className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-amber-400/20 to-indigo-500/25 dark:from-yellow-300/0 dark:via-amber-300/15 dark:to-indigo-400/25 blur-2xl opacity-70 pointer-events-none -z-10" />
        </h1>

        <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
          Building at the intersection of <span className="font-semibold text-slate-900 dark:text-slate-100">cloud</span>, <span className="font-semibold text-slate-900 dark:text-slate-100">machine learning</span>, <span className="font-semibold text-slate-900 dark:text-slate-100">scalable web</span> and <span className="font-semibold text-slate-900 dark:text-slate-100">developer tooling</span>.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/projects"
            className="group relative px-7 py-3 rounded-md font-medium bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 overflow-hidden focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            href="/blogs"
            className="px-7 py-3 rounded-md font-medium border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          >
            Thoughts
          </Link>
          <Link
            href="/research"
            className="px-7 py-3 rounded-md font-medium border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          >
            Research
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroInteractive;
