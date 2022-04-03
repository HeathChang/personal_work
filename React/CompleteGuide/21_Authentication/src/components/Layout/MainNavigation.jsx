import { Link, useHistory } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from "react";
import AuthContext from "../../store/auth-context.js";

const MainNavigation = () => {
	const authCtx = useContext(AuthContext)
	const isLoggedIn = authCtx.isLoggedIn
	const history = useHistory()

	const logOutHandler = () => {
		authCtx.logout()
		//option 1
		history.replace('/')
		//option 2 -> Navigation Guard
	}

	return (
			<header className={ classes.header }>
				<Link to='/'>
					<div className={ classes.logo }>React Auth</div>
				</Link>
				<nav>
					<ul>
						{ !isLoggedIn && (
								<li>
									<Link to='/auth'>Login</Link>
								</li>
						) }
						{ isLoggedIn && (
								<li>
									<Link to='/profile'>Profile</Link>
								</li>
						) }
						{ isLoggedIn && (
								<li>
									<button onClick={ logOutHandler }>Logout</button>
								</li>
						) }
					</ul>
				</nav>
			</header>
	);
};

export default MainNavigation;
