import data from '../data/data'
import classes from './css/toiletContent.module.css'

const toiletContent = (props) => {
	console.log(123, props)
	return (
				<li onClick={props.fnView}>
						<h3 className={classes.name}>{props.name}</h3>
						<div className={classes.description}>
							Latitude: {props.lat} * Long: {props.long}
						</div>
				</li>
	)
}

export default toiletContent;