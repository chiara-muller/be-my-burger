import styled from "styled-components";
import { theme } from "../../../../../theme"
import Header from "../../../../resusable-ui/Header";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths"

export default function Cart() {
  return (
    <CartStyled>
      <Total amountToPay={formatPrice(0)}/>
      <div className="body-container">Votre commande est vide.</div>
      <Header>
        Codé avec ❤️ et React.JS
      </Header>
    </CartStyled>
  )
}

const CartStyled = styled.div`

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .body-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    background-color: ${theme.colors.background_white};
    color: ${theme.colors.greyBlue};
    box-shadow: 0px 0px 20px 0px #00000033 inset;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
  }

`;
