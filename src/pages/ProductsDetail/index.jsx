
function ProductsDetail() {
  return (
    <div>
      <div className="col-6">
        <h3 className="">Trang chủ/Khác/sản phẩm</h3>
      </div>
      <div className="col-6">
        <div className="">
          <h1>Combo 2 lon Sữa Vinamilk Yoko Gold 3 850g (2-6 tuổi)</h1>
        </div>
        <div className="">
          <h4 className="mt-4">Thương hiệu: còn hàng</h4>
          <h4 className="mt-4">Mã sản phẩm: SP01</h4>

          <h4 className="mt-4">Giá sản phẩm:</h4>
          <div className="row">
            <h1 className="col-3 fw-bold text-danger">2.290.000 ₫</h1>
            <h2 className="col-4 text-decoration-line-through text-secondary fw-light">
              3.000.000 ₫
            </h2>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <div className="row p-2">
                <i className="text-success col-auto fa-solid fa-gift"></i>
                <h2 className="col mb-0">Quà tặng hấp dẫn</h2>
              </div>
            </div>
            <div className="row p-2">
              <i className="col-auto fa-solid fa-circle-check text-success"></i>
              <h5 className="col mb-0">
                Ưu đãi 48% khi đặt hàng trong hôm nay
              </h5>
            </div>
            <div className="row p-2">
              <i className="col-auto fa-solid fa-circle-check text-success"></i>
              <h5 className="col mb-0">
                Tặng voucher giảm giá phụ kiện treo nôi xinh xắn trị giá 100.000
                ₫ khi đặt hàng trong hôm nay
              </h5>
            </div>
            <div className="row p-2">
              <i className="col-auto fa-solid fa-circle-check text-success"></i>
              <h5 className="col mb-0">
                Voucher trị giá 5% giá trị đơn hàng hiện tại áp dụng cho lần mua
                hàng sau
              </h5>
            </div>

            <div className="row p-2">
              <i className="col-auto fa-solid fa-circle-check text-success"></i>
              <h5 className="col mb-0">Tặng bộ mùng trị giá 150.000 ₫</h5>
            </div>

            <div className="row p-2">
              <i className="col-auto fa-solid fa-circle-check text-success"></i>
              <h5 className="col mb-0">
                Tặng 2 thanh nhựa bọc cũi và mẫu sticker siêu dễ thương
              </h5>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <button className="btn btn-warning col-6 btn-lg">
            ĐẶT HÀNG NGAY
          </button>
        </div>
        <div className="mt-5"></div>
      </div>
    </div>
  );
}
export default ProductsDetail;
