import React from "react";
import { Link } from "react-router";

import Navigation from "../Navigation";
// import {} from '../../../assets/images/logo.png';
import logo from "../../../assets/images/logo.png";

function Header() {
  return (
    <header className="container header">
      <div className="container row">
        <div className="col-2">
          <a href="/">
            <img
              src={logo}
              alt="Nôi Việt"
              className=""
              style={{ width: "200px", height: "auto" }}
            />
          </a>
        </div>

        <Navigation />
          <Link className="col-2" to="/contact">Giới thiệu</Link>

        {/* <Link to="/about-us">Giới thiệu</Link>
        <div className="col-2">Liên hệ</div> */}
      </div>
    </header>
  );
}
export default Header;
