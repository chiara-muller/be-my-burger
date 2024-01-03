import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminPanel() {

  const { isAddActive, isEditActive } = useContext(OrderContext)

  return (
    <AdminPanelStyled>
      {isAddActive && "Ajouter un produit"}
      {isEditActive && "Modifier un produit"}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`

  height: 250px;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};

`;
