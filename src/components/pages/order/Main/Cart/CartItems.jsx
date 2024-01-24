import styled from "styled-components";
import CartItem from "./CartItem";


export default function CartItems({ cart, isModeAdmin, handleDeleteItemToBuy }) {

  const handleItemDelete = (id) => {
    handleDeleteItemToBuy(id)
  }

  return (
    <CartItemsStyled>
      {cart.map((cartItem) => (
      <div className="cart-item" key={cartItem.id}>
        <CartItem
          {...cartItem}
          imageSource={cartItem.imageSource ? cartItem.imageSource : "IMAGE_COMING_SOON"}
          onDeleteItem={() => handleItemDelete(cartItem.id)}
          isModeAdmin={isModeAdmin}
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
