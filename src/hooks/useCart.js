import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, findInArray } from "../utils/array";

export function useCart() {

  const [ cart, setCart ] = useState(fakeBasket.EMPTY)

  const handleAddItemToBuy = (itemToBuy) => {

    const cartCopy = deepClone(cart)
    const isItemInCart = findInArray(itemToBuy.id, cartCopy)

    if (!isItemInCart) {
      const newCartItem = {
        ...itemToBuy,
        quantity: 1,
      }
      const cartUpdated = [newCartItem, ...cartCopy]
      setCart(cartUpdated)
    } else {
      const indexOfCartItemToIncrement = cart.findIndex((cartItem) => cartItem.id === itemToBuy.id)
      cartCopy[indexOfCartItemToIncrement].quantity += 1
      setCart(cartCopy)
    }

  }

  const handleDeleteItemToBuy = (itemId) => {
    const cartCopy = deepClone(cart)
    const newCart = cartCopy.filter((item) => item.id !== itemId)
    setCart(newCart)
  }

  return { cart, setCart, handleAddItemToBuy, handleDeleteItemToBuy }

}
