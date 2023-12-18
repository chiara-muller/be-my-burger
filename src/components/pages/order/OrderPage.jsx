// import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";

export default function OrderPage() {

  // const {username} = useParams()

  return (
    <OrderPageStyled>
      <div>
        <NavBar />
        {/* <h1>Bonjour {username}</h1>
        <Link to="/">
          <button>Deconnexion</button>
        </Link> */}
      </div>
      <div className="main-container">

      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`

  height: 100vh;

  .main-container {
    height: 100%;
    background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    border-radius: 0px 0px 15px 15px;
  }

`;
