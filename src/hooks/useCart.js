import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, filter, findInArray, findIndex } from "../utils/array";

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
      return // arrete le comportement ==> on evite le else
    }

    incrementItemInCart(itemToBuy, cartCopy);

  }

  const incrementItemInCart = (itemToBuy, cartCopy) => {
    const indexOfCartItemToIncrement = findIndex(itemToBuy.id, cart);
    cartCopy[indexOfCartItemToIncrement].quantity += 1;
    setCart(cartCopy);
  }

  const handleDeleteItemToBuy = (itemId) => {
    const cartCopy = deepClone(cart)
    const cartUpdated = filter(itemId, cartCopy)
    setCart(cartUpdated)
  }

  return { cart, setCart, handleAddItemToBuy, handleDeleteItemToBuy }

}
