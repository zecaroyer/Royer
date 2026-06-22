"use client";

import { useEffect } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center bg-cream">
      <Container className="py-24">
        <p className="section-eyebrow text-gold">Something went wrong</p>
        <h1 className="mt-4 max-w-xl text-balance font-display text-3xl text-ink sm:text-4xl">
          This section hit an unexpected error.
        </h1>
        <p className="mt-4 max-w-md text-ink-soft">
          Nothing was lost — try again, or head back to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full bg-lab-green px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-lab-green-light"
          >
            Try again
          </button>
          <Button href="/" variant="ghost">Back to home</Button>
        </div>
      </Container>
    </section>
  );
}
