"use client";
import { useEffect } from "react";

/**
 * ScrollLock
 * Hides scrollbar visually while preserving scroll on all pages.
 * Applies 'no-scrollbar' utility and ensures overflow-auto.
 * Removes any legacy overflow-hidden class.
 */
export function ScrollLock() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const body = document.body;
    if (!body) return;
    body.classList.remove("overflow-hidden");
    body.classList.add("overflow-auto", "no-scrollbar");
  }, []);

  return null;
}
