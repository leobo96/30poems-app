import React from "react";
import { NavLink } from "react-router-dom";

function Footer(props) {
  const { navItems, logo } = props;

  const itemList = navItems.map((item) => {
    return (
      <li key={item.url} className="nav-item">
        <NavLink
          end
          className={({ isActive }) =>
            `text-light fw-bold nav-link ${isActive ? "active" : null}`
          }
          to={item.url}
        >
          {item.text}
        </NavLink>
      </li>
    );
  });

  return (
    <footer className="pt-4 bg-dark text-light">
      <div className="container-fluid d-flex flex-column align-items-center">
        <NavLink to="/">
          <img src={logo} className="mb-3" alt="logo" loading="lazy" />
        </NavLink>
        <nav>
          <ul className="nav d-flex flex-column flex-sm-row text-center">
            {itemList}
          </ul>
        </nav>
        <hr className="w-75" />
        <p>&copy;Leonardo Bonaventura</p>
      </div>
    </footer>
  );
}

export default Footer;
