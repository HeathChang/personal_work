//import from 3rd party
import React, { Fragment, useState } from 'react'

//import from src/files
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

function App() {
  const [CartIsShown, setCartIsShown] = useState(false)

  const changeCartHandler = () => {
    setCartIsShown(!CartIsShown)
  }

  return (
    <Fragment>
      {CartIsShown && <Cart onClose={changeCartHandler} />}
      <Header onShowCart={changeCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
