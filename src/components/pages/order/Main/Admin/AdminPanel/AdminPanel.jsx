import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { getTabActive, getTabsConfig } from "../getTabsConfig";
import { EMPTY_ITEM } from "../../../../../../enums/product";

export default function AdminPanel() {

  const { currentTabActive, itemSelected } = useContext(OrderContext)

  const hasBeenClicked = itemSelected !== EMPTY_ITEM

  const tabs = getTabsConfig(hasBeenClicked)
  const tabActive = getTabActive(tabs, currentTabActive)

  return (
    <AdminPanelStyled>
      {tabActive.Content}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`

  height: 240px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 30px 5%;
  box-sizing: border-box;

`;
