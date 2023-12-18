import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import NavbarLeftSide from "./NavbarLeftSide";



export default function NavBar() {

  return (
    <NavBarStyled>
      <NavbarLeftSide />
      <NavbarRightSide />
    </NavBarStyled>
  )
}


const NavBarStyled = styled.div`

  display: flex;
  justify-content: space-between;
  height: 10vh;
  background-color: white;
  border-radius: 15px 15px 0px 0px;

`;
