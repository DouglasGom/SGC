import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import styles from "./Navbar.module.css";
import logo from "../../../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navLinks, { settingsLink } from "./NavLinks.js";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
        <ul className={styles.list}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
              >
                <FontAwesomeIcon icon={link.icon} className={styles.icon} />
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to={settingsLink.to}
              className={({ isActive }) =>
                isActive ? styles.activeGear : styles.inactiveGear
              }
            >
              <FontAwesomeIcon icon={settingsLink.icon} className={styles.iconGear} />
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
