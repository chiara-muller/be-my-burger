import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import 'react-toastify/dist/ReactToastify.css';
import { FiCheck } from "react-icons/fi";

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
  const [ notification, setNotification ] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    // copy du state + ajout de id
    const newItemToAdd = {
      ...newItem,
      id: Date.now()
    }
    handleAdd(newItemToAdd)
    setNewItem(EMPTY_ITEM)
  }

  const handleChange = (event) => {
    const newValue = event.target.value
    const name = event.target.name
    setNewItem({...newItem, [name]: newValue}) // copy du state + ajout des nouvelles valeurs en dynamique property name
  }

  const handleClick = () => {
    setNotification(
      <span className="success"><span><FiCheck /></span>ajouté avec succès</span>
      )
    setTimeout(() => {
      setNotification(notification)
    }, "2000");

  }

  return (
    <AddProductFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="image-container">
        {newItem.imageSource ? <img src={newItem.imageSource} alt="image preview"/> : <div>Aucune image</div>}
      </div>
      <div className="input-fields">
        <input name="title" type="text" placeholder="Nom du produit (ex: Super Burger)" onChange={handleChange} value={newItem.title}/>
        <input name="imageSource" type="url" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" onChange={handleChange} value={newItem.imageSource}/>
        <input name="price" type="number" step="0.01" placeholder="Prix" onChange={handleChange} value={newItem.price}/>
      </div>
      <div className="button-container">
        <button onClick={handleClick}>Ajouter un nouveau produit au menu</button>
        {notification}
      </div>
    </AddProductFormStyled>
  )
}

const AddProductFormStyled = styled.form`

  display: grid;
  border: 2px solid green;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-container {
    border: 1px solid black;
    border-radius: 5px;
    grid-area: 1 / 1 / 4 / 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .input-fields {
    border: 2px solid blue;
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  .button-container {
    border: 2px solid brown;
    grid-area: 4 / 2 / -1 / -1;

    button {
      width: 50%;
      height: 100%;
    }
  }

  .success {
    color: green;
  }
`;


// FaHamburger, BsFillCameraFill, MdOutlineEuro, FiCheck,
