import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";
import SavingMessage from "./SavingMessage";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";

export default function EditProductForm() {

  const { username, itemSelected, setItemSelected, handleEdit, titleEditRef } = useContext(OrderContext)
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

  return (
    <Form
      product={itemSelected}
      onChange={handleChange}
      ref={titleEditRef}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}
    </Form>
  )
}
