import { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification.js'
import { sendCardData, fetchCartData } from "./store/card-actions";

let isInitial = true;

function App() {
	const dispatch = useDispatch()
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const cart = useSelector(state => state.cart)
	const notification = useSelector((state) => state.ui.notification)

	useEffect(() => {
		dispatch(fetchCartData())
	}, [dispatch])

	//re-executes whenever cart changes
	useEffect(() => {
		if ( isInitial ) {
			isInitial = false
			return;
		}
		dispatch(sendCardData(cart))
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
