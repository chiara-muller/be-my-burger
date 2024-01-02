// import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar";

import Main from "./Main/Main";
import { theme } from "../../../theme";

export default function OrderPage() {


  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar />
        <Main />
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`

  height: 100vh;
  background: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 1400px;
    height: 95vh;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }

`;
