import React, { Suspense } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import MainPage from '../Components/Main/index'
import UserPage from '../Components/User/index'

const Router = () => {
	return (
			<Switch>
				<Route path="/">
					<MainPage/>
				</Route>
				<Route path="/test2">
					<UserPage/>
				</Route>
				<Route path="/*">
					<Redirect to="/"/>
				</Route>
			</Switch>
	)
}

export default Router;
