"use client";

import { useState } from "react";

export default function CopyLinkButton({ anchorId }: { anchorId: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    const url = `${window.location.origin}${window.location.pathname}#${anchorId}`;
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy link to this section"
      className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-2.5 py-1 text-xs text-ink-soft transition-colors hover:bg-ink/5"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07l-1.5 1.5M14 11a5 5 0 0 0-7.07 0l-2.83 2.83a5 5 0 0 0 7.07 7.07l1.5-1.5"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      {copied ? "Copied!" : "Copy link"}
    </button>
  );
}
