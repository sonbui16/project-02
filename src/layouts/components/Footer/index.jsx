import styles from "./Footer.module.scss";
import bocongthuong from "../../../assets/images/bocongthuong.png";

import { Link } from "react-router";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    // Load the Facebook SDK script
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);
  return (
    <footer  className={styles.footer1}>
      <hr className="my-5" />
      <div className="container ">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            <h3
              className={styles.footer__heading}
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              GIỚI THIỆU1
            </h3>

            <div class="collapse" id="collapseExample">
              <ul className={styles.footer__list}>
                <li className={styles.footer__item}>
                  <Link to="/about-us" className={styles.footer__link}>
                    Giới thiệu
                  </Link>
                </li>
                <li className={styles.footer__item}>
                  <Link
                    to="/page/refund-policy"
                    className={styles.footer__link}
                  >
                    Chính sách đổi trả
                  </Link>
                </li>
                <li className={styles.footer__item}>
                  <Link to="/page/privacy" className={styles.footer__link}>
                    Chính sách bảo mật
                  </Link>
                </li>
                <li className={styles.footer__item}>
                  <Link to="/page/terms-of-use" className={styles.footer__link}>
                    Điều khoản dịch vụ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <h3 className={styles.footer__heading}>THÔNG TIN CÔNG TY</h3>
            <ul className={styles.footer__list}>
              <li className={styles.footer__item}>
                <a href="#!" className={styles.footer__link}>
                  CÔNG TY TNNHH THƯƠNG MẠI VÀ SẢN XUẤT NÔI VIỆT VIỆT NAM
                </a>
              </li>
              <li className={styles.footer__item}>
                <a href="#!" className={styles.footer__link}>
                  Mã số thuế: 0107126252
                </a>
              </li>
              <li className={styles.footer__item}>
                Địa chỉ
                <a href="#!" className={styles.footer__link}>
                  Số 2, ngách 6/14 phố Đội Nhân, Phường Vĩnh Phúc, Quận Ba Đình,
                  Thành phố Hà Nội, Việt Nam
                </a>
              </li>
              <li className={styles.footer__item}>
                Điện thoại bàn:
                <a href="#!" className={styles.footer__link}>
                  024.66512299
                </a>
              </li>

              <li className={styles.footer__item}>
                Hotline CSKH:
                <a href="#!" className={styles.footer__link}>
                  024.66512299
                </a>
              </li>

              <li className={styles.footer__item}>
                Hotline kênh Đại lý:
                <a href="#!" className={styles.footer__link}>
                  024.66512299
                </a>
              </li>

              <li className={styles.footer__item}>
                Email:
                <a href="#!" className={styles.footer__link}>
                  online@nous.com.vn
                </a>
              </li>

              <li className={styles.footer__item}>
                Email: online@nous.com.vn
                <a href="#!" className={styles.footer__link}>
                  Ngày cấp: 30/03/2007, Nơi cấp : Sở kể hoạch và đầu tư thành
                  phố Hà Nội
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="">
              <h3 className={styles.footer__heading}>HỆ THỐNG CỬA HÀNG</h3>
              <ul className={styles.footer__list}>
                <li className={styles.footer__item}>
                  <a href="#!" className={styles.footer__link}>
                    Giới thiệu
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#!" className={styles.footer__link}>
                    Chính sách đổi trả
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#!" className={styles.footer__link}>
                    Chính sách bảo mật
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#!" className={styles.footer__link}>
                    Điều khoản dịch vụ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 bg-primary ">
            <h3 className={styles.footer__heading}>FANPAGE</h3>
            <p className="">123123123112312312311231231231</p>
            {/* <div
                className="fb-page"
                data-href="https://www.facebook.com/profile.php?id=61579803456004"
                data-width="340px"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/profile.php?id=61579803456004"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/profile.php?id=61579803456004">
                    Nôi Việt - Nâng Niu Giấc Ngủ Trẻ Thơ
                  </a>
                </blockquote>
              </div> */}
          </div>
        </div>
      </div>
      <hr className="" />
      <div className="container d-flex justify-content-between">
        <div>Nôi Việt</div>
        <div className="d-flex flex-row align-items-center">
          <span> © 2025 - Powered by NoiViet </span>
          <img
            style={{ width: "200px", height: "auto", marginLeft: "10px" }}
            src={bocongthuong}
            alt="noiviet"
            className="img"
          />
        </div>
      </div>
      <div class="container"></div>
    </footer>
  );
}
export default Footer;
