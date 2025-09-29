import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router";
import styles from "./Navigation.module.css";

const navItem = [
  {
    to: "/",
    label: "TRANG CHỦ",
    submenu: [
      { label: "Column 1", to: "/category/col1" },
      { label: "Column 2", to: "/category/col2" },
      { label: "Column 3", to: "/category/col3" },
      { label: "Column 3", to: "/category/col3" },
      { label: "Column 3", to: "/category/col3" },
      { label: "Column 3", to: "/category/col3" },
    ],
  },
  { to: "/about", label: "GIỚI THIỆU" },
  {
    to: "/category",
    label: "DANH MỤC",
    submenu: [
      { label: "Bộ sưu tập giáng sinh", to: "/category/col1" },
      { label: "Bộ sưu tập 2", to: "/category/col2" },
      { label: "Bộ sưu tập mới", to: "/category/col3" },
    ],
  },
  { to: "/news", label: "TIN TỨC" },
  { to: "/systems", label: "HỆ THỐNG" },
];

function Navigation() {
  return (
    <div className="col-8">
      <nav>
        <ul className={styles.wrapper}>
          {navItem.map((item) => (
            <li key={item.to} className={styles.navItem}>
              <NavLink
                to={item.to}
                // className={({ isActive }) =>
                //   isActive ? styles.active : undefined
                // }
                className={styles.active}
              >
                {item.label}
              </NavLink>
              <div className={styles.submenu}>
                {item.submenu && (
                  <ul className={styles.submenu1}>
                    {item.submenu.map((sub) => (
                      <li key={sub.to} className={styles.subItem}>
                        <a href="" className="">
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
