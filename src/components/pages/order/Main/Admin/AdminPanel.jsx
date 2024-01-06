import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabActive, getTabsConfig } from "./getTabsConfig";
// import AddProductForm from "./AddProductForm";

export default function AdminPanel() {

  const { currentTabActive } = useContext(OrderContext)

  const tabs = getTabsConfig
  const tabActive = getTabActive(tabs, currentTabActive)

  return (
    <AdminPanelStyled>
      {/* {currentTabActive === "add" && <AddProductForm />}
      {currentTabActive === "edit" && "Modifier un produit"} */}
      {tabActive.Content}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`

  height: 250px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};

`;
