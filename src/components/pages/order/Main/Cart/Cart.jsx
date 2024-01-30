import styled from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths"
import Footer from "./Footer";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { isEmpty } from "../../../../../utils/array";

export default function Cart() {

  const { menu, cart, isModeAdmin, handleDeleteItemToBuy } = useContext(OrderContext)

  if (menu === undefined) return <span>chargement</span>

  const totalPrice = cart.reduce((total, item) => {
    if (isNaN(item.price)) return total
    total += item.price * item.quantity
    return total
  }, 0)

  const isCartEmpty = isEmpty(cart)

  return (
    <CartStyled>
      <Total amountToPay={formatPrice(totalPrice)}/>
      {isCartEmpty ?
        <EmptyCart/> :
        <CartItems
          cart={cart}
          isModeAdmin={isModeAdmin}
          handleDeleteItemToBuy={handleDeleteItemToBuy}
        />
      }
      <Footer />
    </CartStyled>
  )
}

const CartStyled = styled.div`

  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }

`;
