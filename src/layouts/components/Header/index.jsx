import React from "react";
import { Link } from "react-router";

import Navigation from "../Navigation";
// import {} from '../../../assets/images/logo.png';
import logo from "../../../assets/images/logo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className="container align-content-center">
      <div class="row">
        <div className="col-xl-2 col-lg-4 col-md-6">
          <a href="/">
            <img
              src={logo}
              alt="Nôi Việt"
              className=""
              style={{ width: "200px", height: "auto" }}
            />
          </a>
        </div>
        <div className="col-xl-8 col-lg-6  d-none d-lg-block">
          <Navigation />
        </div>

        <div className="col-xl-2 col-lg-2 col-md-6">
          <Link to="/contact">Giới thiệu1</Link>
        </div>
      </div>
      {/* <Link to="/about-us">Giới thiệu</Link>
        <div className="col-2">Liên hệ</div> */}
    </header>
  );
}
export default Header;
