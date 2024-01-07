import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import 'react-toastify/dist/ReactToastify.css';
import TextInput from "../../../../resusable-ui/TextInput"
import Button from "../../../../resusable-ui/Button";
import NotificationMessage from "./NotificationMessage";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextsConfig";

// eslint-disable-next-line react-refresh/only-export-components
export const EMPTY_ITEM = {
  id: "",
  imageSource: "",
  title: "",
  price: "",
  quantity: 0,
  isAvailable: true,
  isAdvertised: false,
}

export default function AddProductForm() {

  const { handleAdd, newItem, setNewItem } = useContext(OrderContext)
  const [ notification, setNotification ] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    // copy du state + ajout de id
    const newItemToAdd = {
      ...newItem,
      id: Date.now()
    }
    handleAdd(newItemToAdd)
    setNewItem(EMPTY_ITEM)
    displayNotification()
  }

  const handleChange = (event) => {
    const newValue = event.target.value
    const name = event.target.name
    setNewItem({...newItem, [name]: newValue}) // copy du state + ajout des nouvelles valeurs en dynamique property name
  }

  const displayNotification = () => {
    setNotification(true)
    setTimeout(() => {
      setNotification(false)
    }, "2000");
  }

  const inputTexts = getInputTextsConfig(newItem)

  return (
    <AddProductFormStyled action="submit" onSubmit={handleSubmit}>
      <ImagePreview imageSource={newItem.imageSource} title={newItem.title}/>
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput {...input} key={input.id} onChange={handleChange} version="minimalist" />
        ))}
      </div>
      <div className="button-container">
        <Button className="submit-button" label={"Ajouter un nouveau produit au menu"} version="success"/>
        {notification && <NotificationMessage />}
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
  height: 70%;
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
