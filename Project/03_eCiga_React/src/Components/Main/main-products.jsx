import { Fragment } from "react";
import './css/main-products.css'

const MainProducts = (props) => {
	const fnViewMore = (data) => {
		console.log('fnViewMore', data)
		// 페이지 이동 ? 아니면 데이터 더 가져오기?
	}

	const fnViewProduct = (data) => {
		console.log('fnViewProduct', data)

	}

	return (
			<div className="home_sec">
				<div className="home_ttl">액상 모아보기</div>
				<ul className="home_con_card">
					<li className="home_con" onClick={fnViewProduct.bind (null,1) } >
						<div className="card best_card on">
							<div className="thumb">
								<div className="inner">
									<img src="http://m.99juice.co.kr/web/product/medium/202107/a10b6584228122b68fe18dc2b7abc6a3.jpg" alt=""/>
								</div>
							</div>
							<div className="info">
								<div className="price_box">
									<div className="name">액상 이름</div>
									<div className="price"><span>가격 입력</span></div>
								</div>
								<div className="top">
									<div className="detail">
										<div className="chip">Flavor</div>
										<div className="txt">Content</div>
									</div>
									<div className="txt">
										당도/맨솔 등
									</div>
								</div>
							</div>
							<div className="tag_area">
								<div className="tag tag_like">
									<div className="i_tag-like"></div>
									<div className="txt">추천</div>
								</div>
								<div className="tag tag_per">
									<div className="i_tag-per"></div>
									<div className="txt">할인</div>
								</div>
								<div className="tag tag_cost">
									<div className="i_tag-cost"></div>
									<div className="txt">특가</div>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="btn_wrap">
							<button className="btn_view_more" onClick={fnViewMore.bind(null,2)}>더보기<span className="i_view_more"></span></button>
						</div>
					</li>
				</ul>
			</div>
	)
};

export default MainProducts;
