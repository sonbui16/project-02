import React, { useState, useRef } from "react";
import Slider from "react-slick";

import Warehouse1 from "../../assets/images/Warehouse1.jpg";
import Warehouse2 from "@/assets/images/Warehouse2.jpg";
import Warehouse3 from "@/assets/images/Warehouse3.jpg";
import Warehouse4 from "@/assets/images/Warehouse4.jpg";

import styles from "./ProductsDetail.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" ,}}
      onClick={onClick}
    />
  );
}

function ProductsDetail() {
  const productImages = [
    Warehouse1,
    Warehouse2,
    Warehouse3,
    Warehouse4,
    Warehouse1,
    Warehouse2,
    Warehouse3,
  ];
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  let sliderRef = useRef(null);

  const handleThumbnailClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
      setSlideIndex(index);
    }
  };
  var settings = {
    // dots: true, 
    dotsClass: "button__bar",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow />,
    // afterChange: () => setUpdateCount(updateCount + 1),
    // beforeChange: (current, next) => setSlideIndex(next),
    appendDots: (dots) => {
      return (
        <div
          style={{
            display: "grid",
            // justifyContent: "space-between",
            // alignItems: "center",
            flexWrap: "wrap",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {dots.map((item, index) => {
            const isActive = index === slideIndex;
            return (
              <div
                onClick={() => handleThumbnailClick(index)}
                style={{
                  border: isActive
                    ? "3px solid #007bff"
                    : "2px solid transparent",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    // filter: "grayscale(100%)",
                    // opacity: 0.6,
                  }}
                  src={productImages[index]}
                  // alt={`thumb-${i}`}
                  className="thumbnail-img slick-active"
                />
              </div>
            );
          })}
        </div>
      );
    },
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="slider-container ">
            <Slider ref={sliderRef} {...settings}>
              {productImages.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Warehouse ${index + 1}`}
                    className=""
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="col-lg-6">
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            doloribus.
          </p>
          <p className="">Lorem, ipsum dolor.</p>
          <ol>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, voluptatum?
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ol>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            voluptatibus qui porro quidem ea asperiores molestiae aliquam quos
            est, laboriosam dicta dolores accusantium reprehenderit eaque magnam
            similique. Inventore esse atque voluptatem consequuntur, sunt nisi
            fugit tempora quas repudiandae impedit dignissimos aliquid nihil
            corrupti. Fugiat aspernatur similique delectus rem, aut consectetur!
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            accusamus quos ratione nisi est dicta eum, totam repellendus
            blanditiis quis minus dignissimos pariatur repudiandae perspiciatis
            nulla illum asperiores sunt vitae?
          </p>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="col-6">
    //     <h3 className="">Trang chủ/Khác/sản phẩm</h3>
    //   </div>
    //   <div className="col-6">
    //     <div className="">
    //       <h1>Combo 2 lon Sữa Vinamilk Yoko Gold 3 850g (2-6 tuổi)</h1>
    //     </div>
    //     <div className="">
    //       <h4 className="mt-4">Thương hiệu: còn hàng</h4>
    //       <h4 className="mt-4">Mã sản phẩm: SP01</h4>

    //       <h4 className="mt-4">Giá sản phẩm:</h4>
    //       <div className="row">
    //         <h1 className="col-3 fw-bold text-danger">2.290.000 ₫</h1>
    //         <h2 className="col-4 text-decoration-line-through text-secondary fw-light">
    //           3.000.000 ₫
    //         </h2>
    //       </div>

    //       <div className="card mt-4">
    //         <div className="card-header">
    //           <div className="row p-2">
    //             <i className="text-success col-auto fa-solid fa-gift"></i>
    //             <h2 className="col mb-0">Quà tặng hấp dẫn</h2>
    //           </div>
    //         </div>
    //         <div className="row p-2">
    //           <i className="col-auto fa-solid fa-circle-check text-success"></i>
    //           <h5 className="col mb-0">
    //             Ưu đãi 48% khi đặt hàng trong hôm nay
    //           </h5>
    //         </div>
    //         <div className="row p-2">
    //           <i className="col-auto fa-solid fa-circle-check text-success"></i>
    //           <h5 className="col mb-0">
    //             Tặng voucher giảm giá phụ kiện treo nôi xinh xắn trị giá 100.000
    //             ₫ khi đặt hàng trong hôm nay
    //           </h5>
    //         </div>
    //         <div className="row p-2">
    //           <i className="col-auto fa-solid fa-circle-check text-success"></i>
    //           <h5 className="col mb-0">
    //             Voucher trị giá 5% giá trị đơn hàng hiện tại áp dụng cho lần mua
    //             hàng sau
    //           </h5>
    //         </div>

    //         <div className="row p-2">
    //           <i className="col-auto fa-solid fa-circle-check text-success"></i>
    //           <h5 className="col mb-0">Tặng bộ mùng trị giá 150.000 ₫</h5>
    //         </div>

    //         <div className="row p-2">
    //           <i className="col-auto fa-solid fa-circle-check text-success"></i>
    //           <h5 className="col mb-0">
    //             Tặng 2 thanh nhựa bọc cũi và mẫu sticker siêu dễ thương
    //           </h5>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row mt-4">
    //       <button className="btn btn-warning col-6 btn-lg">
    //         ĐẶT HÀNG NGAY
    //       </button>
    //     </div>
    //     <div className="mt-5"></div>
    //   </div>
    // </div>
  );
}
export default ProductsDetail;
