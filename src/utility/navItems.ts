export interface NavItem {
  url: string;
  text: string;
}

export const navItems: NavItem[] = [
  { url: "/", text: "Home" },
  { url: "/documentazione", text: "Documentazione" },
  { url: "/poems", text: "Catalogo" },
];
