import { Fragment } from "react";
import "./MainIndex.css";
import MainProducts from "../../Components/Main/main-products";
import MainReviews from "../../Components/Main/main-reviews";
import MainCs from "../../Components/Main/main-cs";

const MainIndex = () => {
  const fnTestBtn = () => {
    console.log("Test Btn Clicked.");
  };
  return (
    <Fragment>
      <div className="jb-box">
        <video muted autoPlay loop>
          <source src="/Videos/video1.mp4" type="video/mp4" />
          <strong>Your browser does not support the video tag.</strong>
        </video>
        <div className="jb-text-left" onClick={fnTestBtn}>
          <p>1</p>
        </div>
        <div className="jb-text-right" onClick={fnTestBtn}>
          <p>2</p>
        </div>
      </div>
      <MainProducts />
      <MainReviews />
      <MainCs />
    </Fragment>
  );
};

export default MainIndex;
