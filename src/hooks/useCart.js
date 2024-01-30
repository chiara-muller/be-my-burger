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
  }

  const incrementItemInCart = (itemToBuy, cartCopy, username) => {
    const indexOfCartItemToIncrement = findIndexById(itemToBuy.id, cart);
    cartCopy[indexOfCartItemToIncrement].quantity += 1;
    setCart(cartCopy);
    setLocalStorage(username, cartCopy)
  }

  const handleDeleteItemToBuy = (itemId) => {
    const cartCopy = deepClone(cart)
    const cartUpdated = removeObjectById(itemId, cartCopy)
    setCart(cartUpdated)
  }

  const handleEditItemToBuy = (itemBeingEdited) => {
    const cartCopy = deepClone(cart)
    const idOfItemToEdit = findIndexById(itemBeingEdited.id, cartCopy)
    const editedPrice = replaceFrenchCommaWithDot(itemBeingEdited.price)
    const itemWithEditedPrice = {...itemBeingEdited, price: editedPrice}
    cartCopy[idOfItemToEdit] = itemWithEditedPrice
    setCart(cartCopy)
  }

  return { cart, setCart, handleAddItemToBuy, handleDeleteItemToBuy, handleEditItemToBuy }

}
