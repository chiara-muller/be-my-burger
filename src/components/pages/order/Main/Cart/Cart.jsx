import styled from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths"
import Footer from "./Footer";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function Cart() {

  const { cart } = useContext(OrderContext)

  const isCartEmpty = cart.length === 0

  return (
    <CartStyled>
      <Total amountToPay={formatPrice(0)}/>
      { isCartEmpty ? <EmptyCart/> : <CartItems />}
      <Footer />
    </CartStyled>
  )
}

const CartStyled = styled.div`

  box-sizing: border-box;
  display: flex;
  flex-direction: column;

`;
