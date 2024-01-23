import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone } from "../utils/array";

export function useCart() {

  const [ cart, setCart ] = useState(fakeBasket.EMPTY)

  const handleAddItemToBuy = (itemToBuy) => {
    const cartCopy = deepClone(cart) // deep clone of the menu
    // or const menuCopy = [...menu]
    cartCopy.unshift(itemToBuy)
    setCart(cartCopy)
  }

  const handleDeleteItemToBuy = (itemId) => {
    const cartCopy = deepClone(cart)
    const newCart = cartCopy.filter((item) => item.id !== itemId)
    setCart(newCart)
  }

  return { cart, setCart, handleAddItemToBuy, handleDeleteItemToBuy }

}
