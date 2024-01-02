import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Panel from "./Panel";
import Cart from "./Cart";
// import AdminPanel from "./AdminPanel";

export default function Main() {
  return (
    <MainStyled>
      {/* <Cart /> */}
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">Admin</div>
      </div>
      {/* <AdminPanel /> */}
      {/* <Panel /> */}
    </MainStyled>
  )
}

const MainStyled = styled.div`

  background: ${theme.colors.background_white};
  /* flex: 1;  take the space left in the container */
  height: calc(95vh - 10vh); // we need to precise the height because of the overflow
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  border-radius: 0px 0px 15px 15px;
  display: grid;
  grid-template-columns: 1fr;

  /* .basket {
    background: pink;
  } */

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid; // we need this otherwise the menu is unscrollable
    border-radius: 0px 0px 15px 15px;

    .admin {
      background: red;
      height: 250px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;
