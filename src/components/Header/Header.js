import React from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";
import { NavLink as RouterLink } from "react-router-dom";

function Header(props) {
  const { navItems, logo } = props;
  // Collapse isOpen State
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const itemList = navItems.map((item, index) => {
    return (
      <NavItem key={index} className="text-uppercase fw-bold">
        <RouterLink
          to={item.url}
          className={({ isActive }) =>
            `ps-3 text-light nav-link${isActive ? " active" : ""}`
          }
        >
          {item.text}
        </RouterLink>
      </NavItem>
    );
  });

  return (
    <Navbar expand="md" dark color="dark" tag="header" fixed="top">
      <RouterLink to="/" className="mx-3">
        <img src={logo} alt="logo" className="logo" loading="lazy" />
      </RouterLink>

      <NavbarToggler onClick={toggle} className="" />

      <Collapse navbar isOpen={isOpen}>
        <nav>
          <Nav className="me-auto" navbar tag="ul">
            {itemList}
          </Nav>
        </nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
