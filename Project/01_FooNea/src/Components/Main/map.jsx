import classes from './css/index.module.css'
import React, { useState, useEffect, Fragment } from 'react';
import LoadingSpinner from "../../UI/LoadingSpinner";

const { kakao } = window;


const Map = () => {
	//함수형 컴포넌트에서는 kakao script를 인지불가. const { kakao } = window를 통해 함수형 컴포넌트에 인지 시킨다고 합니다.
	// https://velog.io/@lifeisbeautiful/React%EC%B9%B4%EC%B9%B4%EC%98%A4-API-%EC%A0%81%EC%9A%A9

	const [ lat, setLat ] = useState(33.450701)
	const [ long, setLong ] = useState(126.5700667)
	const [ isLoading, setIsLoading ] = useState(false)

	// 경도, 위도 가져와 setState 하기
	useEffect(() => {
		setIsLoading(true)
		navigator.geolocation.getCurrentPosition((position) => {
			setLat(position.coords.latitude)
			setLong(position.coords.longitude)
		})

	})
	//가져온 다음에, map 재설정
	useEffect(() => {
		const container = document.getElementById('myMap');
		const options = {
			center : new kakao.maps.LatLng(lat, long),
			level : 3
		};
		const map = new kakao.maps.Map(container, options);
		setIsLoading(false)
	})

	const pinImage = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'


	return (
			<Fragment>
				{ isLoading && <LoadingSpinner/> }
				{ !isLoading && (
						<h1 className={classes.info}>Lat: { lat } * Long: { long }</h1>
				) }
				{ !isLoading && (
						<div className={ classes.map } id="myMap"></div>
				) }
			</Fragment>
	)
}

export default Map;