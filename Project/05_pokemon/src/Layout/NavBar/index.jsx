import {Fragment} from "react"
import {Link} from 'react-router-dom'
import classes from './NavBar.module.css'

const Index = () => {
  return (
      <Fragment>
				<header className={ classes.header }>
					<Link to='/'>
						<div className={ classes.logo }>Pokemon</div>
					</Link>
					<ul>
						<li>
							<Link to="/">Main Page</Link>
						</li>
						{/*<li>*/}
						{/*	<Link to="/dtl">폐호흡</Link>*/}
						{/*</li>*/}
					</ul>
        </header>
      </Fragment>
  )
}
export default Index;