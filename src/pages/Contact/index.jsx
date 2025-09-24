import React from "react";
import { Link } from "react-router";
// import avatar from "../../assets/images/img-avatar.png";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <div>
      <h1>Liên hệ</h1>
      <p>Đây là trang liên hệ.</p>
      {/* <form action="" autoComplete="off">
        <div className={styles.formGroup}>
          <label className="" for="">
            <span className={styles.label}>Email</span>
            <input
              type="email"
              className={styles.input}
              placeholder="Nhập Email1"
              autoComplete="off"
            />
          </label>
        </div>

        <div className={styles.formGroup}>
          <label className="">
            <span className={styles.label}>Password</span>
            <input
              type="password"
              className={styles.input}
              placeholder="Nhập Password"
            />
          </label>
        </div>
      </form> */}
      <div className={styles.coverImg}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.   
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.   
      </div>
    </div>
  );
}
export default Contact;
