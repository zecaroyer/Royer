"use client";

import { FormEvent, useState } from "react";

export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="your@email.com"
        disabled={submitted}
        className="flex-1 rounded-full border border-gold/30 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={submitted}
        className="rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-deep transition-colors hover:bg-gold-light disabled:opacity-70"
      >
        {submitted ? "Subscribed (mockup)" : "Notify me at launch"}
      </button>
    </form>
  );
}
