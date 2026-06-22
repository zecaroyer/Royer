export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`section-eyebrow mb-3 ${light ? "text-gold-light" : "text-gold"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-balance text-3xl font-medium sm:text-4xl ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-balance leading-relaxed ${light ? "text-cream/70" : "text-ink-soft"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
