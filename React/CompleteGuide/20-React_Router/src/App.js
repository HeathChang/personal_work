import { Route } from 'react-router-dom';
import Welcome from "./pages/Welcom";
import Products from "./pages/Products";
import MainHeader from './components/MainHeader'

function App() {
	return (
			<div>
				<MainHeader/>
				<main>
					<Route path="/welcome">
						<Welcome/>
					</Route>
					<Route path="/products">
						<Products/>
					</Route>
				</main>
			</div>
	);
}

export default App;
