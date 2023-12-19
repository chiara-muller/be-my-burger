// import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";
import Menu from "./Menu";

export default function OrderPage() {



  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar />
        <Menu />
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`

  height: 100vh;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 1400px;
    height: 95vh;
    display: flex;
    flex-direction: column;
  }

`;
