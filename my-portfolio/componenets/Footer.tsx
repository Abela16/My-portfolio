"use client";

import { ArrowUp } from "lucide-react";

function scrollToTop() {
  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer
      className="border-t border-border-subtle bg-card/30 backdrop-blur-sm"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="text-center text-xs text-muted-foreground sm:text-left">
          © 2026 Abelx. All rights reserved.
        </p>
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 rounded-xl border border-border-subtle bg-muted/50 px-4 py-2 text-xs font-semibold text-foreground transition-all duration-200 hover:border-accent/35 hover:text-accent"
          aria-label="Back to top of page"
        >
          <ArrowUp className="h-4 w-4" aria-hidden />
          Back to top
        </button>
      </div>
    </footer>
  );
}
