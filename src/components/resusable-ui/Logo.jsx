import styled from "styled-components"
import { theme } from "../../theme";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>BE MY</h1>
      <img src="src/F03 assets/F03 logo-orange.png" alt="logo" />
      <h1>BURGER</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`

  display: flex;
  align-items: center;
  transform: scale(2.5);

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P4};
    line-height: 1em;
    font-weight: ${theme.weights.semiBold};
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    width: 80px;
    height: 60px;
    /* margin: 0 5px; */
    // or
    margin: 0 ${theme.gridUnit / 8 * 5}px;
  }
`;
