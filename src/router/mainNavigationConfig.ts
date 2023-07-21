import { links } from "./links";

export interface NavItemConfig {
  url: string;
  text: string;
  end: boolean;
}

export const navigation: NavItemConfig[] = [
  { url: links.home, text: "Home", end: true },
  { url: links.documentation, text: "Documentazione", end: true },
  { url: links.poems.list, text: "Catalogo", end: false },
];
