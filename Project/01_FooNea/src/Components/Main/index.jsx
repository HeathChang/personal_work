import { Fragment, useEffect } from "react";
import Map from './map'
import List from './list'
import classes from './css/index.module.css'


const MainPage = () => {
	return (
			<Fragment>
				<h1 className={ classes.title }>
					Find Nearest Toilet
				</h1>
				<Map/>
				<List/>
			</Fragment>
	);
}

export default MainPage