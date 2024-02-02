import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../resusable-ui/Header";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";
import { totalPrice } from "./helpers";

export default function Total() {

  const { cart } = useContext(OrderContext)

  const total = totalPrice(cart)

  return (
    <Header>
      <TotalStyled>
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </TotalStyled>
    </Header>
  )
}

const TotalStyled = styled.div`

  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;
