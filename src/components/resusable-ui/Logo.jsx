import styled from "styled-components"
import { theme } from "../../theme";

// eslint-disable-next-line react/prop-types
export default function Logo( {scale} ) {
  return (
    <LogoStyled scale={scale}>
      <h1>BE MY</h1>
      <img src="/images/logo-orange.png" alt="logo" />
      <h1>BURGER</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`

  display: flex;
  align-items: center;
  transform: ${(props) => (props.scale ? `scale(${props.scale})` : 'none')};

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.semiBold};
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
