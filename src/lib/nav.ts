export type NavItem = {
  href: string;
  label: string;
};

export const PUBLIC_NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
];

export const PRIVATE_NAV_ITEMS: NavItem[] = [
  { href: "/formulas", label: "Formulas" },
  { href: "/investors", label: "Investors" },
  { href: "/laboratory", label: "Laboratory Project" },
  { href: "/compliance", label: "Compliance" },
  { href: "/costs", label: "Costs" },
  { href: "/traceability", label: "Traceability" },
  { href: "/white-paper", label: "White Paper" },
  { href: "/marketing-plan", label: "Marketing Plan" },
];

export const NAV_ITEMS: NavItem[] = [...PUBLIC_NAV_ITEMS, ...PRIVATE_NAV_ITEMS];
