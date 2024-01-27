import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, removeObjectById, findObjectById, findIndexById} from "../utils/array";
import { replaceFrenchCommaWithDot } from "../utils/maths";

export function useCart() {

  const [ cart, setCart ] = useState(fakeBasket.EMPTY)

  const handleAddItemToBuy = (itemToBuy) => {
    const cartCopy = deepClone(cart)
    const isItemInCart = findObjectById(itemToBuy.id, cartCopy)
    if (!isItemInCart) {
      const newCartItem = {
        ...itemToBuy,
        quantity: 1,
      }
      console.log(newCartItem)
      const cartUpdated = [newCartItem, ...cartCopy]
      setCart(cartUpdated)
      return // arrete le comportement ==> on evite le else
    }
    incrementItemInCart(itemToBuy, cartCopy);
  }

  const incrementItemInCart = (itemToBuy, cartCopy) => {
    const indexOfCartItemToIncrement = findIndexById(itemToBuy.id, cart);
    cartCopy[indexOfCartItemToIncrement].quantity += 1;
    setCart(cartCopy);
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
