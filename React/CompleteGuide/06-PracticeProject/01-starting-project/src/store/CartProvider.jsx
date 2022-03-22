//Place where I manage the data

//import from 3rd party
import React, { useReducer } from 'react'

//import from src/files
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    )
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount
    const exisitingCartItem = state.items[existingCartItemIndex]
    let updatedItems

    if (exisitingCartItem) {
      const updatedItem = {
        ...exisitingCartItem,
        amount: exisitingCartItem.amount * exisitingCartItem.price,
      }
      updatedItems = [...state.items]
      updatedItems[exisitingCartItem] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }
  return defaultCartState
}

const CartProvider = (props) => {
  // const [state snapshot , name of the function to dispatch an action]
  // userReducer(point at reducer function(pointing only) , Default state)
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: 'ADD',
      item: item,
    })
  }
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: 'REMOVE',
      id: id,
    })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartProvider
