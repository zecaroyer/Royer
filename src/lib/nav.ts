export type NavItem = {
  href: string;
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
  { href: "/formulas", label: "Fórmulas" },
  { href: "/projeto-laboratorio", label: "Projeto Laboratório" },
  { href: "/compliance", label: "Compliance" },
  { href: "/custos", label: "Custos" },
  { href: "/rastreabilidade", label: "Rastreabilidade" },
];
