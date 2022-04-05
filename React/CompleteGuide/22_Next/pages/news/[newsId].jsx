// dynamic page
import { useRouter } from 'next/router'

function DetailPage() {
	const router = useRouter()
	// router.query.newsId holds a concrete value in the URL for this dynamic segmnt.
	console.log(router.query.newsId)
	const newsId = router.query.newsId

	// send a request to the backend API
	return <h1>The Detail Page</h1>
}

export default DetailPage