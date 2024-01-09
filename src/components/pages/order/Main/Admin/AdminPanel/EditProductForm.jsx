import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
// import HintMessage from "./HintMessage"
import TextInput from "../../../../../resusable-ui/TextInput"
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextsConfig";
import { theme } from "../../../../../../theme";

export default function EditProductForm() {

  const { itemSelected, setItemSelected, handleEdit, titleEditRef } = useContext(OrderContext)
  const inputTexts = getInputTextsConfig(itemSelected)

  const handleChange = (event) => {
    const {name, value} = event.target
    const itemBeingUpdated = {
      ...itemSelected, // valeur que le produit avait avant
      [name]: value, // permet de modifier l'ancienne valeur
    }
    setItemSelected(itemBeingUpdated) // update le formulaire
    handleEdit(itemBeingUpdated) // update le menu
  }


  return (
    <AddProductFormStyled >
      <ImagePreview imageSource={itemSelected.imageSource} title={itemSelected.title}/>
      <div className="input-fields">
      {inputTexts.map((input) => (
          <TextInput {...input} key={input.id} onChange={handleChange} version="minimalist" ref={input.name === "title" ? titleEditRef : null}/>
        ))}
      </div>
      <div className="button-container">
        <span className="sentence">
          Cliquer sur un produit du menu pour le modifier{" "}
          <span className="live-update">en temps réel</span>
        </span>
      </div>
    </AddProductFormStyled>
  )
}

const AddProductFormStyled = styled.form`

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8px;
  height: 100%;
  width: 70%;

  .image-container {
    border-radius: 5px;
    grid-area: 1 / 1 / 4 / 2;
  }

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 8px;
  }

  .button-container {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .sentence {
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.size.SM};

      .live-update {
        text-decoration: underline;
      }
    }
  }


`;
