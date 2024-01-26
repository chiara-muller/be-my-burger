import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone } from "../utils/array"

export function useMenu() {

  const [ menu, setMenu ] = useState(fakeMenu.LARGE)

  const handleAdd = (itemToAdd) => {
    const menuCopy = deepClone(menu) // deep clone of the menu
    // or const menuCopy = [...menu]
    menuCopy.push(itemToAdd)
    setMenu(menuCopy)
  }

  const handleDelete = (itemId) => {
    const menuCopy = deepClone(menu)
    const newMenu = menuCopy.filter((item) => item.id !== itemId)
    setMenu(newMenu)
  }

  const handleEdit = (itemBeingEdited) => {
    const menuCopy = deepClone(menu)
    const idOfItemToEdit = menuCopy.findIndex((item) => item.id === itemBeingEdited.id)
    menuCopy[idOfItemToEdit] = itemBeingEdited
     // permet de voir les modification en temps réel grace a itemBeingUpdated dans la fonction handleChange
     setMenu(menuCopy)
  }

  const resetMenu = () => {
    setMenu(fakeMenu.LARGE)
  }

  return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu}
}
