import { useEffect, useState } from "react";
import { Link } from "react-router";
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
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, aliquid?",
  },
  {
    id: 2,
    title: "Packaging",
    img: logo2,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, aliquid?",
  },
  {
    id: 3,
    title: "Shap & Color",
    img: logo3,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, aliquid?",
  },
  {
    id: 4,
    title: "Manual",
    img: logo4,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, aliquid?",
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
  {
    id: 7,
    img: logo3,
  },
  {
    id: 8,
    img: logo4,
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
      <div className={styles.full_width}>
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
      </div>

      <div className="row">
        {data2.map((item, index) => {
          return (
            <div class="col-12 col-md-6 col-xl-4 col-xxl-3">
              <div class="card">
                <img src={item.img} class="card-img-top" alt="..." />
                <div class="p-2">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">
                    {item.price} ₫ – {item.priceSale} ₫
                  </p>
                  <a class="btn btn-primary" href={`/products/${item.slug}`}>
                    Đặt hàng
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="">
        <p className="">Danh mục Sản Phẩm</p>
        <div className="row">
          {category.map((item, index) => {
            return (
              <div class="col-12 col-md-6 col-xl-4 col-xxl-3">
                <div class="card">
                  <img src={item.img} class="card-img-top" alt="..." />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <img
            style={{ width: "100%", height: "auto" }}
            src={design}
            alt=""
            className=""
          />
        </div>
        <div className="col-6">
          <p
            className=""
            style={{ color: "#5F5139", fontWeight: "bold", fontSize: "30px" }}
          >
            Tùy chỉnh cho thương hiệu, thị trường và khách hàng của bạn{" "}
          </p>
          <p className="">
            Hãy giúp dòng sản phẩm đồ nội thất phòng trẻ em và nhiều sản phẩm
            dành cho trẻ em khác của bạn dễ tiếp thị hơn và được khách hàng yêu
            thích hơn với đầy đủ các tùy chọn tùy chỉnh của Craft Child!
          </p>
          <p className="">
            Đội ngũ thiết kế và thợ thủ công chuyên nghiệp của chúng tôi có thể
            giúp tạo ra những thiết kế sản phẩm dành cho trẻ em thiết thực và ấn
            tượng, đồng thời gửi bản vẽ 3D để bạn xác nhận.
          </p>
          <p className="">
            Bạn cũng được tự do lựa chọn màu sắc, chất liệu và bao bì để làm nổi
            bật thương hiệu của mình. Hơn nữa, chúng tôi thậm chí có thể cung
            cấp mẫu sản phẩm để bạn trực tiếp trải nghiệm chất lượng thương hiệu
            của chúng tôi.
          </p>
        </div>
      </div>

      <div className="">
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          doloremque?
        </p>
        <div className="row">
          {data1.map((item, index) => {
            return (
              <div class="col-12 col-md-6 col-xl-4 col-xxl-3">
                <div class="card">
                  <img src={item.img} class="card-img-top" alt="..." />
                  <div class="p-2">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="">
        <p className="text-center">Sản phẩm dành cho bé Luôn bên bạn</p>
        <p className="">
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

      <div className="">
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
