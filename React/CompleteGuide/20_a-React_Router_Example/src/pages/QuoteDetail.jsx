import { useParams, Route, useHistory, useLocation, Link } from 'react-router-dom'
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
	const history = useHistory()
	const params = useParams()
	const location = useLocation();
	console.log(112, location)
	const path = location.pathname.split('/')[3]
	const fnNewComment = () => {
		if ( path !== undefined ) {
			history.push(`/quotes/${ params.quoteId }`)
		} else {
			history.push(`/quotes/${ params.quoteId }/comments`)
		}
	}

	const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)
	if ( !quote ) {
		return <p>No Quote Found</p>
	}
	return (
			<Fragment>
				<HighlightedQuote text={ quote.text } author={ quote.author }/>
				<Route path={ `/quotes/${ params.quoteId }` } exact>
					<div className='centered'>
						<Link className='btn--flat' to={ `/quotes/${ params.quoteId }/comments` }>Load Comments</Link>
						{/*<button onClick={ fnNewComment }>Show New Comment</button>*/ }
					</div>
				</Route>
				<p>{ params.quoteId }</p>
				<Route path={ `/quotes/${ params.quoteId }/comments` }>
					<Comments/>
				</Route>
			</Fragment>

	)

}
export default QuoteDetail;