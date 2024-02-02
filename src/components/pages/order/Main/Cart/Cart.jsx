import styled from "styled-components";
import Total from "./Total";
import Footer from "./Footer";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { isEmpty } from "../../../../../utils/array";

export default function Cart() {

  const { menu, cart } = useContext(OrderContext)

  const isCartEmpty = isEmpty(cart)

  return (
    <CartStyled>
      <Total />
      {isCartEmpty ? <EmptyCart isLoading={menu === undefined}/> : <CartItems />}
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
