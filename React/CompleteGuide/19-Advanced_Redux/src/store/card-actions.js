//redux:: action creator
import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

// export const fetchCartData = () => {
// 	return async (dispatch) => {
// 		const fetchData = async () => {
// 			const response = await fetch(
// 					'https://react-http-40191-default-rtdb.firebaseio.com/cart.json'
// 			);
//
// 			if ( !response.ok ) {
// 				throw new Error('Could not fetch cart data!');
// 			}
//
// 			const data = await response.json();
//
// 			return data;
// 		};
//
// 		try {
// 			const cartData = await fetchData();
// 			dispatch(
// 					cartActions.replaceCart({
// 						items : cartData.items || [],
// 						totalQuantity : cartData.totalQuantity,
// 					})
// 			);
// 		} catch ( error ) {
// 			dispatch(
// 					uiActions.showNotification({
// 						status : 'error',
// 						title : 'Error!',
// 						message : 'Fetching cart data failed!',
// 					})
// 			);
// 		}
// 	};
// };

export const fetchCartData = () => {
	return async (dispatch) => {
		fetch('https://react-http-40191-default-rtdb.firebaseio.com/cart.json', {
			method : 'GET'
		}).then(response => {
			if ( response.status !== 200 ) {
				throw new Error('Could not fetch a data.')
			}
			// fetch를 사용할 땐 두 단계를 거쳐야 한다.
			// 먼저 올바른 url로 요청을 보내야 하고, 바로 뒤에오는 응답에 대해 json()을 해줘야 하는 것이다(axios는 json()과정을 자동으로 해주는 셈이다).
			// .json(): Response 스트림을 가져와 스트림이 완료될때까지 읽는다. 그리고 다 읽은 body의 텍스트를 Promise형태로 반환한다.
			return response.json()
		}).then(cartData => {
			dispatch(cartActions.replaceCart({
				items : cartData.items || [],
				totalQuantity : cartData.totalQuantity
			}))
		}).catch(err => {
			dispatch(uiActions.showNotification({
				status : 'error',
				title : 'Error',
				message : 'Fetching cart data failed. '
			}))
		})
	}
}

export const sendCardData = (cart) => {
	return async (dispatch) => {
		dispatch(uiActions.showNotification({
			status : 'pending',
			title : 'sending',
			message : 'sending cart data !'
		}));
		const sendRequest = async () => {
			const response = await fetch('https://react-http-40191-default-rtdb.firebaseio.com/cart.json', {
				method : 'PUT',
				body : JSON.stringify({
					items : cart.items,
					totalQuantity : cart.totalQuantity
				})
			})
			if ( response.status !== 200 ) {
				throw new Error('Sending Cart Data Failed ! ')
			}
		}
		try {
			await sendRequest()
			dispatch(uiActions.showNotification({
				status : 'success',
				title : 'Success',
				message : 'send cart data successfully !'
			}))
		} catch ( error ) {
			dispatch(uiActions.showNotification({
				status : 'error',
				title : 'Error',
				message : 'Sending cart data failed. '
			}))
		}
	}
}

