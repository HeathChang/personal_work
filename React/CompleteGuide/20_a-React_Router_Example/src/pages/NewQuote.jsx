import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import QuoteForm from '../components/quotes/QuoteForm'

import useHttps from '../hooks/use-http.js'
import { addQuote } from '../lib/api.js'

const NewQuote = () => {
	const { sendRequest, status } = useHttps(addQuote);
	console.log(1, sendRequest)
	console.log(2, status)
	const history = useHistory();

	//sideEffect
	useEffect(() => {
		if(status === 'completed'){
			history.push('/quotes')
		}
	}, [status , history])
	const addQuoteHandler = (quoteData) => {
		sendRequest(quoteData)
	}

	return (
			<QuoteForm isLoading={status === 'pending'} onAddQuote={ addQuoteHandler }/>
	)
}
export default NewQuote;