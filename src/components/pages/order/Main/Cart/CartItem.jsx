import styled from "styled-components";

export default function CartItem({title, id, imageSource, price, quantity, onDeleteItem}) {

  return (
   <CartItemStyled key={id}>
    <div className="img-container">
      <img src={imageSource} alt="image" />
    </div>
    <div className="info">
      <p>{title}</p>
      <p>{price}</p>
    </div>
    <div className="quantity">{quantity}</div>
    <button className="delete-button" onClick={onDeleteItem}>delete</button>
   </CartItemStyled>
  )
}

const CartItemStyled = styled.div`

  max-height: 85px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .img-container {
    border: 1px solid blue;
    max-width: 85px;
    max-height: 70px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .delete-button {
    width: 75px;
    height: 85px;
    display: none;
  }

  .quantity {
    width: 75px;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      visibility: hidden;
    }

    &:hover + .delete-button {
      display: block;
    }
  }

`;
