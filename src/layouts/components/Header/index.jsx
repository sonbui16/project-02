import React from "react";
import { Link } from "react-router";

import Navigation from "../Navigation";
// import {} from '../../../assets/images/logo.png';
import logo from "../../../assets/images/logo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className="container bg-secondary">
      <div className="row">
        <div className="bg-success col">
          <a href="/">
            {/* <img
              src={logo}
              alt="Nôi Việt"
              className=""
              style={{ width: "200px", height: "auto" }}
            /> */}
            Logo
          </a>
        </div>

        <div className="col bg-danger col-xxl-7 d-none d-xl-block">
          <Navigation />
        </div>

        <div className="bg-success col ">
          <Link to="/contact">Liên hệ</Link>
        </div>

</div>
      {/* <Link to="/about-us">Giới thiệu</Link>
        <div className="col-2">Liên hệ</div> */}
    </header>
  );
}
export default Header;
