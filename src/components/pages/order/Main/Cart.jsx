import styled from "styled-components";

export default function Cart() {
  return (
    <CartStyled>
      <div className="total-container">total</div>
      <div className="order-container">commande</div>
      <div className="footer-container">footer</div>
    </CartStyled>
  )
}

const CartStyled = styled.div`

  box-sizing: border-box;
  border: 2px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .total-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    height: 70px;
  }
  .order-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid green;
    height: 100%;
  }
  .footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid purple;
    height: 70px;
  }

`;
