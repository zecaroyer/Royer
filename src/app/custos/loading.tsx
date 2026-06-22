import Container from "@/components/ui/Container";

export default function CustosLoading() {
  return (
    <section className="bg-botanical-dark py-20 lg:py-24">
      <Container>
        <div className="h-3 w-32 animate-pulse rounded-full bg-white/10" />
        <div className="mt-5 h-10 w-2/3 max-w-lg animate-pulse rounded-lg bg-white/10" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-24 animate-pulse rounded-2xl bg-white/5" />
          ))}
        </div>
      </Container>
    </section>
  );
}
