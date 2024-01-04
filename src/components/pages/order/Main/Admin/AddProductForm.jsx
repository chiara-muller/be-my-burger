import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AddProductForm() {

  const [inputValue, setInputValue ] = useState("")
  const { menu, setMenu } = useContext(OrderContext)

  const notify = () => {
    toast.success("Ajouté avec succès!"), {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    }};

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log("test submit")
  // }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const addNewItem = (event) => {
    event.preventDefault()
    const newMenu = [...menu]
    const newItem = {
      id: Date.now(),
      imageSource: "/images/burger2.png",
      title: "burger",
      price: 7.556,
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    }
    newMenu.push(newItem)
    setMenu(newMenu)
  }

  return (
    <AddProductFormStyled action="submit" onSubmit={addNewItem}>
      <div className="image-and-form">
        <div className="image-container">
          <img src="aucune image" alt="image preview" />
        </div>
        <div className="form-container">
          <input type="text" placeholder="Nom du produit (ex: Super Burger)" name="title" onChange={handleChange} value={inputValue}/>
          <input type="url" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"/>
          <input type="number" step="0.01" placeholder="Prix"/>
        </div>
      </div>
      <div className="button-container">
        <button onClick={notify}>Ajouter un nouveau produit au menu</button>
      </div>
      <ToastContainer />
    </AddProductFormStyled>
  )
}

const AddProductFormStyled = styled.form`

  width: 880px;
  height: 160px;
  border: 2px solid green;
  padding-top: 30px;
  padding-left: 70px;

  .image-and-form {
    display: flex;
    border: 2px solid pink;

      .image-container {
        width: 215px;
        height: 120px;
        border: 1px solid black;
        border-radius: 5px;
      }

      .form-container {
        display: flex;
        flex-direction: column;
        border: 2px solid blue;
        width: 100%;
      }
  }


  .button-container {
    border: 2px solid brown;
  }
`;
