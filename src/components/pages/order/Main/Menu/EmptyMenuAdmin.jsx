import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"

export default function EmptyMenuAdmin() {

  const {resetMenu} = useContext(OrderContext)

  return (
    <div>
      <p>Le menu est vide?</p>
      <p>cliquez ci-dessous pour le réinitialiser</p>
      <button onClick={resetMenu}>Générer de nouveaux produits</button>
    </div>
  )
}
