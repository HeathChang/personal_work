import classes from './css/index.module.css'
import React, { useState, useEffect, Fragment } from 'react';
import LoadingSpinner from "../../UI/LoadingSpinner";

const { kakao } = window;


const Map = () => {
	//함수형 컴포넌트에서는 kakao script를 인지불가. const { kakao } = window를 통해 함수형 컴포넌트에 인지 시킨다고 합니다.
	// https://velog.io/@lifeisbeautiful/React%EC%B9%B4%EC%B9%B4%EC%98%A4-API-%EC%A0%81%EC%9A%A9

	const [ lat, setLat ] = useState(null)
	const [ long, setLong ] = useState(null)
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

	// 이후 계획:
	// 1. spinner를 통해서 UX 개선


	return (
			<Fragment>
				{ isLoading && <LoadingSpinner/>}
				{ !isLoading && (
						<h1>Lat: { lat } * Long: { long }</h1>
					)}
				{ !isLoading && (
						<div className={ classes.map } id="myMap"></div>
				)}
			</Fragment>
	)
}

export default Map;