import React from "react";
import { useNavigate } from "react-router";
import notFound from "../../assets/images/404-not-found.png";
function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column mb-3 align-items-center ">
      <div className="p-2">
        <img
          src={notFound}
          style={{ width: "290px", height: "auto" }}
          alt="Error"
          className="img-fluid"
        />
      </div>
      <div className="p-2">404</div>
      <div className="p-2">Rất tiếc! Không tìm thấy trang</div>
      <div className="p-2">
        Liên kết này có thể bị hỏng, hoặc trang này có thể đã được loại bỏ.
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("/");
        }}
      >
        Quay về trang chủ
      </button>
    </div>
  );
}

export default ErrorPage;
