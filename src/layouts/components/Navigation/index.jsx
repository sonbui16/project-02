import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router";
import styles from "./Navigation.module.css";

const navItem = [
  { to: "/", label: "Trang chủ" },
  { to: "/about", label: "Giới thiệu"},
  { to: "/category", label: "Danh mục"},
  { to: "/news", label: "Tin tức" },
  { to: "/systems", label: "Hệ thống" },

];

function Navigation() {
  return (
    <div className="col-8">
      <nav className={styles.wrapper}>
        <ul>
          {navItem.map((item) => (
            <li key={item.to} className= {styles.navItem}>
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
    </div>
  );
}
export default Navigation;
