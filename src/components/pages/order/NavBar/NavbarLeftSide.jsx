import styled from "styled-components";
import Logo from "../../../resusable-ui/Logo";
import { refreshPage } from "../../../../utils/window";

export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled onClick={refreshPage}>
      <Logo />
    </NavbarLeftSideStyled>
  )
}

const NavbarLeftSideStyled = styled.div`

  cursor: pointer;

`;
