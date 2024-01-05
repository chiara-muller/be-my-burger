import styled from "styled-components";
import { useContext } from "react";
import Card from "../../../resusable-ui/Card";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths"
import OrderContext from "../../../../context/OrderContext";

export default function Menu() {

  const { menu } = useContext(OrderContext)

  return (
    <MenuStyled>
      {menu.map(({id, title, imageSource, price}) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={ "0,00€" && formatPrice(price)}
          />)
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`

  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  grid-gap: ${theme.gridUnit * 5}px;
  overflow-y: scroll;

`;
