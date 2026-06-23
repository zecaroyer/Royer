import Link from "next/link";
import { ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";

const VARIANT_CLASSES: Record<Variant, string> = {
  solid: "bg-gold text-deep hover:bg-gold-light border border-gold",
  outline: "border border-gold/60 text-gold-light hover:bg-gold/10",
  ghost: "border border-ink/15 text-ink hover:bg-ink/5",
};

export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-[0.01em] transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
