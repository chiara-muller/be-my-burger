import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { EMPTY_ITEM } from "../../../../../../enums/product";
import Form from "./Form";
import SubmitButton from "./SubmitButton";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../utils/maths"

export default function AddProductForm() {

  const { username, handleAdd, newItem, setNewItem, isAvailable } = useContext(OrderContext)
  const { displaySuccessMessage, isSubmitted } = useSuccessMessage()

  const handleSubmit = (event) => {
    event.preventDefault()
    // copy du state + ajout de id
    const newItemToAdd = {
      ...newItem,
      id: Date.now(),
      price: replaceFrenchCommaWithDot(newItem.price),
      isAvailable: isAvailable
    }
    handleAdd(newItemToAdd, username)
    setNewItem(EMPTY_ITEM)
    displaySuccessMessage()
  }

  const handleChange = (event) => {
    const newValue = event.target.value
    const name = event.target.name
    setNewItem({...newItem, [name]: newValue}) // copy du state + ajout des nouvelles valeurs en dynamique property name
  }

  return (
    <Form product={newItem} onSubmit={handleSubmit} onChange={handleChange} >
      <SubmitButton isSubmitted={isSubmitted}/>
    </Form>
  )
}
