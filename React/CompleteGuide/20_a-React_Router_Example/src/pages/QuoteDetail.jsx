import { useParams, Route } from 'react-router-dom'
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote'

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
	const params = useParams()
	const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)
	if ( !quote ) {
		return <p>No Quote Found</p>
	}
	return (
			<Fragment>
				<HighlightedQuote text={ quote.text } author={ quote.author }/>
				<p>{ params.quoteId }</p>
				<Route path={ `/quotes/${ params.quoteId }/comments` }>
					<Comments/>
				</Route>
			</Fragment>

	)

}
export default QuoteDetail;