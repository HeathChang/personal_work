import {Fragment, useEffect} from "react";
import "./MainIndex.css";
import MainProducts from "../../Components/Main/main-products";
import MainReviews from "../../Components/Main/main-reviews";
import MainCs from "../../Components/Main/main-cs";
import product from "../../dummy/data.js";

const MainIndex = () => {
  const fnTestBtn = () => {
    console.log("Test Btn Clicked.");
    // Pop up?
  };
  const fnViewMore = (data) => {
    console.log("fnViewMore", data);
    // 페이지 이동 ? 아니면 데이터 더 가져오기?
  };

  useEffect(()=>{
    console.log('useEffect:: ',product)
    // dispatch(fetchSingleProduct())
  },)
  return (
    <Fragment>
      <div className="jb-box">
        <video muted autoPlay loop>
          <source src="/Videos/video1.mp4" type="video/mp4" />
          <strong>Your browser does not support the video tag.</strong>
        </video>
        <div className="jb-text-right" onClick={fnTestBtn}>
          <p>e-Ciga</p>
          <h6>Manners make Man</h6>
        </div>
      </div>
      <section>
        <div className="home_ttl">액상 모아보기</div>
        {product.map((product) => (
          <MainProducts
            key={product.productId}
            productId={product.productId}
            productName={product.productName}
            productPrice={product.productPrice}
            productBrand={product.productBrand}
            productFlavor={product.productFlavor}
            productContent={product.productContent}
            productRate={product.productRate}
            productType={product.productType}
          />
        ))}
        <div className="btn_wrap">
          <button className="btn_view_more" onClick={fnViewMore.bind(null, 2)}>
            더보기<span className="i_view_more"></span>
          </button>
        </div>
      </section>
      <section>
        <div className="home_ttl">액상 리뷰</div>
        <MainReviews />
      </section>
      <section>
        <div className="home_ttl">공지사항/이벤트</div>
        <MainCs />
      </section>
    </Fragment>
  );
};

export default MainIndex;
