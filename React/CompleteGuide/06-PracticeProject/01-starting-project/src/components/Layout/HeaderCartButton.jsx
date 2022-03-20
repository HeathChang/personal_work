//import from 3rd party
import React, { useContext } from 'react'

//import from src/files
import classes from './css/HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import cartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(cartContext)
 const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}
export default HeaderCartButton
