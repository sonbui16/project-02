import React, { useEffect } from "react";
import { Link } from "react-router";
// import avatar from "../../assets/images/img-avatar.png";
import styles from "./Contact.module.css";
import http from "../../utils/http";
import { useDispatch } from "react-redux";
function Contact() {
  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      const response = await http.get("/posts");
      console.log(response);
      dispatch({
        type :"product::set-list",
        payload: response
      })
    })()

  }, [])
  return (
    <div>
      <p>Đây là trang liên hệ.</p>
    </div>
  );
}
export default Contact;
