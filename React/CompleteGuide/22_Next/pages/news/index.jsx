// request to our-domain/news// root page (our-domain/)
import { Fragment } from "react";
import Link from "next/link"
//use Link to prevent fetching a new HTML page, instead loads the component page

function NewsPage() {
	return (
			<Fragment>
				<h1>The News Page</h1>
				<ul>
					<li><Link href='/news/nextJsisGreat1'>NextJs is Great1</Link></li>
					<li><Link href='/news/nextJsisGreat2'>NextJs is Great2</Link></li>
				</ul>
			</Fragment>
	)
}

export default NewsPage