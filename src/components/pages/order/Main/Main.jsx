import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu/Menu";
// import Cart from "./Cart";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";


export default function Main() {

  const { isModeAdmin } = useContext(OrderContext)

  return (
    <MainStyled>
      {/* <Cart /> */}
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        { isModeAdmin && <Admin /> }
      </div>
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
  }
`;
