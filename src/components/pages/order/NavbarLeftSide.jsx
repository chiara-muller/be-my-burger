import styled from "styled-components";
import Logo from "../../resusable-ui/Logo";
import { theme } from "../../../theme";

export default function NavbarLeftSide() {

  function refreshPage(){
    window.location.reload();
  }

  return (
    <NavbarLeftSideStyled onClick={refreshPage}>
      <Logo />
    </NavbarLeftSideStyled>
  )
}

const NavbarLeftSideStyled = styled.div`

    margin-left: ${theme.spacing.sm};
    cursor: pointer;

`;
