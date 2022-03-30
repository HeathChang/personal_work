import { useParams, Route } from 'react-router-dom'
import { Fragment } from "react";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
	const params = useParams()
	return (
			<Fragment>
				<h2>QuoteDetail</h2>
				<p>{ params.quoteId }</p>
				<Route path={ `/quotes/${ params.quoteId }/comments` }>
					<Comments/>
				</Route>
			</Fragment>

	)

}
export default QuoteDetail;