import { Fragment } from "react";
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
        />
      ))}
      <MainReviews />
      <MainCs />
    </Fragment>
  );
};

export default MainIndex;
