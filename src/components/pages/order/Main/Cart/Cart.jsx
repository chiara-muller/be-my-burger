import styled from "styled-components";
import CartHeader from "./CartHeader/CartHeader"
import { theme } from "../../../../../theme";
import CartBody from "./CartBody/CartBody";
import CartFooter from "./CartFooter";

export default function Cart() {
  return (
    <CartStyled>
      <CartHeader />
      <CartBody />
      <CartFooter />
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
