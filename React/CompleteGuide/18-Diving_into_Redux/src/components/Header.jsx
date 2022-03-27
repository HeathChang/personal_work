import { useSelector, useDispatch, connect } from 'react-redux'
import { authActionsCreator } from "../store";
import classes from './css/Header.module.css';


const Header = () => {
	const isAuth = useSelector(state => state.auth.isAuth)
	const dispatch = useDispatch()

	const logOutHandler = () => {
		dispatch(authActionsCreator.logout())
	}

	return (
			<header className={ classes.header }>
				<h1>Redux Auth</h1>
				{ isAuth &&
						<nav>
							<ul>
								<li>
									<a href='/'>My Products</a>
								</li>
								<li>
									<a href='/'>My Sales</a>
								</li>
								<li>
									<button onClick={ logOutHandler }>Logout</button>
								</li>
							</ul>
						</nav>
				}
			</header>
	);
};

export default Header;
