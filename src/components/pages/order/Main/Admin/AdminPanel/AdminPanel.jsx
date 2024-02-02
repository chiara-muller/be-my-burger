import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { getTabActive, getTabsConfig } from "../getTabsConfig";
import { EMPTY_ITEM } from "../../../../../../enums/product";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function AdminPanel() {

  const { currentTabActive, itemSelected } = useContext(OrderContext)

  const hasBeenClicked = itemSelected !== EMPTY_ITEM

  const tabs = getTabsConfig(hasBeenClicked)
  const tabActive = getTabActive(tabs, currentTabActive)

  return (
    <TransitionGroup component={AdminPanelStyled}>
      <CSSTransition appear={true} classNames={"admin-panel-animated"} timeout={500} key={tabActive.Content}>
        {tabActive.Content}
      </CSSTransition>
    </TransitionGroup>
  )
}

const AdminPanelStyled = styled.div`

  position: relative;
  height: 240px;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 30px 5%;
  box-sizing: border-box;

  .admin-panel-animated-enter{
    transform: translateY(0%);
    position: absolute;
    bottom: 0;
  }
  .admin-panel-animated-active{
    transform: translateY(-100%);
    transition: 300ms;
  }
  .admin-panel-animated-exit{}

`;
