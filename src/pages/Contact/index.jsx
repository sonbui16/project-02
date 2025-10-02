import React, { useEffect } from "react";
import { Link } from "react-router";
// import avatar from "../../assets/images/img-avatar.png";
import styles from "./Contact.module.css";
import http from "../../utils/http";
import { useDispatch, useSelector } from "react-redux";

import { getList as getProductList } from "@/services/product/productService";
import { selectProductList } from "@/features/product/productSlice";
import { useProductList, useFetchProductList } from "@/features/product";

function Contact() {
  useFetchProductList();
  const products = useProductList();
  console.log(products);

  return (
    <div>
      <p>Đây là trang liên hệ.</p>
    </div>
  );
}
export default Contact;
