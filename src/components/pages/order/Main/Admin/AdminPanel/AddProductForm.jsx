import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { EMPTY_ITEM } from "../../../../../../enums/product";
import Form from "./Form";
import SubmitButton from "./SubmitButton";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../utils/maths"

export default function AddProductForm() {

  const { username, handleAdd, newItem, setNewItem } = useContext(OrderContext)
  const { displaySuccessMessage, isSubmitted } = useSuccessMessage()

  const handleSubmit = (event) => {
    event.preventDefault()
    const newItemToAdd = {
      ...newItem,
      id: Date.now(),
      price: replaceFrenchCommaWithDot(newItem.price),
      // isAvailable: true,
      // isAdvertised: false
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

  // const handleStockClick = (newItem) => {
  //   const stockStatus = newItem.isAvailable
  //   const stockStatusUpdated = !stockStatus
  //   newItem.isAvailable = stockStatusUpdated
  // }

  // const handleAdClick = (newItem) => {
  //   const adStatus = newItem.isAdvertised
  //   const adStatusUpdated = !adStatus
  //   newItem.isAdvertised = adStatusUpdated
  // }
  const handleStockClick = () => {
    setNewItem(prevItem => ({
      ...prevItem,
      isAvailable: !prevItem.isAvailable
    }));
  };

  const handleAdClick = () => {
    setNewItem(prevItem => ({
      ...prevItem,
      isAdvertised: !prevItem.isAdvertised
    }));
  };

  return (
    <Form
      product={newItem}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onStockButtonClick={() => handleStockClick()}
      onAdButtonClick={() => handleAdClick()}
      isAvailable={newItem.isAvailable}
      isAdvertised={newItem.isAdvertised}
    >
      <SubmitButton isSubmitted={isSubmitted}/>
    </Form>
  )
}
