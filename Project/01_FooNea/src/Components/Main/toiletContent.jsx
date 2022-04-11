import data from '../data/data'
import classes from './css/toiletContent.module.css'

const toiletContent = (props) => {
	console.log(123, props)
	return (
			<li className={classes.toilet}>
				<div>
					<h3>{props.name}</h3>
					<div className={classes.description}>{props.lat} * {props.long}</div>
				</div>

			</li>
	)
}

export default toiletContent;