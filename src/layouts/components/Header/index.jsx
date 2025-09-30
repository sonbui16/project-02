import React from "react";
import { Link } from "react-router";

import Navigation from "../Navigation";
// import {} from '../../../assets/images/logo.png';
import logo from "../../../assets/images/logo1.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className="container bg-warning">
      <div className="row">
        <div className="col">
            <a href="/">
              <img
                src={logo}
                alt="Nôi Việt"
                className=""
                style={{ width: "100px", height: "auto" }}
              />
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
