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

export default function OrderPage() {

  const [ isModeAdmin, setIsModeAdmin ]           = useState(false)
  const [ isCollapsed, setIsCollapsed ]           = useState(false)
  const [ currentTabActive, setCurrentTabActive ] = useState("add")
  const [ newItem, setNewItem ]                   = useState(EMPTY_ITEM)
  const [ itemSelected, setItemSelected ]         = useState(EMPTY_ITEM)
  const [ isAvailable, setIsAvailable ]           = useState(true)
  const [ isAdvertised, setIsAdvertised ]         = useState(false)

  const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu} = useMenu()
  const { cart, setCart, handleAddItemToBuy, handleDeleteItemToBuy, handleEditItemToBuy } = useCart()
  const { username } = useParams()

  const titleEditRef = useRef()

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
    resetMenu,
    newItem,
    setNewItem,
    itemSelected,
    setItemSelected,
    titleEditRef,
    isAvailable,
    setIsAvailable,
    isAdvertised,
    setIsAdvertised
  }

  useEffect(() => {
    initializeUserSession(username, setMenu, setCart)
  }, [])

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
