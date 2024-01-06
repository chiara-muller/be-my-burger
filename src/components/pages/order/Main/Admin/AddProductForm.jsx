import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import 'react-toastify/dist/ReactToastify.css';


export default function AddProductForm() {

  const { menu, setMenu } = useContext(OrderContext)
  const [ inputTitle, setInputTitle ] = useState("")
  const [ inputImage, setInputImage ] = useState("")
  const [ inputPrice, setInputPrice ] = useState("")
  const [ notification, setNotification ] = useState("")

  const handleTitleChange = (event) => {
    setInputTitle(event.target.value)
  }

  const handleImageChange = (event) => {
    setInputImage(event.target.value)
  }

  const handlePriceChange = (event) => {
    setInputPrice(event.target.value)
  }

  const addNewItem = (event) => {
    event.preventDefault()
    const newItem = {
      "id": Date.now(),
      "imageSource": inputImage,
      "title": inputTitle,
      "price": inputPrice,
      "quantity": 0,
      "isAvailable": true,
      "isAdvertised": false,
    }
    const menuCopy = [...menu]
    menuCopy.push(newItem)
    setMenu(menuCopy)
  }

  const handleClick = () => {
    setNotification(<span className="success">ajouté avec succès</span>)
    setTimeout(() => {
      setNotification(notification)
    }, "2000");

  }

  return (
    <AddProductFormStyled action="submit" onSubmit={addNewItem}>
      <div className="image-container">
        <img src="aucune image" alt="image preview" />
      </div>
      <div className="form-container">
        <input type="text" placeholder="Nom du produit (ex: Super Burger)" onChange={handleTitleChange} value={inputTitle}/>
        <input type="url" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" onChange={handleImageChange} value={inputImage}/>
        <input type="number" step="0.01" placeholder="Prix" onChange={handlePriceChange} value={inputPrice}/>
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
  grid-template-rows: repeat(4, 4fr);

  .image-container {
    border: 1px solid black;
    border-radius: 5px;
  }

  .form-container {
    border: 2px solid blue;
  }

  .button-container {
    border: 2px solid brown;
  }

  .success {
    color: green;
  }
`;


// FaHamburger, BsFillCameraFill, MdOutlineEuro, FiCheck,