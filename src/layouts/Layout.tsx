import React, { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import logo from "../assets/images/logo.png";
interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const nav = [
    { url: "/", text: "Home" },
    { url: "/documentazione", text: "Documentazione" },
    { url: "/poems", text: "Catalogo" },
  ];

  return (
    <>
      <Header navItems={nav} logo={logo} />
      <main>{children}</main>
      <Footer navItems={nav} logo={logo} />
    </>
  );
}

export default Layout;
