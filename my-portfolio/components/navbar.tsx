"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type ChangeEvent } from "react";
import { useTheme, type Font } from "./theme-provider";
import { Home, Pencil, Package, Flag, FlaskConical, FileText, Plane, Utensils, BookOpen, Dumbbell } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggle, font, setFont } = useTheme();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Thoughts", href: "/blogs", icon: Pencil },
    { name: "Projects", href: "/projects", icon: Package },
    { name: "Journey", href: "/journey", icon: Flag },
    { name: "Research", href: "/research", icon: FlaskConical },
    { name: "Notes", href: "/notes", icon: FileText },
    { name: "Travel", href: "/travel", icon: Plane },
    { name: "Food", href: "/food", icon: Utensils },
    { name: "Books", href: "/books", icon: BookOpen },
    { name: "Sports", href: "/sports", icon: Dumbbell },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center h-16">
          {/* Logo/Name */}
          <Link
            href="/"
            className="text-xl font-bold text-slate-900 dark:text-slate-100 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/icon.png"
              alt="Logo"
              width={40}
              height={40}
              // className="inline-block mr-2 mb-1"
            />
          </Link>

          {/* Desktop Navigation - centered icons */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 rounded-full`}
                  >
                    <span
                      className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all
                      ${isActive ? "text-slate-900 dark:text-slate-100" : "text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100"}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span
                        className={`absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/0 to-blue-400/0 blur-md transition-all
                        group-hover:from-indigo-400/40 group-hover:to-blue-400/30
                        ${isActive ? "from-indigo-500/50 to-blue-500/40" : ""}`}
                      />
                    </span>
                    <span
                      className={`pointer-events-none absolute top-full mt-2 px-2 py-1 rounded-md backdrop-blur-sm bg-white/80 dark:bg-slate-800/80
                      text-xs font-medium shadow-lg border border-slate-200/60 dark:border-slate-700/60 transition-all
                      ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"}`}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Desktop Controls right */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
            >
              {theme === "dark" ? (
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                  </svg>
                  Dark
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m19.071 7.071-1.414-1.414M6.343 6.343 4.93 4.93m12.728 0 1.414 1.414M6.343 17.657l-1.414 1.414" />
                  </svg>
                  Light
                </span>
              )}
            </button>
            <select
              aria-label="Select font"
              value={font}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setFont(e.target.value as Font)}
              className="rounded-md px-3 py-2 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
            >
              <option value="ibm">IBM Plex Sans (Default)</option>
              <option value="inter">Inter</option>
              <option value="lora">Lora</option>
              <option value="merriweather">Merriweather</option>
              <option value="openSans">Open Sans</option>
              <option value="robotoSlab">Roboto Slab</option>
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-medium py-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <button
                  onClick={toggle}
                  aria-label="Toggle theme"
                  className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                >
                  {theme === "dark" ? "Dark Mode" : "Light Mode"}
                </button>
                <select
                  aria-label="Select font"
                  value={font}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => setFont(e.target.value as Font)}
                  className="rounded-md px-3 py-2 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
                >
                  <option value="ibm">IBM Plex Sans (Default)</option>
                  <option value="inter">Inter</option>
                  <option value="lora">Lora</option>
                  <option value="merriweather">Merriweather</option>
                  <option value="openSans">Open Sans</option>
                  <option value="robotoSlab">Roboto Slab</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
