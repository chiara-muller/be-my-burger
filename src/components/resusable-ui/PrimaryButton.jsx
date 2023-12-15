import styled from "styled-components"


// eslint-disable-next-line react/prop-types
export default function PrimaryButton({label, Icon}) {
  return (
    <PrimaryButtonStyled>
      <button> {label} </button>
      {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.div`

    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    border-radius: 5px;
    border: 1px solid #FF9F1B;
    background: #FF9F1B;

    button {
      border: none;
      background: none;
      color: white;
      font-size: 15px;
      font-weight: 600;
    }

    .button-icon {
      color: white;
    }

    /*
    &:hover:not(:disabled) {
      color: #FF9F1B;
      background-color: white;
      transition : all 200ms ease-out;
    }

    &:active {
      color: white;
      background-color: #FF9F1B;

    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    } */

    &:hover {
      color: #FF9F1B;
      border: 1px solid #FF9F1B;
      background-color: white;
      cursor: pointer;
      transition: all 200ms ease-out;

      button {
        color: #FF9F1B;
        cursor: pointer;
      }

      .button-icon {
        color: #FF9F1B;
      }
    }
    `;
