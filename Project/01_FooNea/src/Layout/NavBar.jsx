import { Fragment } from "react";
import { Link, useHistory } from 'react-router-dom';
//css
import classes from './NavBar.module.css'

const NavBar = () => {
	return (
			<Fragment>
				<header className={ classes.header }>
					<Link to='/'>
						<div className={ classes.logo }>React Auth</div>
					</Link>
					<ul>
						<li>
							<Link to="/">Map</Link>
						</li>
						<li>
							<Link to="/test2">User</Link>
						</li>
					</ul>
				</header>
			</Fragment>
	)
}
export default NavBar;