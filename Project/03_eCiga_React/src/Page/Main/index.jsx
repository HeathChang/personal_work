import { Fragment } from "react";
import "./MainIndex.css";

const MainIndex = () => {
  const fnTestBtn = () => {
    console.log('Test Btn Clicked.')
  }
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
    </Fragment>
  );
};

export default MainIndex;
