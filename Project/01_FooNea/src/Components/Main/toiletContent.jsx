import data from '../data/data'
import classes from './css/toiletContent.module.css'
import { useParams, Route, useHistory, useLocation, useRouteMatch, Link } from 'react-router-dom'

const ToiletContent = (props) => {
	return (
			<Link className={ classes.link } to={ `${ props.id }` }>
				<li>
					<h3 className={ classes.name }>{ props.name }</h3>
					<div className={ classes.description }>
						{ props.lat } * { props.lang }
					</div>
				</li>
			</Link>
	)
}

export default ToiletContent;