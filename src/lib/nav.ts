export type NavItem = {
  href: string;
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/formulas", label: "Formulas" },
  { href: "/investors", label: "Investors" },
  { href: "/laboratory", label: "Laboratory Project" },
  { href: "/compliance", label: "Compliance" },
  { href: "/costs", label: "Costs" },
  { href: "/traceability", label: "Traceability" },
];
