import styled from "styled-components";
// import PanelButton from "../PanelButton";
import AdminTabs from "./AdminTabs"
import AdminPanel from "./AdminPanel"
import { theme } from "../../../../../theme";

export default function Admin() {
  return (
    <AdminStyled>
      <AdminTabs />
      <AdminPanel />
    </AdminStyled>
  )
}


const AdminStyled = styled.div`

position: absolute;
bottom: 0;
left: 0;
right: 0;

`;
