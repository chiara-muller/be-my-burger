import styled, { css } from "styled-components";
import Button from "./Button";
import { theme } from "../../theme";
import { TiDelete } from "react-icons/ti"
import { fadeInFromRight } from "../../theme/animations";
import Ribbon from "../resusable-ui/Ribbon"

export default function Card({
  title,
  id,
  imageSource,
  leftDescription,
  hasDeleteButton,
  onDelete,
  onClick,
  isAvailable,
  isAdvertised,
  isHoverable,
  isSelected,
  onAddButtonClick,
  className
}) {


  return (
    <CardStyled key={id} className={className} onClick={onClick} $isHoverable={isHoverable} $isSelected={isSelected} >
      <div className="card">
        {isAdvertised && <Ribbon/>}
        {!isAvailable && <div className="not-available-image" />}
        {hasDeleteButton && (
          <button className="delete-button" onClick={onDelete}>
            <TiDelete className="icon"/>
          </button>
        )}
        <div className="image-container">
          <img src={imageSource} alt="menu image"/>
        </div>
        <div className="bottom-card">
          <h4 key={id} className="item-name">{title}</h4>
          <div className="pay-container">
            <div className="price">{leftDescription}</div>
            <div>
              <Button label={"Ajouter"} className={"add-button"} onClick={onAddButtonClick}/>
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  )
}


const CardStyled = styled.div`

  ${({ $isHoverable }) => $isHoverable && hoverableStyle}
  border-radius: ${theme.borderRadius.extraRound};
  height: 330px;

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    width: 240px;
    height: 330px;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};

    .delete-button {
      all: unset;
      position: absolute;
      left: 80%;
      padding: 0px;
      margin: 0px;
      display: flex;
      color: ${theme.colors.primary};
      cursor: pointer;
      width: 30px;
      height: 30px;
      animation: ${fadeInFromRight} 500ms ease-out;

      &:hover {
        color: ${theme.colors.red};
      }

      &:active {
        color: ${theme.colors.primary}
      }

      .icon {
        width: 100%;
        height: 100%;
      }

    }

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
        margin: 10px 0;
        font-size: ${theme.fonts.size.P0}
        /* ;
        cursor: pointer;
        padding: 12px; */
      }
    }

    ${({ $isHoverable, $isSelected }) => $isHoverable && $isSelected && selectedStyle}
  }

  .not-available-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/stock-epuise.png");
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  opacity: 1;
}
`;


const hoverableStyle = css`
  &:hover {
    transform: scale(1.05);
    transition: ease-out 0.4s;
    box-shadow: ${theme.shadows.orangeHighLight};
    cursor: pointer;
  }
`
const selectedStyle = css`
  background: ${theme.colors.primary};
  .add-button {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;
    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }
    &:active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }

    &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }

    &.with-focus {
      border: 1px solid white;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }
      &:active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }

  .delete-button {
    color: ${theme.colors.white};

    &:active {
      color: ${theme.colors.white};
    }
  }

  .bottom-card {
    .price {
      color: ${theme.colors.white};
    }
  }
`
