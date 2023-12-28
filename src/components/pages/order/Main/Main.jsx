import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import AdminPanel from "./AdminPanel";

export default function Main() {
  return (
    <MainStyled>
      <Menu />
      <AdminPanel />
    </MainStyled>
  )
}

const MainStyled = styled.div`

  flex: 1; // take the space left in the container
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  border-radius: 0px 0px 15px 15px;
  overflow: scroll;

`;
