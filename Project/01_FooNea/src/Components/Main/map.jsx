import classes from './css/index.module.css'
import React, { useState, useEffect, Fragment } from 'react';

const { kakao } = window;


const Map = () => {
	//함수형 컴포넌트에서는 kakao script를 인지불가. const { kakao } = window를 통해 함수형 컴포넌트에 인지 시킨다고 합니다.
	// https://velog.io/@lifeisbeautiful/React%EC%B9%B4%EC%B9%B4%EC%98%A4-API-%EC%A0%81%EC%9A%A9

	const [ lat, setLat ] = useState(null)
	const [ long, setLong ] = useState(null)

	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
				(position) => {
					setLat(position.coords.latitude)
					setLong(position.coords.longitude)
				},
				(error) => {
					console.log(error)
				}
		);
	})

	useEffect(() => {
		const container = document.getElementById('myMap');
		const options = {
			center : new kakao.maps.LatLng(lat, long),
			level : 3
		};
		const map = new kakao.maps.Map(container, options);
	})


	return (
			<Fragment>
				<h1>Lat: { lat } * Long: { long }</h1>
				<div className={ classes.map } id="myMap"></div>
			</Fragment>
	)
}

export default Map;