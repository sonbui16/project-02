import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router";
import styles from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronCircleDown,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const navItem = [
  {
    to: "/",
    label: "GIỚI THIỆU NÔI VIỆT",
    submenu: [
      { key: 1, label: "Sơ sinh 0-3 tháng", to: "/category/col1" },
      {
        key: 3,
        label: "Bé 3-24 tháng",
        to: "/category/col2",
        data: [
          { id: 1.1, name: "Áo liền quần" },
          { id: 2.2, name: "Bộ quần áo" },
          { id: 3.3, name: "Quần yếm" },
        ],
      },
      { key: 4, label: "Phụ kiện", to: "/category/col3" },
      { key: 5, label: "Set quà tặng", to: "/category/col4" },
    ],
  },
  { to: "/about", label: "BỘ SƯU TẬP" },
  {
    to: "/category",
    label: "THỜI TRANG SƠ SINH",
    submenu: [
      { key: 5, label: "Bộ sưu tập giáng sinh", to: "/category/col1" },
      { key: 6, label: "Bộ sưu tập 2", to: "/category/col2" },
      { key: 7, label: "Bộ sưu tập mới", to: "/category/col3" },
    ],
  },
  { to: "/news", label: "THỜI TRANG CHO BÉ 2-6Y" },
  { to: "/systems", label: "HỆ THỐNG ĐẠI LÝ" },
  { to: "/telegram", label: "LỚN CÙNG NÔI VIỆT" },
];

function Navigation() {
  return (
    <nav className="">
      <ul className={styles.menu}>
        {navItem.map((item) => (
          <li key={item.to} className={styles.navItem}>
            <NavLink to={item.to} className={styles.active}>
              {item.label}
            </NavLink>
            {item.submenu && (
              <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
            )}

            <div className={styles.demo}>
              {item.submenu && (
                <ul className={styles.submenu}>
                  {item.submenu.map((sub) => (
                    <li key={sub.to} className={styles.subItem}>
                      <a href="" className="">
                        {sub.label}
                      </a>

                      {sub.data &&
                        sub.data.map((d) => (
                          <div key={d.id} className="">
                            {d.name}
                          </div>
                        ))}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;
