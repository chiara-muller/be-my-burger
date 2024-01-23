// import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import { useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext"
import { EMPTY_ITEM } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useCart } from "../../../hooks/useCart";

export default function OrderPage() {

  const [ isModeAdmin, setIsModeAdmin ]           = useState(false)
  const [ isCollapsed, setIsCollapsed ]           = useState(false)
  const [ currentTabActive, setCurrentTabActive ] = useState("add")
  const [ newItem, setNewItem ]                   = useState(EMPTY_ITEM)
  const [ itemSelected, setItemSelected ]         = useState(EMPTY_ITEM)

  const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu} = useMenu()
  const { cart, handleAddItemToBuy, handleDeleteItemToBuy } = useCart()

  const titleEditRef = useRef()

  const orderContextValue = {
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
