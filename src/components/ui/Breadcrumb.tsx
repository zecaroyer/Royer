import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items, light = false }: { items: BreadcrumbItem[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className={`flex flex-wrap items-center gap-1.5 text-xs ${light ? "text-cream/60" : "text-ink-soft/70"}`}>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className={light ? "hover:text-cream" : "hover:text-ink"}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={light ? "text-gold-light" : "text-gold"}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
