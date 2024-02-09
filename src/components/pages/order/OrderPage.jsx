// import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import { useEffect, useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext"
import { EMPTY_ITEM } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useCart } from "../../../hooks/useCart";
import { useParams } from "react-router-dom";
import { initializeUserSession } from "./helpers/initializeUserSession";
import { findObjectById } from "../../../utils/array";

export default function OrderPage() {

  const [ isModeAdmin, setIsModeAdmin ]           = useState(false)
  const [ isCollapsed, setIsCollapsed ]           = useState(false)
  const [ currentTabActive, setCurrentTabActive ] = useState("add")
  const [ newItem, setNewItem ]                   = useState(EMPTY_ITEM)
  const [ itemSelected, setItemSelected ]         = useState(EMPTY_ITEM)

  const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu} = useMenu()
  const { cart, setCart, handleAddItemToBuy, handleDeleteItemToBuy, handleEditItemToBuy } = useCart()
  const { username } = useParams()

  const titleEditRef = useRef()

  const handleItemSelected = async (idItemClicked) => {
    const itemClicked = findObjectById(idItemClicked, menu)
    await setIsCollapsed(false)
    await setCurrentTabActive("edit")
    await setItemSelected(itemClicked)
    titleEditRef.current.focus()
  }

  useEffect(() => {
    initializeUserSession(username, setMenu, setCart)
  })

  const orderContextValue = {
    username,
    menu,
    cart,
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
    handleAddItemToBuy,
    handleDeleteItemToBuy,
    handleEditItemToBuy,
    handleItemSelected,
    resetMenu,
    newItem,
    setNewItem,
    itemSelected,
    setItemSelected,
    titleEditRef,
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
