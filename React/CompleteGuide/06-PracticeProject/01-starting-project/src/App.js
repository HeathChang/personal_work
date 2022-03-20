//import from 3rd party
import React, { useState } from 'react'

//import from src/files
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

function App() {
  const [CartIsShown, setCartIsShown] = useState(false)

  const changeCartHandler = () => {
    setCartIsShown(!CartIsShown)
  }

  return (
    <CartProvider>
      {CartIsShown && <Cart onClose={changeCartHandler} />}
      <Header onShowCart={changeCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
