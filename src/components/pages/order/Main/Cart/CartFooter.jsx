import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../resusable-ui/Header";

export default function CartFooter() {
  return (
    <Header>
      <CartFooterStyled>
        <span>Codé avec ❤️ and React.JS</span>
      </CartFooterStyled>
    </Header>
  )
}

const CartFooterStyled = styled.div`

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${theme.colors.white};
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P2};
    font-weight: ${theme.fonts.weights.bold};
  }
`;
