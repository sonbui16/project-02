import { useEffect, useState } from "react";
import { Link } from "react-router";
import styles from "./Home.module.css";
import carouse2 from '../../assets/images/carouse2.png';
import carouse1 from '../../assets/images/carouse1.jpg';



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
      {/* <div className={styles.full_width} >
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
      </div> */}



      <div className=" row">
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
    </div>
  );
}
export default Home;
