import styled from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths"
import Footer from "./Footer";
import Body from "./Body";

export default function Cart() {

  return (
    <CartStyled>
      <Total amountToPay={formatPrice(0)}/>
      <Body />
      <Footer />
    </CartStyled>
  )
}

const CartStyled = styled.div`

  box-sizing: border-box;
  display: flex;
  flex-direction: column;

`;
