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
    title: "NÔI GỖ CHO BÉ 6 CHẾ ĐỘ CHILUX PEACE – Natural",
    price: 1000,
    priceSale: 900,
    img: "https://chilux.vn/wp-content/uploads/2023/02/NOI-3-600x600.jpg",
    slug: "noi-go-cho-be-6-che-do-chilux-peace-natural",
  },
  {
    id: 2,
    title: "NÔI CŨI ĐA NĂNG 6 CHẾ ĐỘ CHILUX PEACE – White",
    price: 1000,
    priceSale: 900,
    img: "https://chilux.vn/wp-content/uploads/2025/05/noi-go-gap-gon-chilux.jpg",
    slug: "noi-cui-da-nang-6-che-do-chilux-peace-white",
  },
  {
    id: 3,
    title: "NÔI CŨI GẤP GỌN",
    price: 1000,
    priceSale: 900,
    img: "https://chilux.vn/wp-content/uploads/2024/09/Combo-1-70.jpg",
    slug: "noi-cui-gap-gon",
  },
  {
    id: 4,
    title: "GIƯỜNG GỖ CHO BÉ CHILUX",
    price: 1000,
    priceSale: 900,
    img: "https://chilux.vn/wp-content/uploads/2023/02/COMBO-1-1-600x600.jpg",
    slug: "giuong-go-cho-be-chilux",
  },

  {
    id: 5,
    title: "NÔI CŨI GẤP GỌN",
    price: 1000,
    priceSale: 900,
    img: "https://chilux.vn/wp-content/uploads/2024/09/Combo-1-70.jpg",
    slug: "noi-cui-gap-gon",
  },
  {
    id: 6,
    title: "GIƯỜNG GỖ CHO BÉ CHILUX",
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

      {/* <div className={styles.full_width}>
        <div id="carouselExampleIndicators" class="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={carouse2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={carouse1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={carouse2} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        flex-wrap overflow-auto flex-lg-wrap flex-md-nowrap
      </div> */}
      <div className={styles.customBg}>
        <div className="container">
          <div className="row d-md-flex flex-lg-wrap flex-md-nowrap flex-nowrap g-3">
            {data2.map((item, index) => {
              return (
                <div class="col-lg-3 col">
                  <div className="bg-white rounded-3">
                    <div className="w-100"></div>
                    <img
                      src={item.img}
                      style={{
                        width: "100%",
                        // height: "270px",
                        objectFit: "cover",
                        height:'270px'
                      }}
                      alt="..."
                    />
                    <div className="text-center">

                    <h1 className={styles.title}>{item.title}</h1>
                    <h1 className={styles.title}>129</h1>
                    </div>

                    {/* <h1 class="">123123</h1> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          class="elementor-shape-fill"
          opacity="0.33"
          d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
        ></path>
        <path
          class="elementor-shape-fill"
          opacity="0.66"
          d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
        ></path>
        <path
          class="elementor-shape-fill"
          d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
        ></path>
      </svg> */}
      <div className="container">
        <p
          className="text-center"
          style={{ color: "#5F5139", fontWeight: "700", fontSize: "40px" }}
        >
          Danh mục Sản Phẩm
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

      <div style={{ marginTop: "130px" }} className="row">
        <div className="col-lg-6 col-12">
          <img
            style={{ width: "100%", height: "auto" }}
            src={design}
            alt=""
            className=""
          />
        </div>
        <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center">
          <div className="w-75">
            <p
              className=""
              style={{ color: "#5F5139", fontWeight: "700", fontSize: "40px" }}
            >
              Tùy chỉnh cho thương hiệu, thị trường và khách hàng của bạn{" "}
            </p>
            <p className="mt-5">
              Hãy giúp dòng sản phẩm đồ nội thất phòng trẻ em và nhiều sản phẩm
              dành cho trẻ em khác của bạn dễ tiếp thị hơn và được khách hàng
              yêu thích hơn với đầy đủ các tùy chọn tùy chỉnh của Craft Child!
            </p>
            <p className="mt-5">
              Đội ngũ thiết kế và thợ thủ công chuyên nghiệp của chúng tôi có
              thể giúp tạo ra những thiết kế sản phẩm dành cho trẻ em thiết thực
              và ấn tượng, đồng thời gửi bản vẽ 3D để bạn xác nhận.
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
              <div class="col-12 col-md-6 col-xl-4 col-xxl-3">
                <div class="card">
                  <img src={item.img} class="card-img-top" alt="..." />
                  <div class="p-2">
                    <h5
                      class="card-title"
                      style={{
                        color: "#5F5139",
                        fontWeight: "600",
                        fontSize: "20px",
                        margin: "10px",
                      }}
                    >
                      {item.title}
                    </h5>
                    <p class="card-text" style={{}}>
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
        {/* <img src={demo1} alt="" className="" /> */}
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
