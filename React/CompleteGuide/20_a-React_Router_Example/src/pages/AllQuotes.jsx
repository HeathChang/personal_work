import QuoteList from '../components/quotes/QuoteList'

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

const AllQuotes = () => {
	return (
			<QuoteList quotes={ DUMMY_QUOTES }/>
	)
}
export default AllQuotes;