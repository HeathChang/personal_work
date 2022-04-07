import classes from './css/index.module.css'
import React, { useEffect } from 'react';
const { kakao } = window;

const Map = () => {
	//함수형 컴포넌트에서는 kakao script를 인지불가. const { kakao } = window를 통해 함수형 컴포넌트에 인지 시킨다고 합니다.
	// https://velog.io/@lifeisbeautiful/React%EC%B9%B4%EC%B9%B4%EC%98%A4-API-%EC%A0%81%EC%9A%A9
	useEffect(()=>{
		const container = document.getElementById('myMap');
		const options = {
			center : new kakao.maps.LatLng(33.450701, 126.570667),
			level : 3
		};
		const map = new kakao.maps.Map(container, options);
	})


	return (
			<div className={ classes.map } id="myMap"></div>
	)
}

export default Map;