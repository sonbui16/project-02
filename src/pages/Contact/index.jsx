import React, { useEffect } from "react";
import { Link } from "react-router";
// import avatar from "../../assets/images/img-avatar.png";
import styles from "./Contact.module.css";
import http from "../../utils/http";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import { getList as getProductList } from "@/services/product/productService";
import { selectProductList } from "@/features/product/productSlice";
import { useProductList, useFetchProductList } from "@/features/product";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  useFetchProductList();
  const products = useProductList();
  console.log(products);

  return (
    <div>
      <p>Đây là trang liên hệ.</p>
        <FontAwesomeIcon icon={faYoutube} className="text-success fs-1" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-success fs-3" />

    </div>
  );
}
export default Contact;
