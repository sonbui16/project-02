import React from "react";
import { Link } from "react-router";

import Navigation from "../Navigation";
import images from "@/assets/images";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMagnifyingGlass, faUserPen , faHeart, faBasketShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="container ">
      <div className="row  align-items-center">
        <div className="col">
          <a href="/">
            <img
              src={images.logo1}
              alt="Nôi Việt"
              className=""
              style={{ width: "100px", height: "auto" }}
            />
          </a>
        </div>

        <div className="col col-xxl-5 d-none d-xl-block">
          <form className={styles.form}>
            <div className={styles.searchBox}>
              <input
                type="text"
                className={styles.search}
                placeholder="Tìm kiếm sản phẩm..."
              />
            </div>
            <div className="">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className=" fs-3"
              />
            </div>
          </form>
        </div>

        <div className="col ">
          <div className={styles.account}>
            <div className="">
              <span>Tài khoản</span>
              <FontAwesomeIcon
                icon={faUserPen}
                className=" fs-3"
              />
            </div>
            <div className="">
              <span>Yêu thích</span>
              <FontAwesomeIcon
                icon={faHeart}
                className=" fs-3"
              />
            </div>
            <div className="">
              <span>Giỏ hàng</span>
              <FontAwesomeIcon
                icon={faBasketShopping}
                className=" fs-3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <Navigation />
      </div>
    </header>
  );
}
export default Header;
