import Container from "@/components/ui/Container";

export default function FormulasLoading() {
  return (
    <section className="bg-botanical-dark py-20 lg:py-24">
      <Container>
        <div className="h-3 w-40 animate-pulse rounded-full bg-white/10" />
        <div className="mt-5 h-10 w-2/3 max-w-xl animate-pulse rounded-lg bg-white/10" />
        <div className="mt-4 h-4 w-1/2 max-w-md animate-pulse rounded bg-white/10" />
        <div className="mt-10 flex flex-wrap gap-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="h-7 w-28 animate-pulse rounded-full bg-white/10" />
          ))}
        </div>
      </Container>
    </section>
  );
}
