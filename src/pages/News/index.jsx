function News() {
    const data = [
        { 
            id:1,
            title: "DANH SÁCH ĐẠI LÝ CHÍNH THỨC THAM GIA NOUS PARTY 2025", 
            created_at: "17 Thg 6 2025", 
            desc: "Sự kiện thường niên chỉ diễn ra một lần duy nhất trong năm, là dịp lý tưởng để ba mẹ “săn” những sản phẩm chất lượng với mức giá cực kỳ ưu",
            img :"https://file.hstatic.net/200000692427/article/nu_party_blog_danh_sach_4622c40fe9b548469d953aade04d6205_grande.jpg",
            slug:""
        },
         { 
            id:2,
            title: "DANH SÁCH ĐẠI LÝ CHÍNH THỨC THAM GIA NOUS PARTY 2025", 
            created_at: "17 Thg 6 2025", 
            desc: "Sự kiện thường niên chỉ diễn ra một lần duy nhất trong năm, là dịp lý tưởng để ba mẹ “săn” những sản phẩm chất lượng với mức giá cực kỳ ưu",
            img :"https://file.hstatic.net/200000692427/article/nu_party_blog_danh_sach_4622c40fe9b548469d953aade04d6205_grande.jpg"
        },
        { 
            id:3,
            title: "DANH SÁCH ĐẠI LÝ CHÍNH THỨC THAM GIA NOUS PARTY 2025", 
            created_at: "17 Thg 6 2025", 
            desc: "Sự kiện thường niên chỉ diễn ra một lần duy nhất trong năm, là dịp lý tưởng để ba mẹ “săn” những sản phẩm chất lượng với mức giá cực kỳ ưu",
            img :"https://file.hstatic.net/200000692427/article/nu_party_blog_danh_sach_4622c40fe9b548469d953aade04d6205_grande.jpg"
        }
    ]
    return <div className="">
        <a rel="stylesheet" href="/" classNameName="">
            Trang chủ /
        </a>{" "}
        Blog - Tin tức

         <div className=" row">
        {data.map((item, index) => {
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
}
export default News