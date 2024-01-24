import styled from "styled-components";
import { theme } from "../../../../../theme";
import CartItem from "./CartItem";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { EMPTY_ITEM } from "../../../../../enums/product";

export default function CartItems() {

  const { cart, handleDeleteItemToBuy, itemSelected, setItemSelected } = useContext(OrderContext)

  const handleItemDelete = (event, id) => {
    event.stopPropagation()
    console.log(id)
    handleDeleteItemToBuy(id)
    id === itemSelected.id && setItemSelected(EMPTY_ITEM)
  }

  return (
    <CartItemsStyled>
      {/* <span className="empty-message">Votre commande est vide.</span> */}
      {cart.map(({id, title, imageSource, price, quantity}) => {
      return (
      <CartItem
        key={id}
        title={title}
        imageSource={imageSource}
        price={price}
        quantity={quantity}
        onDeleteItem={(event) => handleItemDelete(event, id)}
      />
      )
    })}
    </CartItemsStyled>
  )
}

const CartItemsStyled = styled.div`

    flex: 1;
    background-color: ${theme.colors.background_white};
    box-shadow: 0px 0px 20px 0px #00000033 inset;
    max-height: 460px;
    padding: 20px 16px 20px 16px;
    display: grid;
    grid-template-columns: 1;
    grid-row-gap: 20px;
    overflow-y: scroll;

    .empty-message {
      display: flex;
      height: calc(95vh - 10vh - 70px - 70px);
      text-align: center;
      justify-content: center;
      align-items: center;
      line-height: 2;
      color: ${theme.colors.greyBlue};
      font-family: ${theme.fonts.family.stylish};
      font-size: ${theme.fonts.size.P4};
    }
`;
