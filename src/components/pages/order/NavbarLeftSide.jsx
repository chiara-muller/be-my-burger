import styled from "styled-components";
import Logo from "../../resusable-ui/Logo";

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

  cursor: pointer;

`;
