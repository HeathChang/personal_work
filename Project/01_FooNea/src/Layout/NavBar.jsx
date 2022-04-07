import { Fragment } from "react";
import { Link, useHistory } from 'react-router-dom';
//css
import classes from './NavBar.module.css'

const NavBar = () => {
	return (
			<Fragment>
				<header className={ classes.header }>
					<Link to='/'>
						<div className={ classes.logo }>Foo Nea</div>
					</Link>
					<ul>
						<li>
							<Link to="/">Main</Link>
						</li>
						<li>
							<Link to="/memo">Memo</Link>
						</li>
					</ul>
				</header>
			</Fragment>
	)
}
export default NavBar;