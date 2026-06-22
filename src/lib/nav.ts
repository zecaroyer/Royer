export type NavItem = {
  href: string;
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Início" },
  { href: "/projeto-laboratorio", label: "Projeto Laboratório" },
  { href: "/compliance", label: "Compliance" },
  { href: "/custos", label: "Custos" },
  { href: "/rastreabilidade", label: "Rastreabilidade" },
];
