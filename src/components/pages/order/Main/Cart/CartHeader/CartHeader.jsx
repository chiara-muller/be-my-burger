import styled from "styled-components";
import { theme } from "../../../../../../theme";
import Header from "../../../../../resusable-ui/Header";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { formatPrice } from "../../../../../../utils/maths";
import { calculateTotalPrice} from "./helpers";
import CasinoEffect from "../../../../../resusable-ui/CasinoEffect";

export default function CartHeader() {

  const { cart, menu } = useContext(OrderContext)

  const totalPrice = calculateTotalPrice(cart, menu)

  console.log(cart)

  return (
    <Header>
      <CartHeaderStyled>
        <span>Total</span>
        <CasinoEffect count={formatPrice(totalPrice)}/>
      </CartHeaderStyled>
    </Header>
  )
}

const CartHeaderStyled = styled.div`

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
