import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/ui/Container";
import BotanicalArt from "@/components/BotanicalArt";
import LoginForm from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "Data Room Login",
  description: "Sign in to access ROYER's internal formulas, compliance, cost and investment data room.",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-botanical-dark text-cream">
      <BotanicalArt className="pointer-events-none absolute -right-24 top-0 h-[140%] w-[480px] text-gold/10" />
      <Container className="relative py-24">
        <div className="mx-auto max-w-md">
          <p className="section-eyebrow text-gold-light">Data room</p>
          <h1 className="mt-4 max-w-md text-balance font-display text-3xl sm:text-4xl">
            The rest of ROYER lives here.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Formulas, lab project, compliance, costs, traceability and the
            investor data room are reserved for partners and the internal
            team. Sign in to continue.
          </p>

          <div className="mt-8 rounded-2xl border border-gold/20 bg-white/5 p-6 backdrop-blur-sm">
            <Suspense fallback={null}>
              <LoginForm />
            </Suspense>
          </div>

          <p className="mt-6 text-xs text-cream/40">
            Draft-stage access gate, not a production authentication system —
            there is no backend yet. Don&apos;t store anything here that
            needs real security.
          </p>
        </div>
      </Container>
    </section>
  );
}
