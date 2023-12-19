// import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";

export default function OrderPage() {



  return (
    <OrderPageStyled>
      <div className="container">
          <NavBar />
        <div className="main-container">
        </div>
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

    .main-container {
      flex: 1; // take the space left in the container
      background: #F5F5F7;
      box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
      border-radius: 0px 0px 15px 15px;
    }
  }


`;
