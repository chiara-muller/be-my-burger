import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone } from "../utils/array";

export function useCart() {

  const [ cart, setCart ] = useState(fakeBasket.SMALL)

  const handleAddItemToBuy = (itemToBuy) => {
    const cartCopy = deepClone(cart) // deep clone of the menu
    // or const menuCopy = [...menu]
    cartCopy.push(itemToBuy)
    setCart(cartCopy)
  }

  return { cart, setCart, handleAddItemToBuy }

}
