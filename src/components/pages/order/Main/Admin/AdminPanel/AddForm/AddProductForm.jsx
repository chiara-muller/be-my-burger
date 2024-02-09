import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import { EMPTY_ITEM } from "../../../../../../../enums/product";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../../utils/maths"
import Form from "../Form/Form";
import SubmitButton from "../AddForm/SubmitButton"

export default function AddProductForm() {

  const { username, handleAdd, newItem, setNewItem } = useContext(OrderContext)
  const { displaySuccessMessage, isSubmitted } = useSuccessMessage()

  const handleSubmit = (event) => {
    event.preventDefault()
    const newItemToAdd = {
      ...newItem,
      id: Date.now(),
      price: replaceFrenchCommaWithDot(newItem.price),
    }
    handleAdd(newItemToAdd, username)
    setNewItem(EMPTY_ITEM)
    displaySuccessMessage()
  }

  const handleChange = (event) => {
    const newValue = event.target.value
    const name = event.target.name
    // copy du state + ajout des nouvelles valeurs en dynamique property name :
    setNewItem({...newItem, [name]: newValue})
  }

  return (
    <Form product={newItem} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted}/>
    </Form>
  )
}
