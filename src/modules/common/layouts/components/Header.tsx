import { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from "reactstrap";
import { links } from "src/router/links";
import { navigation } from "src/router/mainNavigationConfig";
import logo from "../../assets/images/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const navItems = navigation.map((item) => {
    return (
      <NavItem key={item.text} className="text-uppercase fw-bold">
        <RouterLink
          to={item.url}
          className={({ isActive }) =>
            `ps-3 text-light nav-link${isActive ? " active" : ""}`
          }
          end={item.end}
        >
          {item.text}
        </RouterLink>
      </NavItem>
    );
  });

  return (
    <Navbar expand="md" dark color="dark" tag="header" fixed="top">
      <RouterLink to={links.home} className="mx-3">
        <img src={logo} alt="logo" className="logo" loading="lazy" />
      </RouterLink>

      <NavbarToggler onClick={toggle} className="" />

      <Collapse navbar isOpen={isOpen}>
        <nav>
          <Nav className="me-auto" navbar tag="ul">
            {navItems}
          </Nav>
        </nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
