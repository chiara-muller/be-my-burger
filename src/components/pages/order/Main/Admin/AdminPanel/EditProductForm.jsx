import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";
import SavingMessage from "./SavingMessage";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";

export default function EditProductForm() {

  const { username, itemSelected, setItemSelected, handleEdit, titleEditRef, handleEditItemToBuy } = useContext(OrderContext)
  const [ valueOnFocus, setValueOnFocus ] = useState()
  const { isSubmitted : isSaved, displaySuccessMessage } = useSuccessMessage()

  const handleChange = (event) => {
    const {name, value} = event.target
    const itemBeingUpdated = {
      ...itemSelected, // valeur que le produit avait avant
      [name]: value, // permet de modifier l'ancienne valeur
    }
    setItemSelected(itemBeingUpdated) // update le formulaire
    handleEdit(itemBeingUpdated, username) // update le menu
    handleEditItemToBuy(itemBeingUpdated, username) // update le panier
  }

  const handleOnFocus = (event) => {
    const valueOnFocus = event.target.value
    setValueOnFocus(valueOnFocus)
  }

  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value
    if (valueOnFocus != valueOnBlur) {
      displaySuccessMessage()
    }
  }

  const handleStockClick = () => {
    const stockStatus = itemSelected.isAvailable
    const stockStatusUpdated = !stockStatus
    console.log("itemSelected:", itemSelected)
    const itemUpdated = {
      ...itemSelected,
      isAvailable: stockStatusUpdated
    }
    console.log("itemUpdated:", itemUpdated)
    setItemSelected(itemUpdated)
    handleEdit(itemUpdated, username)
    handleEditItemToBuy(itemUpdated, username)
  }

  return (
    <Form product={itemSelected} onChange={handleChange} ref={titleEditRef} onFocus={handleOnFocus} onBlur={handleOnBlur} onStockButtonClick={handleStockClick}>
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}
    </Form>
  )
}
