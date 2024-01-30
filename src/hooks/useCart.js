import { useState } from "react";
import { deepClone, removeObjectById, findObjectById, findIndexById} from "../utils/array";
import { replaceFrenchCommaWithDot } from "../utils/maths";
import { setLocalStorage } from "../utils/window";

export function useCart() {

  const [ cart, setCart ] = useState([])

  const handleAddItemToBuy = (itemToBuy, username) => {
    const cartCopy = deepClone(cart)
    const isItemInCart = findObjectById(itemToBuy.id, cartCopy)
    if (!isItemInCart) {
      const newCartItem = {
        ...itemToBuy,
        quantity: 1,
      }
      const cartUpdated = [newCartItem, ...cartCopy]
      setCart(cartUpdated)
      setLocalStorage(username, cartUpdated)
      return // arrete le comportement ==> on evite le else
    }
    incrementItemInCart(itemToBuy, cartCopy);
    setLocalStorage(username, cartCopy)
  }

  const incrementItemInCart = (itemToBuy, cartCopy) => {
    const indexOfCartItemToIncrement = findIndexById(itemToBuy.id, cart);
    cartCopy[indexOfCartItemToIncrement].quantity += 1;
    setCart(cartCopy);
  }

  const handleDeleteItemToBuy = (itemId, username) => {
    const cartCopy = deepClone(cart)
    const cartUpdated = removeObjectById(itemId, cartCopy)
    setCart(cartUpdated)
    setLocalStorage(username, cartUpdated)
  }

  const handleEditItemToBuy = (itemBeingEdited, username) => {
    const cartCopy = deepClone(cart)
    const idOfItemToEdit = findIndexById(itemBeingEdited.id, cartCopy)
    const editedPrice = replaceFrenchCommaWithDot(itemBeingEdited.price)
    const itemWithEditedPrice = {...itemBeingEdited, price: editedPrice}
    cartCopy[idOfItemToEdit] = itemWithEditedPrice
    setCart(cartCopy)
    setLocalStorage(username, cartCopy)
  }

  return { cart, setCart, handleAddItemToBuy, handleDeleteItemToBuy, handleEditItemToBuy }

}
