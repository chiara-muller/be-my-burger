import styled from "styled-components";
import Card from "./Card";

export default function Menu() {
  return (
    <MenuStyled>
      <Card />
    </MenuStyled>
  )
}

const MenuStyled = styled.div`

  padding: 50px 50px 150px;
  grid-row-gap: 60px;

`;
