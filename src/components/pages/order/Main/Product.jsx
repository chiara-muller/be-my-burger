import styled from "styled-components";
import { formatTitle } from "../../../../utils/formatTitle";
import { formatPrice } from "../../../../utils/maths";
import PrimaryButton from "../../../resusable-ui/PrimaryButton";
import { theme } from "../../../../theme";

// eslint-disable-next-line react/prop-types
export default function Product({title, id, imageSource, price}) {
  return (
    <ProductStyled key={id}>
      <img src={imageSource} alt="menu image"/>
      <div className="bottom-card">
        <h4 key={id} className="item-name">{formatTitle(title)}</h4>
        <div className="pay-container">
          <p>{formatPrice(price)}</p>
          <PrimaryButton label={"Ajouter"} className={"add-button"}/>
        </div>
      </div>
    </ProductStyled>
  )
}


const ProductStyled = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 240px;
  height: 330px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};

  img {
    margin: auto;
    margin-top: 40px;
    max-width: 200px;
    max-height: 140px;;
  }

  .bottom-card {
    display: flex;
    flex-direction: column;
    margin: 0 25px 25px 25px;

    .item-name {
      margin: 0;
      font-family: "Amatic SC", cursive;
      font-weight: ${theme.fonts.weights.regular};
      text-align: left;
      font-size: ${theme.fonts.size.P4};
    }

    .pay-container {
      margin: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${theme.colors.primary_burger}
    }

    .add-button {
      padding: 10px 18px;
      margin: 10px 0;
      font-weight: ${theme.fonts.weights.light};
    }
  }

`;
