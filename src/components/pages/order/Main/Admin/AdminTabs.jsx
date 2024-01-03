/* eslint-disable react/prop-types */
import styled from "styled-components";
import Tab from "../../../../resusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";
// eslint-disable-next-line react/prop-types
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

  const tabs = getTabsConfig(currentTabActive)

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
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }

`;
