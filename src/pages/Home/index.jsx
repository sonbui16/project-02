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



const data1 = [
  {
    id: 1,
    title: "Logo",
    img: logo1,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, aliquid?"
  },
  {
    id: 2,
    title: "Packaging",
    img: logo2,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, aliquid?"

  },
  {
    id: 3,
    title: "Shap & Color",
    img: logo3,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, aliquid?"

  },
  {
    id: 4,
    title: "Manual",
    img: logo4,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, aliquid?"

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
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
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
        <p className="">Chưa có j cả</p>
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
          <p className="">Tuỳ chỉnh do bạn </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, deleniti Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Tenetur, quis quia. Odit corporis porro
            voluptatem. Deleniti odio pariatur veniam voluptatem! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Dignissimos, deleniti
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
            quis quia. Odit corporis porro voluptatem. Deleniti odio pariatur
            veniam voluptatem!
          </p>
        </div>
      </div>

      <div className="">
        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, doloremque?</p>
        <div className="row">
          {data1.map((item, index) => {
            return (
              <div class="col-12 col-md-6 col-xl-4 col-xxl-3">
                <div class="card">
                  <img src={item.img} class="card-img-top" alt="..." />
                  <div class="p-2">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, similique.
        </p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, similique Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Error temporibus laborum cum rem fugit expedita aperiam dolor, placeat magni
          vel deserunt quo nostrum. Enim ab non ipsa obcaecati. Minima, laborum laboriosam fuga officiis reprehenderit
          nobis omnis. Aliquam dicta similique ducimus consequuntur quod deserunt quas non, labore perspiciatis c
          onsectetur, facere, tempora nesciunt quo? Nulla odit tempore, voluptatum rerum numquam facere nobis? Maxim
          e aliquam, praesentium architecto eaque aut illo corrupti hic quas totam, animi nesciunt nobis magni laborio
          sam quam veritatis ab sit laudantium! Veritatis consequuntur labore possimus? Rerum hic ratione quibusdam lab
          oriosam, magni aliquam magnam et quisquam incidunt dolorum consequatur maiores facilis?
        </p>
      </div>



       <div className="">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, similique.
        </p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, similique Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Error temporibus laborum cum rem fugit expedita aperiam dolor, placeat magni
          vel deserunt quo nostrum. Enim ab non ipsa obcaecati. Minima, laborum laboriosam fuga officiis reprehenderit
          nobis omnis. Aliquam dicta similique ducimus consequuntur quod deserunt quas non, labore perspiciatis c
          onsectetur, facere, tempora nesciunt quo? Nulla odit tempore, voluptatum rerum numquam facere nobis? Maxim
          e aliquam, praesentium architecto eaque aut illo corrupti hic quas totam, animi nesciunt nobis magni laborio
          sam quam veritatis ab sit laudantium! Veritatis consequuntur labore possimus? Rerum hic ratione quibusdam lab
          oriosam, magni aliquam magnam et quisquam incidunt dolorum consequatur maiores facilis?
        </p>
      </div>
    </div>
  );
}
export default Home;
