import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function MainTemplate(props) {
  const { children, navItems, logo } = props;

  return (
    <>
      <Header navItems={navItems} logo={logo} />
      <main>{children}</main>
      <Footer navItems={navItems} logo={logo} />
    </>
  );
}

export default MainTemplate;
