import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminPanel() {

  const { currentTabActive } = useContext(OrderContext)

  getTabsConfig(currentTabActive)

  return (
    <AdminPanelStyled>
      {currentTabActive === "add" && "Ajouter un produit"}
      {currentTabActive === "edit" && "Modifier un produit"}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`

  height: 250px;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};

`;
