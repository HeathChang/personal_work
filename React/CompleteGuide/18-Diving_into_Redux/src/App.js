import Counter from './components/Counter';
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { Fragment } from "react";
import { useSelector } from "react-redux"

function App () {
	const auth = useSelector(state => state.auth.isAuth)
	return (
			<Fragment>
				<Header/>
				{ !auth && <Auth/> }
				{ auth && <UserProfile/> }
				<Counter/>
			</Fragment>
	);
}

export default App;
