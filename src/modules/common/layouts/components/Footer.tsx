import { NavLink } from "react-router-dom";
import { links } from "src/router";
import { navigation } from "src/router/mainNavigationConfig";
import logo from "../../assets/images/logo.png";

function Footer() {
  const navItems = navigation.map((item) => {
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
    <footer className="py-4 bg-dark text-light">
      <div className="container-fluid d-flex flex-column align-items-center">
        <NavLink to={links.home}>
          <img src={logo} className="mb-3" alt="logo" loading="lazy" />
        </NavLink>
        <nav>
          <ul className="nav d-flex flex-column flex-sm-row text-center">
            {navItems}
          </ul>
        </nav>
        <hr className="w-75" />
        <div className="row w-75">
          <div className="col-sm text-center text-sm-start">
            {" "}
            <span style={{ fontSize: "12px" }}>&copy;Leonardo Bonaventura</span>
          </div>
          <div className="col-sm text-center text-sm-end">
            <a
              href="https://github.com/leobo96"
              target={"_blank"}
              rel="noreferrer"
            >
              <i
                className="bi-github text-primary p-3"
                style={{ fontSize: "1rem" }}
              ></i>
            </a>

            <a
              href="https://www.linkedin.com/in/leonardobonaventura/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i
                className="bi-linkedin text-primary p-3"
                style={{ fontSize: "1rem" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
