import styled from "styled-components";
import Logo from "../../resusable-ui/Logo";
import ProfileInfo from "./ProfileInfo";
import { theme } from "../../../theme";

export default function NavBar() {
  return (
    <NavBarStyled>
      <div className="logo-container">
        <Logo />
      </div>
      <ProfileInfo />
    </NavBarStyled>
  )
}


const NavBarStyled = styled.div`

  display: flex;
  justify-content: space-between;

  .logo-container {
    margin-left: ${theme.spacing.sm};
  }

`;
