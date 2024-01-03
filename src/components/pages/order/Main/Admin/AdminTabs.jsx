/* eslint-disable react/prop-types */
import styled from "styled-components";
import Tab from "../../../../resusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
// eslint-disable-next-line react/prop-types
export default function AdminTabs() {

  const {
    isCollapsed,
    setIsCollapsed,
    isAddActive,
    setIsAddActive,
    isEditActive,
    setIsEditActive
  } = useContext(OrderContext)

  const activeTab = (tabActive) => {
    setIsCollapsed(false)
    if (tabActive === "Add") {
      setIsAddActive(true)
      setIsEditActive(false)
    }
    if (tabActive === "Edit") {
      setIsAddActive(false)
      setIsEditActive(true)
    }
  }

  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed? "is-active" : ""}
      />
      <Tab
        label="Ajouter un produit"
        Icon={<AiOutlinePlus />}
        onClick={() => activeTab("Add")}
        className={isAddActive? "is-active" : ""}
      />
      <Tab
        label="Modifier un produit"
        Icon={<MdModeEditOutline />}
        onClick={() => activeTab("Edit")}
        className={isEditActive? "is-active" : ""}
      />
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
