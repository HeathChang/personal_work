import React from "react";
import { Route,Switch, Redirect } from 'react-router-dom'

//page import
import MainIndex from "../Page/Main";
import CigaList from "../Page/Ciga"
import MTLIndex from "../Page/MTL"
import DTLIndex from "../Page/DTL"
import Layout from "../Layout";

const Router = () => {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact>
            <MainIndex/>
          </Route>
          <Route path="/mtl">
            <MTLIndex/>
          </Route>
          <Route path="/dtl">
            <DTLIndex/>
          </Route>
          <Route path="/*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </Layout>
  )
}

export default Router;