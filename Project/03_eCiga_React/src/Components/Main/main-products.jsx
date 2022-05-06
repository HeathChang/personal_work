import { Fragment } from "react";
import './css/main-products.css'
import { useHistory } from "react-router-dom";

const MainProducts = (props) => {
	const history = useHistory()
	const fnViewMore = (data) => {
		console.log('fnViewMore', data)
		// 페이지 이동 ? 아니면 데이터 더 가져오기?
	}

	const fnViewProduct = (data) => {
		history.push(`/view/${props.productId}`)
	}
	return (
			<div className="home_sec">
				<div className="home_ttl">액상 모아보기</div>
				<ul className="home_con_card">
					<li className="home_con" onClick={ fnViewProduct.bind(null, 1) }>
						<div className="card best_card on">
							<div className="thumb">
								<div className="inner">
									<img src="http://m.99juice.co.kr/web/product/medium/202107/a10b6584228122b68fe18dc2b7abc6a3.jpg" alt=""/>
								</div>
							</div>
							<div className="info">
								<div className="price_box">
									<div className="name">{ props.productName }</div>
									<div className="price"><span>{ props.productPrice }</span></div>
								</div>
								<div className="top">
									<div className="detail">
										<div className="chip">{ props.productFlavor }</div>
										<div className="txt">{ props.productContent }</div>
									</div>
									<div className="txt">
										{ props.productRate } 점
									</div>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="btn_wrap">
							<button className="btn_view_more" onClick={ fnViewMore.bind(null, 2) }>더보기<span className="i_view_more"></span></button>
						</div>
					</li>
				</ul>
			</div>
	)
};

export default MainProducts;
