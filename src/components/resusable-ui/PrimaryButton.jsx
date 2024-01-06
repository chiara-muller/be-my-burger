import styled from "styled-components"
import { theme } from "../../theme";


// eslint-disable-next-line react/prop-types
export default function PrimaryButton({label, Icon, className}) {
  return (
    <PrimaryButtonStyled className={className}>
      <button> {label} </button>
      <div className="icon">{Icon && Icon}</div>
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
    border-radius: ${theme.borderRadius.round};
    border: 1px solid ${theme.colors.primary_burger};
    background: ${theme.colors.primary_burger};

    button {
      cursor: pointer;
      border: none;
      background: none;
      color: ${theme.colors.white};
      font-size: ${theme.fonts.size.SM};
      font-weight: ${theme.fonts.weights.semiBold};
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.white};
      margin-left: 10px;
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
      color: ${theme.colors.primary_burger};
      border: 1px solid ${theme.colors.primary_burger};
      background-color: ${theme.colors.white};
      cursor: pointer;
      transition: all 200ms ease-out;

      button {
        color: ${theme.colors.primary_burger};
        cursor: pointer;
      }

      .icon {
        color: ${theme.colors.primary_burger};
      }
    }
    `;
