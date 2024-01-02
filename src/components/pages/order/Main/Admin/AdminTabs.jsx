import styled from "styled-components";
import Tab from "../../../../resusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { theme } from "../../../../../theme";

// eslint-disable-next-line react/prop-types
export default function AdminTabs({isCollapsed, setIsCollapsed}) {

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
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed? "is-active" : ""}
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
