import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'

//page import
import MainIndex from "../Main/index";
// import CigaList from "../Page/Ciga"
// import MTLIndex from "../Page/MTL"
// import DTLIndex from "../Page/DTL"
import Layout from "../Layout";
// import ProductView from "../Page/Main/Product/view"

const Router = () => {
	return (
			<Layout>
				<Switch>
					<Route path="/" exact>
						<MainIndex/>
					</Route>
					<Route path="/*">
						<Redirect to="/"/>
					</Route>
				</Switch>
			</Layout>
	)
}

export default Router;