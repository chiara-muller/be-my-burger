import { useState } from "react";
import { deepClone, removeObjectById, findObjectById, findIndexById} from "../utils/array";
import { setLocalStorage } from "../utils/window";

export function useCart() {

  const [ cart, setCart ] = useState([])

  const handleAddItemToBuy = (idItemToBuy, username) => {
    const cartCopy = deepClone(cart)
    const itemAlreadyInCart = findObjectById(idItemToBuy, cartCopy)
    if (itemAlreadyInCart) {
      incrementItemInCart(idItemToBuy, cartCopy, username)
      return
    }
    addNewItem(idItemToBuy, cartCopy, setCart, username)
  }

  const addNewItem = (idItemToBuy, cartCopy, setCart, username) => {
    const newCartItem = {id: idItemToBuy, quantity: 1}
    const cartUpdated = [newCartItem, ...cartCopy]
    setCart(cartUpdated)
    setLocalStorage(username, cartUpdated)
  }

  const incrementItemInCart = (idItemToBuy, cartCopy, username) => {
    const indexOfCartItemToIncrement = findIndexById(idItemToBuy, cart);
    cartCopy[indexOfCartItemToIncrement].quantity += 1;
    setCart(cartCopy);
    setLocalStorage(username, cartCopy)
  }

  const handleDeleteItemToBuy = (itemId, username) => {
    const cartUpdated = removeObjectById(itemId, cart)
    setCart(cartUpdated)
    setLocalStorage(username, cartUpdated)
  }

  return { cart, setCart, handleAddItemToBuy, handleDeleteItemToBuy }

}
