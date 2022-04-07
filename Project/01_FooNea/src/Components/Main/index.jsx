import { Fragment, useEffect } from "react";
import Map from './map'
import classes from './css/index.module.css'


const MainPage = () => {


	return (
			<Fragment>
				<h1 className={ classes.title }>
					Find Nearest Toilet
				</h1>
				<Map/>
			</Fragment>
	);
}

export default MainPage