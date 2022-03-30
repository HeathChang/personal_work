import { Link } from 'react-router-dom'

const Products = () => {
	return (
			<section>
				<h1>The Products Page</h1>
				<ul>
					<li><Link to="/products/p1">product 1</Link></li>
					<li><Link to="/products/p2">product 2</Link></li>
					<li><Link to="/products/p3">product 3</Link></li>
				</ul>
			</section>
	)
}
// basically, prodcuts/:id , shows products page and detail page at the same times
// use [switch and exact props] to hide products page
export default Products