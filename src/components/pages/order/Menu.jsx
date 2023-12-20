import styled from "styled-components";
import Card from "./Card";
import { theme } from "../../../theme";

export default function Menu() {
  return (
    <MenuStyled>
      <Card />
    </MenuStyled>
  )
}

const MenuStyled = styled.div`

  flex: 1; // take the space left in the container
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  border-radius: 0px 0px 15px 15px;
  padding: 50px 50px 150px;
  grid-row-gap: 60px;
  overflow: scroll;

`;
