import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone } from "../utils/array"
import { replaceFrenchCommaWithDot } from "../utils/maths"
import { syncMenus } from "../api/menu"

export function useMenu() {

  const [ menu, setMenu ] = useState()

  const handleAdd = (itemToAdd, username) => {
    const menuCopy = deepClone(menu) // deep clone of the menu
    // or const menuCopy = [...menu]
    menuCopy.push(itemToAdd)
    setMenu(menuCopy)
    syncMenus(username, menuCopy)
  }

  const handleDelete = (itemId, username) => {
    const menuCopy = deepClone(menu)
    const newMenu = menuCopy.filter((item) => item.id !== itemId)
    setMenu(newMenu)
    syncMenus(username, newMenu)
  }

  const handleEdit = (itemBeingEdited, username) => {
    const menuCopy = deepClone(menu)
    const idOfItemToEdit = menuCopy.findIndex((item) => item.id === itemBeingEdited.id)
    const editedPrice = replaceFrenchCommaWithDot(itemBeingEdited.price)
    const itemWithEditedPrice = {...itemBeingEdited, price: editedPrice}
    menuCopy[idOfItemToEdit] = itemWithEditedPrice
     // permet de voir les modification en temps réel grace a itemBeingUpdated dans la fonction handleChange
     setMenu(menuCopy)
     syncMenus(username, menuCopy)
  }

  const resetMenu = (username) => {
    setMenu(fakeMenu.SMALL)
    syncMenus(username, fakeMenu.SMALL)
  }

  return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu}
}
