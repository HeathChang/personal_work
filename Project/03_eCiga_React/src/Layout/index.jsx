import { Fragment } from "react";
import Index from './NavBar'

const Layout = (props) => {
  return (
      <Fragment>
        <Index/>
        <main>{props.children}</main>
      </Fragment>
  )
}
export default Layout