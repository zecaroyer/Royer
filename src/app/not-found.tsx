import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BotanicalArt from "@/components/BotanicalArt";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-botanical-dark text-cream">
      <BotanicalArt className="pointer-events-none absolute -right-24 top-0 h-[140%] w-[480px] text-gold/10" />
      <Container className="relative py-24">
        <p className="section-eyebrow text-gold-light">404</p>
        <h1 className="mt-4 max-w-xl text-balance font-display text-4xl sm:text-5xl">
          This page hasn&apos;t taken root.
        </h1>
        <p className="mt-5 max-w-md text-cream/75">
          The page you&apos;re looking for doesn&apos;t exist, or has moved.
          Try one of the main sections below.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/" variant="solid">Back to home</Button>
          <Button href="/produtos" variant="outline">Product catalogue</Button>
          <Button href="/compliance" variant="outline">Compliance dashboard</Button>
        </div>
      </Container>
    </section>
  );
}
