import styled from "styled-components";
import Button from "./Button";
import { theme } from "../../theme";

// eslint-disable-next-line react/prop-types
export default function Card({title, id, imageSource, leftDescription, deleteButton}) {

  return (
    <CardStyled key={id}>
      {deleteButton}
      <div className="image-container">
        <img src={imageSource} alt="menu image"/>
      </div>
      <div className="bottom-card">
        <h4 key={id} className="item-name">{title}</h4>
        <div className="pay-container">
          <div>{leftDescription}</div>
          <div>
            <Button label={"Ajouter"} className={"add-button"}/>
          </div>
        </div>
      </div>
    </CardStyled>
  )
}


const CardStyled = styled.div`

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 300px;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};

  .image-container {
    margin: auto;
    margin-top: 30px;
    margin-bottom: 20px;
    max-width: 200px;
    max-height: 140px;
    min-height: 140px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .bottom-card {
    display: flex;
    flex-direction: column;
    padding: 5px;

    .item-name {
      margin: auto 0;
      font-size: ${theme.fonts.size.P4};
      /* letter-spacing: 0.5px; */
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
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
      /* margin: 10px 0; */
    }
  }
`;
