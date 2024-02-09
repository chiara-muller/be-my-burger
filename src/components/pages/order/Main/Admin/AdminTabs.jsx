import styled from "styled-components";
import Tab from "../../../../resusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs() {

  const {
    isCollapsed,
    setIsCollapsed,
    currentTabActive,
    setCurrentTabActive
  } = useContext(OrderContext)

  const activeTab = (tabActive) => {
    setIsCollapsed(false)
    setCurrentTabActive(tabActive)
  }

  const tabs = getTabsConfig()

  return (
    <AdminTabsStyled>
      <Tab
        index="chevronUpDown"
        label=""
        Icon={isCollapsed? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed? "is-active" : ""}
      />
      {tabs.map((tab) => {
        return (
          <Tab
            key={tab.index}
            label={tab.label}
            Icon={tab.Icon}
            onClick={() => activeTab(tab.index)}
            className={currentTabActive === tab.index ? "is-active" : ""}
          />
        )
      })}
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`

  display: flex;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
    border-bottom: 2px;
  }

  button {
    margin-left: 1px;
  }

`;
