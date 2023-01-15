import { useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import {fetchSingleProduct} from '../../../Access/action.js'
import "./CSS/view.css";
const ProductView = () => {
  // const dispatch = useDispatch();
  const params = useParams();

  //State내 저장되어있는 data가져와서 사용하기
  // const product= useSelector((state) => state.productState.product)

  useEffect(() => {
    console.log("useEffect:: ", params);
    // dispatch(fetchSingleProduct())
  });

  return (
    <Fragment>
      <div>
        <div className="home_ttl">상품 상세보기</div>
        <main>
          <div className="card_info">
            <div className="image">
              <img
                src="http://m.99juice.co.kr/web/product/medium/202107/a10b6584228122b68fe18dc2b7abc6a3.jpg"
                alt=""
              />
            </div>
            <div className="inner">
              <div className="info">
                <table>
                  <thead>
                    <tr>
                      <th>제품이름</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="name">브랜드 이름: 보틀쥬스</div>
                        <div className="name">제품 이름: 보헤미안 랩소디</div>
                        <div className="price">브랜드 가격: 23000 원</div>
                        <div className="name">설명: 달달한 수박맛의 액상</div>
                        <div className="name">평점: 4/5</div>
                        <div className="price">타입: MTL</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default ProductView;
