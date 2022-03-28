import { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification.js'

import { uiActions } from "./store/ui-slice";

let isInitial = true;

function App() {
	const dispatch = useDispatch()
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const cart = useSelector(state => state.cart)
	const notification = useSelector((state) => state.ui.notification)

	//re-executes whenever cart changes
	useEffect(() => {
		const sendCartData = async () => {
			dispatch(uiActions.showNotification({
				status : 'pending',
				title : 'sending',
				message : 'sending cart data !'
			}))
			//send a http request
			const response = await fetch('https://react-http-40191-default-rtdb.firebaseio.com/cart.json', {
				method : 'PUT',
				body : JSON.stringify(cart)
			})
			if ( !response.ok ) {
				throw new Error('Sending Cart Data Failed ! ')
			}
			const responseData = await response.json()
			console.log("PUT DATA SUCCESS:: ", response)
			dispatch(uiActions.showNotification({
				status : 'success',
				title : 'Success',
				message : 'send cart data successfully !'
			}))
		}
		if ( isInitial ) {
			isInitial = false
			return;
		}
		sendCartData().catch(err =>
				dispatch(uiActions.showNotification({
					status : 'error',
					title : 'Error',
					message : 'Sending cart data failed. '
				})))
	}, [ cart, dispatch ])

	return (
			<Fragment>
				{ notification &&
						<Notification
								status={ notification.status }
								title={ notification.title }
								message={ notification.message }
						/>
				}
				<Layout>
					{ showCart && <Cart/> }
					<Products/>
				</Layout>
			</Fragment>

	);
}

export default App;
