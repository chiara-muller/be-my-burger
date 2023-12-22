import styled from "styled-components";
import { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "../../../resusable-ui/Card";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths"

export default function Menu() {

  const [ menu, setMenu ] = useState(fakeMenu2)

  return (
    <MenuStyled>
      {menu.map(({id, title, imageSource, price}) => {
        return <Card key={id} title={title} imageSource={imageSource} leftDescription={formatPrice(price)} /> // or <Product {...product} />
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`

  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${theme.gridUnit * 5}px;
  grid-auto-rows: minmax(100px, auto);
  padding: 50px 50px 150px;
  grid-row-gap: 60px;

`;
