import styled from "styled-components";
import { theme } from "../../../../theme"

export default function Cart() {
  return (
    <CartStyled>
      <div className="total-container">
        <p>Total</p>
        <p>0,00€</p>
      </div>
      <div className="order-container">Votre commande est vide.</div>
      <div className="footer-container">Codé avec ❤️ et React.JS</div>
    </CartStyled>
  )
}

const CartStyled = styled.div`

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 20px 0px #00000033 inset;

  .total-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    height: 10%;
    background-color: ${theme.colors.dark};
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
  }
  .order-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    color: ${theme.colors.greyBlue};
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
  }
  .footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    height: 10%;
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P2};
  }

`;
