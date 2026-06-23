"use client";

import { useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const response = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      setError(data?.error ?? "Invalid email or password.");
      setSubmitting(false);
      return;
    }

    const next = searchParams.get("next") ?? "/laboratory";
    router.push(next);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="email" className="section-eyebrow text-gold-light">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-xl border border-gold/25 bg-white/5 px-4 py-3 text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none"
          placeholder="you@royer.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="section-eyebrow text-gold-light">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full rounded-xl border border-gold/25 bg-white/5 px-4 py-3 text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none"
          placeholder="••••••••"
        />
      </div>

      {error && (
        <p role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold bg-gold px-6 py-3 text-sm font-medium tracking-wide text-deep transition-all duration-150 hover:-translate-y-0.5 hover:bg-gold-light active:translate-y-0 active:scale-[0.98] disabled:opacity-60"
      >
        {submitting ? "Checking…" : "Enter the data room"}
      </button>
    </form>
  );
}
