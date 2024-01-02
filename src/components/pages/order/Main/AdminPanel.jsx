import { useContext, useState } from "react";
import styled from "styled-components";
import PanelContext from "../../../../context/PanelContext";

export default function AdminPanel() {

  const [ isPanelVisible, setIsPanelVisible ] = useState(false)

  const panelContextValue = {
    isPanelVisible,
    setIsPanelVisible
  }

  return (
    <AdminPanelStyled>
      <div className="button-container">
        <PanelContext.Provider value={panelContextValue}>
        <Button />
        </PanelContext.Provider>
      </div>
    </AdminPanelStyled>
  )
  }


function Button() {
  return (
    <div>
      <button>Toggle</button>
      <Button1 />
    </div>
  )
}

function Button1() {
  return (
    <div>
      <button>
        Ajouter un produit
      </button>
      <Button2 />
    </div>
  )
}

function Button2() {

  const [ panelVisible, setPanelVisible ] = useState(false)
  const { isPanelVisible, setIsPanelVisible } = useContext(PanelContext);

  const handleClick = () => {
    setIsPanelVisible(!panelVisible)
    panelVisible
}

  return (
    <div>
      <button onClick={handleClick}>
        Modifier un produit
      </button>
      {isPanelVisible && <div className="content-container">
        contenu
      </div>}
    </div>
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
