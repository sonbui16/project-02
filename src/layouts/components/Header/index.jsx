import React from "react";
import { Link } from "react-router";

import Navigation from "../Navigation";
import images from "@/assets/images";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserPen,
  faHeart,
  faBasketShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className=" justify-content-center">
      <div className="container">
      <div className="row py-3 align-items-center">
        <div className="col justify-content-start d-flex">
          <a href="/">
            <img
              src={images.logo1}
              alt="Nôi Việt"
              className=""
              style={{ width: "150px", height: "auto" }}
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
              <FontAwesomeIcon icon={faMagnifyingGlass} className=" fs-3" />
            </div>
          </form>
        </div>

        <div className="col">
          <div className={styles.account}>
            <div className={styles.icon}>
              <span className="d-xl-block d-none">Tài khoản</span>
              <FontAwesomeIcon icon={faUserPen} className=" fs-3" />
            </div>
            <div className={styles.icon}>
              <span className="d-xl-block d-none">Yêu thích</span>
              <FontAwesomeIcon icon={faHeart} className=" fs-3" />
            </div>
            <div className={styles.icon}>
              <span className="d-xl-block d-none">Giỏ hàng</span>
              <FontAwesomeIcon icon={faBasketShopping} className=" fs-3" />
            </div>
            <div className=" d-xl-none d-block">
              <FontAwesomeIcon icon={faBars} className=" fs-3" />
            </div>
          </div>
        </div>
      </div>
      {/* d-none:Mặc định ẩn phần tử đó trên mọi kích thước màn hình. 
      Khi màn hình ≥ 1200px (breakpoint xl) thì hiện phần tử dưới dạng display: block */}
      <div className="d-xl-block d-none">
        <Navigation />
      </div>
      </div>
      <div className={styles.divider}></div>
       {/* <hr className="" /> */}
    </header>
  );
}
export default Header;
