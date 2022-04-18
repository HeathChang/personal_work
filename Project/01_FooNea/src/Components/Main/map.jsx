import classes from './css/index.module.css'
import React, { useState, useEffect, Fragment } from 'react';
import LoadingSpinner from "../../UI/LoadingSpinner";
import data from '../data/data'

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
			// setLat(position.coords.latitude)
			// setLong(position.coords.longitude)
			setLat(33.450701)
			setLong(126.570667)
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
		const pinImage = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'

		data.map(toilet => {
			// 마커 이미지 크기
			let imageSize = new kakao.maps.Size(24, 35);
			// 마커 이미지 생성
			var markerImage = new kakao.maps.MarkerImage(pinImage, imageSize);
			// 마커 생성

			var marker = new kakao.maps.Marker({
				map : map, // 마커를 표시할 지도
				position : toilet.latlng, // 마커를 표시할 위치
				title : toilet.name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
				image : markerImage // 마커 이미지
			});
		})

	})


	return (
			<Fragment>
				{ isLoading && <LoadingSpinner/> }
				{ !isLoading && (
						<h1 className={ classes.info }>Lat: { lat } * Long: { long }</h1>
				) }
				{ !isLoading && (
						<div className={ classes.map } id="myMap"></div>
				) }
			</Fragment>
	)
}

export default Map;