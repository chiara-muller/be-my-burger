// import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import { useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext"
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_ITEM } from "../../../enums/product";
import { deepClone } from "../../../utils/array";

export default function OrderPage() {

  const [ menu, setMenu ]                         = useState(fakeMenu.SMALL)
  const [ isModeAdmin, setIsModeAdmin ]           = useState(false)
  const [ isCollapsed, setIsCollapsed ]           = useState(false)
  const [ currentTabActive, setCurrentTabActive ] = useState("add")
  const [ newItem, setNewItem ]                   = useState(EMPTY_ITEM)
  const [ itemSelected, setItemSelected ]         = useState(EMPTY_ITEM)
  const titleEditRef                              = useRef()

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
    console.log(idOfItemToEdit)
    menuCopy[idOfItemToEdit] = itemBeingEdited
     // permet de voir les modification en temps réel grace a itemBeingUpdated dans la fonction handleChange
     setMenu(menuCopy)
  }

  const resetMenu = () => {
    setMenu(fakeMenu.LARGE)
  }

  const orderContextValue = {
    menu,
    setMenu,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabActive,
    setCurrentTabActive,
    handleAdd,
    handleDelete,
    handleEdit,
    resetMenu,
    newItem,
    setNewItem,
    itemSelected,
    setItemSelected,
    titleEditRef
  }

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <NavBar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  )
}

const OrderPageStyled = styled.div`

  height: 100vh;
  background: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 1400px;
    height: 95vh;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }

`;
