import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import Button from "../../../../../resusable-ui/Button";
import { EMPTY_ITEM } from "../../../../../../enums/product";
import SubmitMessage from "./SubmitMessage";
import Form from "./Form";


export default function AddProductForm() {

  const { handleAdd, newItem, setNewItem } = useContext(OrderContext)
  const [ isSubmitted, setIsSubmitted ] = useState(false)

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
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, "2000");
  }

  return (
    <Form product={newItem} onSubmit={handleSubmit} onChange={handleChange}>
      <>
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </>
    </Form>
  )
}
