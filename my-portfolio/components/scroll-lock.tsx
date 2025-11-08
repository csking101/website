"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * ScrollLock
 * Adds overflow-hidden to body only on homepage ('/'), restores overflow-auto elsewhere.
 * Avoids turning the root layout into a client component (metadata export stays valid).
 */
export function ScrollLock() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document === "undefined") return;
    const body = document.body;
    if (!body) return;

    if (pathname === "/") {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
      body.classList.add("overflow-auto");
    }
  }, [pathname]);

  return null;
}
