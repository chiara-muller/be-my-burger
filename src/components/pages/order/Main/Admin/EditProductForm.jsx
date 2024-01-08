import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
// import HintMessage from "./HintMessage"
import TextInput from "../../../../resusable-ui/TextInput"
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextsConfig";
import { EMPTY_ITEM } from "../../../../../enums/product";

export default function EditProductForm() {

  const { itemSelected } = useContext(OrderContext)
  const [ itemBeingEdited, setItemBeingEdited ] = useState(EMPTY_ITEM)

  const handleChange = (event) => {
    const {name, value} = event.target
    setItemBeingEdited({
      ...itemBeingEdited,
      [name]: value,
    })
  }

  const inputTexts = getInputTextsConfig(itemSelected)

  return (
    <AddProductFormStyled >
      {/* <HintMessage /> */}
      <ImagePreview />
      <div className="input-fields">
      {inputTexts.map((input) => (
          <TextInput {...input} key={input.id} onChange={handleChange} version="minimalist"/>
        ))}
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

    .submit-button {
      /* width: 50%; */
      height: 100%;
    }
  }
`;
