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
      <CSSTransition classNames="panel-animated" timeout={3000}>
        {tabActive.Content}
      </CSSTransition>
    </TransitionGroup>
  )
}

const AdminPanelStyled = styled.div`

  height: 240px;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 30px 5%;
  box-sizing: border-box;

  .panel-animated-enter{
    transform: translateY(100%);
  }
  .panel-animated-enter-active{
    transform: translateY(0%);
    transition: 5s;
  }
  .panel-animated-enter-done{}

  .panel-animated-exit{}
  .panel-animated-exit-active{}
  .panel-animated-exit-done{}
`;
