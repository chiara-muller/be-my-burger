// import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext"
import { fakeMenu } from "../../../fakeData/fakeMenu";

export default function OrderPage() {

  const [ menu, setMenu ]                         = useState(fakeMenu.LARGE)
  const [ isModeAdmin, setIsModeAdmin ]           = useState(false)
  const [ isCollapsed, setIsCollapsed ]           = useState(false)
  const [ currentTabActive, setCurrentTabActive ] = useState("add")

  const handleAdd = (itemToAdd) => {
    const menuCopy = [...menu]
    menuCopy.push(itemToAdd)
    setMenu(menuCopy)
  }

  const handleDelete = (itemId) => {
    const menuCopy = [...menu]
    const newMenu = menuCopy.filter((item) => item.id !== itemId)
    setMenu(newMenu)
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
    resetMenu
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
