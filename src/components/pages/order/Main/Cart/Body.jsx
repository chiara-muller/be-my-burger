import styled from "styled-components";
import { theme } from "../../../../../theme";
import CartItem from "./CartItem";
import { useState } from "react";
import { fakeBasket } from "../../../../../fakeData/fakeBasket";

export default function Body() {

  const [fakeCart, setFakeCart] = useState(fakeBasket.MEDIUM)


  return (
    <BodyStyled>
      {/* <span className="empty-message">Votre commande est vide.</span> */}
      {fakeCart.map(({id, title, imageSource, price, quantity}) => {
      return (
      <CartItem
        key={id}
        title={title}
        imageSource={imageSource}
        price={price}
        quantity={quantity}
      />
      )
    })}
    </BodyStyled>
  )
}

const BodyStyled = styled.div`
    flex: 1;
    background-color: ${theme.colors.background_white};
    box-shadow: 0px 0px 20px 0px #00000033 inset;

    .empty-message {
      display: flex;
      height: calc(95vh - 10vh - 70px - 70px);
      text-align: center;
      justify-content: center;
      align-items: center;
      line-height: 2;
      color: ${theme.colors.greyBlue};
      font-family: ${theme.fonts.family.stylish};
      font-size: ${theme.fonts.size.P4};
    }
`;
