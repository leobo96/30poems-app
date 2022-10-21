import { Outlet } from "react-router-dom";
import { ROUTES } from "../costants/routes";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export interface NavItem {
  url: string;
  text: string;
}

export const navigation: NavItem[] = [
  { url: `/${ROUTES.HOME}`, text: "Home" },
  { url: `/${ROUTES.DOCUMENTAZIONE}`, text: "Documentazione" },
  { url: `/${ROUTES.POEMS}`, text: "Catalogo" },
];

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
