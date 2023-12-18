// import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";

export default function OrderPage() {



  return (
    <OrderPageStyled>
      <div>
        <NavBar />
      </div>
      <div className="main-container">
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`

  height: 100vh;

  .main-container {
    height: 90%;
    background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    border-radius: 0px 0px 15px 15px;
  }

`;
