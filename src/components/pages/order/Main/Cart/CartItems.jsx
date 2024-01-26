import styled from "styled-components";
import CartItem from "./CartItem";
import { DEFAULT_IMAGE } from "../../../../../enums/product";
// import { checkIfItemIsClicked } from "../Menu/helper";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { findInArray } from "../../../../../utils/array";


export default function CartItems({ cart, isModeAdmin, handleDeleteItemToBuy }) {

  const { itemsSelected, setItemSelected, setCurrentTabActive, setIsCollapsed, titleEditRef } = useContext(OrderContext)

  const handleItemDelete = (id) => {
    handleDeleteItemToBuy(id)
  }

  const handleCartItemClick = async (idItemClicked) => {
    if (!isModeAdmin) return // si on n'est pas en mode admin, on n'execute pas handleClick
    setCurrentTabActive("edit")
    setIsCollapsed(false)
    const itemClicked = findInArray(idItemClicked, cart)
    await setItemSelected(itemClicked)
    titleEditRef.current.focus()
  }

  return (
    <CartItemsStyled>
      {cart.map((cartItem) => (
      <div className="cart-item" key={cartItem.id}>
        <CartItem
          {...cartItem}
          imageSource={cartItem.imageSource ? cartItem.imageSource : DEFAULT_IMAGE}
          onDeleteItem={() => handleItemDelete(cartItem.id)}
          isModeAdmin={isModeAdmin}
          onClick={() =>handleCartItemClick(cartItem.id)}
          // isSelected={checkIfItemIsClicked(cartItem.id, itemsSelected.id)}
        />
      </div>
    ))}
    </CartItemsStyled>
  )
}

const CartItemsStyled = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .cart-item {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }

`;
