import styled from "styled-components";
import AdminTabs from "./AdminTabs"
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminPanel from "./AdminPanel/AdminPanel";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { panelAnimation } from "../../../../../theme/animations";

export default function Admin() {

  const { isCollapsed } = useContext(OrderContext)

  return (
    <TransitionGroup component={AdminStyled}>
      <CSSTransition appear={true} timeout={500} classNames={"panel-animated"}>
        <div>
          <AdminTabs/>
          {!isCollapsed && <AdminPanel />}
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

const AdminStyled = styled.div`

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;

  ${panelAnimation}

`;
