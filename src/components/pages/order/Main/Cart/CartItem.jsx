import styled from "styled-components";

export default function CartItem({title, id, imageSource, price, quantity}) {

  return (
   <CartItemStyled key={id}>
    <div className="img"><img src={imageSource} alt="image" /></div>
    <div className="info">
      <p>{title}</p>
      <p>{price}</p>
    </div>
    <div className="quantity">{quantity}</div>
   </CartItemStyled>
  )
}

const CartItemStyled = styled.div`
  border: 2px solid red;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .img {
    max-width: 85px;
    max-height: 70px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

`;
