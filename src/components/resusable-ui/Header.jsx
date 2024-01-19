import styled from "styled-components";
import { theme } from "../../theme";

export default function Header({children}) {
  return (
    <HeaderStyled>{children}</HeaderStyled>
  )
}

const HeaderStyled = styled.div`

  height: 70px;
  padding: 0px 16px;
  background-color: ${theme.colors.background_dark};

`;
