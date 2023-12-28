import { useState } from "react";
import styled from "styled-components";

export default function AdminPanel() {

  const [ showPanel, setShowPanel ] = useState(false)

  const handleClick = () => {
    setShowPanel(!showPanel)
  }

  return (
    <AdminPanelStyled>
      <div className="button-container">
        <button onClick={handleClick}>
          {showPanel ? 'up' : 'down'}
        </button>
        <button>Ajouter un produit</button>
        <button>Modifier un produit</button>
          {showPanel && (
            <div className="content-container">
              contenu
            </div>
          )}
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
