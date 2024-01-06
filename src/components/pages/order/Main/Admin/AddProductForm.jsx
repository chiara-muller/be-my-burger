import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import 'react-toastify/dist/ReactToastify.css';
import { theme } from "../../../../../theme"
import TextInput from "../../../../resusable-ui/TextInput"
import {FaHamburger} from "react-icons/fa"
import {BsFillCameraFill} from "react-icons/bs"
import {MdOutlineEuro} from "react-icons/md"
import Button from "../../../../resusable-ui/Button";
import NotificationMessage from "./NotificationMessage";

const EMPTY_ITEM = {
  id: "",
  imageSource: "",
  title: "",
  price: "",
  quantity: 0,
  isAvailable: true,
  isAdvertised: false,
}

export default function AddProductForm() {

  const { handleAdd } = useContext(OrderContext)
  const [ newItem, setNewItem ] = useState(EMPTY_ITEM)
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


  return (
    <AddProductFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="image-container">
        {newItem.imageSource ? <img src={newItem.imageSource} alt="image preview"/> : <div className="empty-image">Aucune image</div>}
      </div>
      <div className="input-fields">
        <TextInput
          name="title"
          type="text"
          placeholder="Nom du produit (ex: Super Burger)"
          Icon={<FaHamburger/>}
          onChange={handleChange}
          value={newItem.title}
          version="minimalist"
        />
        <TextInput
          name="imageSource"
          type="url"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          Icon={<BsFillCameraFill/>}
          onChange={handleChange}
          value={newItem.imageSource}
          version="minimalist"
        />
        <TextInput
          name="price"
          type="number"
          step="0.01"
          placeholder="Prix"
          Icon={<MdOutlineEuro/>}
          onChange={handleChange}
          value={newItem.price}
          version="minimalist"
        />
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
  height: 100%;
  width: 70%;

  .image-container {
    border-radius: 5px;
    grid-area: 1 / 1 / 4 / 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }

    .empty-image {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
    }
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
