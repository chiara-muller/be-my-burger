import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../resusable-ui/ToggleButton";


export default function NavbarRightSide() {

  return (
    <NavbarRightSideStyled>
      <ToggleButton labelIfUnchecked="DESACTIVER LE MODE ADMIN" labelIfChecked="ACTIVER LE MODE ADMIN" />
      <Profile />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`

  display: flex;
  align-items: center;
  padding-right: 50px;

`;
