import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

import styles from "./Home.module.css";
import carouse2 from "../../assets/images/carouse2.png";
import carouse1 from "../../assets/images/carouse1.jpg";
import design from "../../assets/images/design.jpg";
import logo1 from "../../assets/images/logo1.jpg";
import logo2 from "../../assets/images/logo2.jpg";
import logo3 from "../../assets/images/logo3.jpg";
import logo4 from "../../assets/images/logo4.jpg";
import demo1 from "../../assets/images/demo1.jpg";

const data1 = [
  {
    id: 1,
    title: "Logo",
    img: logo1,
    desc: "Tùy chỉnh vị trí, kích thước và chất liệu logo để tăng khả năng hiển thị thương hiệu trên giường trẻ em.",
  },
  {
    id: 2,
    title: "Bao bì",
    img: logo2,
    desc: "Kết hợp logo hoặc tuyên bố về thương hiệu của bạn trên hộp bao bì để có giao diện thống nhất và nổi bật.",
  },
  {
    id: 3,
    title: "Hình dạng & Màu sắc",
    img: logo3,
    desc: "Cung cấp nhiều lựa chọn về màu sắc và hình dạng phù hợp với tính thẩm mỹ của thương hiệu, từ tông màu phấn nhẹ nhàng đến tông màu rực rỡ.",
  },
  {
    id: 4,
    title: "Hướng dẫn sử dụng",
    img: logo4,
    desc: "Cung cấp hướng dẫn sử dụng sản phẩm phù hợp cho các thương hiệu khác nhau, đảm bảo hướng dẫn rõ ràng và thống nhất thương hiệu",
  },
];

const data2 = [
  {
    id: 1,
    title: " Natural ưeqweqweqweqw ưeqwewq",
    price: 1000,
    priceSale: 900,
    img: "https://chilux.vn/wp-content/uploads/2023/02/NOI-3-600x600.jpg",
    slug: "noi-go-cho-be-6-che-do-chilux-peace-natural",
  },
  {
    id: 2,
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nulla?",
    price: 1000,
    priceSale: 900,
    img: "https://chilux.vn/wp-content/uploads/2025/05/noi-go-gap-gon-chilux.jpg",
    slug: "noi-cui-da-nang-6-che-do-chilux-peace-white",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, qui?",
    price: 1000,
    priceSale: 900,
    img: "https://chilux.vn/wp-content/uploads/2024/09/Combo-1-70.jpg",
    slug: "noi-cui-gap-gon",
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, dolor!",
    price: 1000,
    priceSale: 900,
    img: "https://chilux.vn/wp-content/uploads/2023/02/COMBO-1-1-600x600.jpg",
    slug: "giuong-go-cho-be-chilux",
  },

  {
    id: 5,
    title: "Lorem ipsum dolor sit ",
    price: 1000,
    priceSale: 900,
    img: "https://chilux.vn/wp-content/uploads/2024/09/Combo-1-70.jpg",
    slug: "noi-cui-gap-gon",
  },
  {
    id: 6,
    title:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, dolor!",
    price: 1000,
    priceSale: 900,
    img: "https://chilux.vn/wp-content/uploads/2023/02/COMBO-1-1-600x600.jpg",
    slug: "giuong-go-cho-be-chilux",
  },
];
const category = [
  {
    id: 1,
    img: logo1,
  },
  {
    id: 2,
    img: logo2,
  },
  {
    id: 3,
    img: logo3,
  },
  {
    id: 4,
    img: logo4,
  },
  {
    id: 5,
    img: logo1,
  },
  {
    id: 6,
    img: logo2,
  },
];

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Trang chủ</title>
        <meta name="description" content="Trang chủ" />
      </Helmet>

      <div className={styles.customBg}>
        <p
          className="text-center"
          style={{
            color: "#5F5139",
            fontWeight: "700",
            fontSize: "33px",
            paddingBottom: "20px",
          }}
        >
          SẢN PHẨM NỔI BẬT
        </p>
        <div className="container overflow-auto">
          <div className="row d-md-flex p-2 g-3  flex-md-wrap flex-nowrap ">
            {data2.map((item, index) => {
              return (
                <div
                  class="col-md-3 col-5 rounded-3 align-items-stretch d-flex"
                  // onClick={() => {
                  //   console.log("click");
                  // }}
                >
                  <Link to={`/products/${item.slug}`}>
                  <div className="bg-white rounded-3">
                    <img
                      src={item.img}
                      // src="https://picsum.photos/200/300"
                      style={{
                        maxWidth: "100%",
                        minHeight: "140px",
                        display: "block",
                        margin: "0 auto",
                      }}
                      alt="..."
                    />
                    <div className="text-center p-4">
                      <h1 className={styles.title}>{item.title}</h1>
                    </div>

                    {/* <h1 class="">123123</h1> */}
                  </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container py-5">
        <p
          className="text-center"
          style={{
            color: "#5F5139",
            fontWeight: "700",
            fontSize: "33px",
            marginBottom: "30px",
          }}
        >
          DANH MỤC SẢN PHẨM
        </p>

        <div
          style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
          className="d-grid gap-3"
        >
          {category.map((item) => {
            return (
              <div class="card">
                <img src={item.img} class="card-img-top" alt="..." />
              </div>
            );
          })}
        </div>
      </div>

      <div className=" container-fluid mt-5 ">
        <div className="row">
          <div className="col-lg-6 ">
            <img
              style={{ maxWidth: "100%" }}
              src={design}
              alt=""
              className=""
            />
          </div>
          <div className="col-lg-6  d-flex  justify-content-center align-items-center">
            <div className="px-5">
              <p
                className=""
                style={{
                  color: "#5F5139",
                  fontWeight: "700",
                  fontSize: "40px",
                }}
              >
                Tùy chỉnh cho thương hiệu, thị trường và khách hàng của bạn{" "}
              </p>
              <p className="mt-5">
                Hãy giúp dòng sản phẩm đồ nội thất phòng trẻ em và nhiều sản
                phẩm dành cho trẻ em khác của bạn dễ tiếp thị hơn và được khách
                hàng yêu thích hơn với đầy đủ các tùy chọn tùy chỉnh của Craft
                Child!
              </p>
              <p className="mt-5">
                Đội ngũ thiết kế và thợ thủ công chuyên nghiệp của chúng tôi có
                thể giúp tạo ra những thiết kế sản phẩm dành cho trẻ em thiết
                thực và ấn tượng, đồng thời gửi bản vẽ 3D để bạn xác nhận.
              </p>
              <p className="mt-5">
                Bạn cũng được tự do lựa chọn màu sắc, chất liệu và bao bì để làm
                nổi bật thương hiệu của mình. Hơn nữa, chúng tôi thậm chí có thể
                cung cấp mẫu sản phẩm để bạn trực tiếp trải nghiệm chất lượng
                thương hiệu của chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "130px" }} className="container text-center">
        <p
          style={{ color: "#5F5139", fontWeight: "700", fontSize: "40px" }}
          className="text-center"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="row" style={{ marginTop: "50px" }}>
          {data1.map((item, index) => {
            return (
              <div class="col-12 col-md-6 col-lg-3 ">
                <div class="">
                  <img
                    src={item.img}
                    class=""
                    style={{
                      maxWidth: "100%",
                      minHeight: "140px",
                      display: "block",
                      margin: "0 auto",
                    }}
                    alt="..."
                  />
                  <div class="p-2">
                    <h5
                      class=""
                      style={{
                        color: "#5F5139",
                        fontWeight: "600",
                        fontSize: "20px",
                        margin: "10px",
                      }}
                    >
                      {item.title}
                    </h5>
                    <p class="" className={styles.title}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: "130px" }} className="container text-center ">
        <p style={{ color: "#5F5139", fontWeight: "700", fontSize: "40px" }}>
          Sản phẩm dành cho bé Luôn bên bạn
        </p>
        <p
          className=""
          style={{ marginTop: "30px", marginBottom: "30px", lineHeight: 1.5 }}
        >
          Là nhà sản xuất đồ nội thất trẻ em bán buôn hàng đầu với 23 năm kinh
          nghiệm, Craft Child cung cấp các sản phẩm nôi, nôi em bé, giường gỗ,
          xe tập đi, ghế ăn dặm và các sản phẩm dành cho trẻ em khác đến thị
          trường mục tiêu của bạn. Cam kết mang đến sự hài lòng cho bạn và khách
          hàng, Craft Child tận dụng chuyên môn của mình trong sản xuất sản phẩm
          OEM/ODM cho trẻ em với các quy trình kiểm soát chất lượng nghiêm ngặt
          để đảm bảo bạn chỉ nhận được những sản phẩm tốt nhất.
        </p>
        <img src={demo1} alt="" className="" />
      </div>

      <div style={{ marginTop: "130px" }} className="container">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          similique.
        </p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          similique Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Error temporibus laborum cum rem fugit expedita aperiam dolor, placeat
          magni vel deserunt quo nostrum. Enim ab non ipsa obcaecati. Minima,
          laborum laboriosam fuga officiis reprehenderit nobis omnis. Aliquam
          dicta similique ducimus consequuntur quod deserunt quas non, labore
          perspiciatis c onsectetur, facere, tempora nesciunt quo? Nulla odit
          tempore, voluptatum rerum numquam facere nobis? Maxim e aliquam,
          praesentium architecto eaque aut illo corrupti hic quas totam, animi
          nesciunt nobis magni laborio sam quam veritatis ab sit laudantium!
          Veritatis consequuntur labore possimus? Rerum hic ratione quibusdam
          lab oriosam, magni aliquam magnam et quisquam incidunt dolorum
          consequatur maiores facilis?
        </p>
      </div>
    </div>
  );
}
export default Home;
