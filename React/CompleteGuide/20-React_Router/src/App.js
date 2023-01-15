import { Route, Switch, Redirect } from 'react-router-dom';
import Welcome from "./pages/Welcom";
import Products from "./pages/Products";
import MainHeader from './components/MainHeader'
import ProductDetail from "./pages/ProductDetails";

function App() {
	return (
			<div>
				<MainHeader/>
				<main>
					<Switch>
						<Route path="/" exact><Redirect to="/welcome"/></Route>
						<Route path="/welcome">
							<Welcome/>
						</Route>
						<Route path="/products" exact>
							<Products/>
						</Route>
						<Route path="/products/:productId">
							<ProductDetail/>
						</Route>
					</Switch>
				</main>
			</div>
	);
}

// basically, prodcuts/:id , shows both products page and product-detail page at the same times
// use [ exact props] to hide products page
// use [switch] to active route that i want
export default App;
