import { useParams, Route, useHistory, useLocation, useRouteMatch, Link } from 'react-router-dom'
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import classes from "../components/quotes/QuoteList.module.css";

const DUMMY_QUOTES = [
	{
		id : 'q1',
		author : 'Max1',
		text : 'Learning React is Fun1'
	},
	{
		id : 'q2',
		author : 'Max2',
		text : 'Learning React is Fun2'
	},
	{
		id : 'q3',
		author : 'Max3',
		text : 'Learning React is Fun3'
	}
]

const QuoteDetail = () => {
	// hooks
	const history = useHistory()
	const params = useParams()
	const location = useLocation();
	const match = useRouteMatch();

	const path = location.pathname.split('/')[3]
	const fnNewComment = () => {
		if ( path !== undefined ) {
			history.replace(`/quotes/${ params.quoteId }`)
		} else {
			history.replace(`/quotes/${ params.quoteId }/comments`)
		}
	}

	const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)
	if ( !quote ) {
		return <p>No Quote Found</p>
	}
	return (
			<Fragment>
				<HighlightedQuote text={ quote.text } author={ quote.author }/>
				<Route path={ match.path } exact>
					<div className='centered'>
						<Link className='btn--flat' to={ `${ match.url }/comments` }>Load Comments</Link>
						{/*<button onClick={ fnNewComment }>Show New Comment</button>*/ }
					</div>
				</Route>
				<p>{ params.quoteId }</p>
				<Route path={ `${ match.path }/comments` }>
					<Comments/>
				</Route>
			</Fragment>

	)

}
export default QuoteDetail;