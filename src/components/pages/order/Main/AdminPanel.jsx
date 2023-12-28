import styled from "styled-components";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <div className="button-container">
        <button>toggle</button>
        <button>Ajouter un produit</button>
        <button>Modifier un produit</button>
      </div>
      <div className="content-container">
        contenu
      </div>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`

  .button-container {
    text-align: left;
    margin-left: 40px;
  }

  .content-container {
    background-color: blue;
    height: 300px;

  }
`;
