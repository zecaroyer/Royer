"use client";

import { FormEvent, useState } from "react";

export default function ContactFormMockup() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass-card-light rounded-2xl p-8 text-center">
        <p className="font-display text-xl text-ink">Request received — mockup only</p>
        <p className="mt-2 text-sm text-ink-soft">
          This form is a design mockup and is not yet connected to a backend or mailbox.
          In production this would route to the project&apos;s commercial contact and
          trigger the dossier package described on this page.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card-light grid gap-4 rounded-2xl p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" />
        <Field label="Organisation" name="organisation" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" />
        <Field label="Role" name="role" placeholder="Investor / Partner / Regulator / Other" />
      </div>
      <label className="text-sm font-medium text-ink-soft">
        What are you looking for?
        <select
          name="interest"
          className="mt-1.5 w-full rounded-lg border border-ink/15 bg-white/70 px-3 py-2.5 text-sm text-ink"
          defaultValue="dossier"
        >
          <option value="dossier">Project dossier</option>
          <option value="meeting">Technical meeting</option>
          <option value="partnership">Partnership / investment</option>
          <option value="regulatory">Regulatory / compliance discussion</option>
        </select>
      </label>
      <label className="text-sm font-medium text-ink-soft">
        Message
        <textarea
          name="message"
          rows={4}
          className="mt-1.5 w-full rounded-lg border border-ink/15 bg-white/70 px-3 py-2.5 text-sm text-ink"
          placeholder="Tell us about your interest in the project…"
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-lab-green px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-lab-green-light"
      >
        Send request
      </button>
      <p className="text-xs text-ink-soft/70">
        Design mockup — no data is transmitted or stored. Connect to a real endpoint
        before production use.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="text-sm font-medium text-ink-soft">
      {label}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-ink/15 bg-white/70 px-3 py-2.5 text-sm text-ink"
      />
    </label>
  );
}
