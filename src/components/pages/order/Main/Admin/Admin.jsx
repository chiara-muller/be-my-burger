import styled from "styled-components";
import PanelButton from "../PanelButton";
import { theme } from "../../../../../theme";

export default function Admin() {
  return (
    <AdminStyled>
      <div className="button-container">
        <PanelButton />
        <PanelButton />
        <PanelButton />
      </div>
      <div className="description">
        Description
      </div>
    </AdminStyled>
  )
}


const AdminStyled = styled.div`

  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  height: 250px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

`;