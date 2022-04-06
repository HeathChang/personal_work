import React, { Suspense } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import MainPage from '../Components/Main/index'
import UserPage from '../Components/User/index'
import Layout from '../Layout/Layout'

const Router = () => {
	return (
			<Layout>
				<Switch>
					<Route path="/" exact>
						<MainPage/>
					</Route>
					<Route path="/test2">
						<UserPage/>
					</Route>
					<Route path="/*">
						<Redirect to="/"/>
					</Route>
				</Switch>
			</Layout>
	)
}

export default Router;
