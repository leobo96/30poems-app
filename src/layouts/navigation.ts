import { ROUTES } from "../routes/router";

export interface NavItem {
  url: string;
  text: string;
}

export const navigation: NavItem[] = [
  { url: `/${ROUTES.HOME}`, text: "Home" },
  { url: `/${ROUTES.DOCUMENTAZIONE}`, text: "Documentazione" },
  { url: `/${ROUTES.POEMS}`, text: "Catalogo" },
];
