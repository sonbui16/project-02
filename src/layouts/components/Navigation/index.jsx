import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router";
import styles from "./Navigation.module.css";

const navItem = [
  { to: "/", label: "Home" },
  { to: "/news", label: "News" },
  { to: "/about", label: "About" },
];

function Navigation() {
  return (
    <nav>
      <ul>
        {navItem.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;
