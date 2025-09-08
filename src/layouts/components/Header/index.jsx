import React from "react";
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
              style={{ width: "100px", height: "auto" }}
            />
          </a>
        </div>

        <Navigation />

        <div className="col-2">Hotline1</div>
      </div>
    </header>
  );
}
export default Header;
