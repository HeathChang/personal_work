import { useParams, Route, useHistory, useLocation, useRouteMatch, Link } from 'react-router-dom'
import { Fragment, useEffect } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import classes from "../components/quotes/QuoteList.module.css";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

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
	const { quoteId } = params
	const { sendRequest, status, data : loadedQuotes, error } = useHttp(getSingleQuote, true) //start with pending
	// when first initiated || changed, load data
	useEffect(() => {
		sendRequest(quoteId)
	}, [ sendRequest, quoteId ])
	if ( status === 'pending' ) {
		return <div className="centered"><LoadingSpinner/></div>
	}
	if ( error === 'error' ) {
		return <div className="centered focused">{ error }</div>
	}
	if(!loadedQuotes.text){
		return <p>No Quote Found</p>
	}
	// const quote = result.data.find(quote => quote.id === params.quoteId)
	return (
			<Fragment>
				<HighlightedQuote text={ loadedQuotes.text } author={ loadedQuotes.author }/>
				<Route path={ match.path } exact>
					<p className='centered'>
						<Link className='btn--flat' to={ `${ match.url }/comments` }>Load Comments</Link>
						{/*<button onClick={ fnNewComment }>Show New Comment</button>*/ }
					</p>
				</Route>
				<p>{ params.quoteId }</p>
				<Route path={ `${ match.path }/comments` }>
					<Comments/>
				</Route>
			</Fragment>

	)

}
export default QuoteDetail;