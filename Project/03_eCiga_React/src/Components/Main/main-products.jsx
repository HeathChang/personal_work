import { Fragment } from "react";
import "./css/main-products.css";
import { useHistory } from "react-router-dom";

const MainProducts = (props) => {
  const history = useHistory();
  const fnViewProduct = () => {
    history.push(`/view/${props.productType}/${props.productId}`);
  };
  return (
    <div className="home_sec">
      <ul className="home_con_card">
        <li className="home_con" onClick={fnViewProduct.bind(null, 1)}>
          <div className="card best_card on">
            <div className="thumb">
              <div className="inner">
                <img
                  src="http://m.99juice.co.kr/web/product/medium/202107/a10b6584228122b68fe18dc2b7abc6a3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="info">
              <div className="badge">
                <div className="txt">{props.productType}</div>
              </div>
              <div className="price_box">
                <div className="name">{props.productBrand}</div>
                <div className="name">{props.productFlavor}</div>
                <div className="price">
                  <span>{props.productPrice} 원</span>
                </div>
              </div>
              <div className="top">
                <div className="detail">
                  <div className="chip">{props.productFlavor}</div>
                  <div className="txt">{props.productContent}</div>
                </div>
                <div className="txt">{props.productRate} 점</div>
              </div>
            </div>
          </div>
        </li>

      </ul>
    </div>
  );
};

export default MainProducts;
