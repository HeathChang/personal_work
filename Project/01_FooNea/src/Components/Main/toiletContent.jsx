import data from '../data/data'
import classes from './css/toiletContent.module.css'
import { useParams, Route, useHistory, useLocation, useRouteMatch, Link } from 'react-router-dom'

const ToiletContent = (props) => {
	const match = useRouteMatch();
	console.log(222, match)

	return (
			<Link className={ classes.link } to={ `${ props.id }` }>
				<li>
					<h3 className={ classes.name }>{ props.name }</h3>
					<div className={ classes.description }>
						{ props.lat } * { props.long }
					</div>
				</li>
			</Link>
	)
}

export default ToiletContent;